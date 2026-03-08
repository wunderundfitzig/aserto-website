'use client'

import * as d3 from 'd3'
import * as colors from 'lib/colors'
import { RefObject, useEffect, useRef, useState } from 'react'

const DOTS_PER_PX = 1 / 14000
const MAX_DOTS = 300
const INITIAL_SPEED = 0.1
const MAX_SPEED = 0.1
const WALL_BOUNCE = 30
const REPULSION_STRENGTH = -0.09
const POSITION_STRENGTH = 0.01
const LINK_STRENGTH = 0.001
const LINK_DISTANCE = 30

const SIZES = [
  { radius: 6, red: colors.backgroundRed, green: colors.backgroundGreen },
  { radius: 8, red: colors.lightRed, green: colors.lightGreen },
  { radius: 12, red: colors.red, green: colors.green },
]

type DotNode = d3.SimulationNodeDatum & {
  radius: number
  color: string
  isRed: boolean
  sizeIndex: number
  appearDelay: number
  disappearDelay: number
}

type DotLink = d3.SimulationLinkDatum<DotNode>
type DotCircles = d3.Selection<
  SVGCircleElement,
  DotNode,
  SVGSVGElement,
  unknown
>

export type DotMode = 'move' | 'filter' | 'attract' | 'center'

type Props = {
  mode?: DotMode
  exclusionRefs?: RefObject<Element | null>[]
}

export default function Dots({ mode = 'move', exclusionRefs = [] }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const simulationRef = useRef<d3.Simulation<DotNode, DotLink> | null>(null)
  const dotsRef = useRef<DotNode[]>([])
  const circlesRef = useRef<DotCircles | null>(null)
  const modeRef = useRef(mode)
  modeRef.current = mode

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const widthRef = useRef(0)
  const heightRef = useRef(0)
  widthRef.current = width
  heightRef.current = height

  // Effect 1: track container size (debounced)
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let timeout: ReturnType<typeof setTimeout>

    const observer = new ResizeObserver(() => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        setWidth(container.clientWidth)
        setHeight(container.clientHeight)
      }, 200)
    })

    observer.observe(container)
    setWidth(container.clientWidth)
    setHeight(container.clientHeight)

    return () => {
      clearTimeout(timeout)
      observer.disconnect()
    }
  }, [])

  // Effect 2: create simulation once on mount
  useEffect(() => {
    const container = containerRef.current
    if (!container || !svgRef.current) return

    const initialWidth = container.clientWidth
    const initialHeight = container.clientHeight
    widthRef.current = initialWidth
    heightRef.current = initialHeight

    const svg = d3.select(svgRef.current)
    const { simulation, dots, circles } = setup(
      svg,
      initialWidth,
      initialHeight,
      modeRef.current,
      exclusionRefs,
      widthRef,
      heightRef,
    )

    simulationRef.current = simulation
    dotsRef.current = dots
    circlesRef.current = circles

    return () => {
      simulation.stop()
      simulationRef.current = null
    }
  }, [])

  // Effect 3: re-register tick handler when viewport size changes
  useEffect(() => {
    const simulation = simulationRef.current
    const circles = circlesRef.current
    if (!simulation || !circles) return

    setBordersAndLimitSpeed(simulation, dotsRef.current, circles, width, height)
  }, [width, height])

  // Effect 4: update forces + circle visibility when mode changes
  useEffect(() => {
    const simulation = simulationRef.current
    const circles = circlesRef.current
    if (!simulation || !circles) return

    applyMode(simulation, mode, circles)
  }, [mode])

  return (
    <div ref={containerRef} className='block w-full h-full overflow-hidden'>
      <svg
        ref={svgRef}
        className='block'
        width={width}
        height={height}
        viewBox={`${-width / 2} ${-height / 2} ${width} ${height}`}
      />
    </div>
  )
}

function isVisible(dot: DotNode, mode: DotMode): boolean {
  switch (mode) {
    case 'move':
      return true
    case 'filter':
    case 'attract':
      return !dot.isRed
    case 'center':
      return !dot.isRed && dot.sizeIndex < 2
  }
}

// Custom D3 force modelled after forceCollide: directly corrects dot positions
// each tick so dots never rest inside an exclusion rect.
// Calls getBoundingClientRect() on every tick so rects stay accurate during scroll.
// How far outside the rect surface the soft repulsion field extends (px)
const EXCLUDE_REPULSION_ZONE = 40
// Peak velocity impulse applied at the rect surface
const EXCLUDE_REPULSION_STRENGTH = 2
// Fraction of normal velocity retained after a hard bounce (0 = dead-stop, 1 = elastic)
const EXCLUDE_BOUNCE_DAMPING = 1
const BUFFER_Y = 0
const BUFFER_X = 0

function forceExcludeRects(
  exclusionRefs: RefObject<Element | null>[],
  widthRef: RefObject<number>,
  heightRef: RefObject<number>,
) {
  let nodes: DotNode[] = []

  function force() {
    const w = widthRef.current
    const h = heightRef.current

    for (const dot of nodes) {
      const cx = dot.x ?? 0
      const cy = dot.y ?? 0

      if (dot.sizeIndex < 1) continue

      for (const elRef of exclusionRefs) {
        const rect = elRef.current?.getBoundingClientRect()
        if (!rect) continue

        // Convert viewport rect to SVG coordinate space (origin at centre)
        const rLeft = rect.left + BUFFER_X - w / 2
        const rRight = rect.right - BUFFER_X - w / 2
        const rTop = rect.top + BUFFER_Y - h / 2
        const rBottom = rect.bottom - BUFFER_Y - h / 2

        // Nearest point on the rect to the dot centre
        const nearestX = Math.max(rLeft, Math.min(cx, rRight))
        const nearestY = Math.max(rTop, Math.min(cy, rBottom))
        const dx = cx - nearestX
        const dy = cy - nearestY
        const distSq = dx * dx + dy * dy
        const r = dot.radius

        // Soft field extends EXCLUDE_REPULSION_ZONE px beyond the dot radius
        const fieldEdge = r + EXCLUDE_REPULSION_ZONE
        if (distSq >= fieldEdge * fieldEdge) continue

        const dist = Math.sqrt(distSq)

        // Compute outward normal from rect surface toward dot
        let nx: number
        let ny: number

        if (dist > 0) {
          nx = dx / dist
          ny = dy / dist
        } else {
          // Dot centre is inside rect — eject toward nearest edge
          const dLeft = cx - rLeft
          const dRight = rRight - cx
          const dTop = cy - rTop
          const dBottom = rBottom - cy
          const minEdge = Math.min(dLeft, dRight, dTop, dBottom)
          if (minEdge === dLeft) {
            nx = -1
            ny = 0
          } else if (minEdge === dRight) {
            nx = 1
            ny = 0
          } else if (minEdge === dTop) {
            nx = 0
            ny = -1
          } else {
            nx = 0
            ny = 1
          }
        }

        if (dist < r) {
          // Hard overlap: correct position so the dot clears the surface …
          const overlap = r - dist
          dot.x = (dot.x ?? 0) + nx * overlap
          dot.y = (dot.y ?? 0) + ny * overlap

          // … then bounce: reflect the inward velocity component
          const vx = dot.vx ?? 0
          const vy = dot.vy ?? 0
          const vDotN = vx * nx + vy * ny
          if (vDotN < 0) {
            // Moving into the surface — reflect with damping
            dot.vx = vx - (1 + EXCLUDE_BOUNCE_DAMPING) * vDotN * nx
            dot.vy = vy - (1 + EXCLUDE_BOUNCE_DAMPING) * vDotN * ny
          }
        } else {
          // Soft repulsion zone: quadratic impulse that peaks at the surface
          const t = 1 - (dist - r) / EXCLUDE_REPULSION_ZONE // 1 at surface, 0 at field edge
          const strength = EXCLUDE_REPULSION_STRENGTH * t * t
          dot.vx = (dot.vx ?? 0) + nx * strength
          dot.vy = (dot.vy ?? 0) + ny * strength
        }
      }
    }
  }

  force.initialize = (n: DotNode[]) => {
    nodes = n
  }

  return force
}

function setup(
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  width: number,
  height: number,
  mode: DotMode,
  exclusionRefs: RefObject<Element | null>[],
  widthRef: RefObject<number>,
  heightRef: RefObject<number>,
): {
  simulation: d3.Simulation<DotNode, DotLink>
  dots: DotNode[]
  circles: DotCircles
} {
  svg.selectAll('circle').remove()

  const dotCount = Math.min(Math.round(width * height * DOTS_PER_PX), MAX_DOTS)

  const dots: DotNode[] = Array.from({ length: dotCount }, (_, i) => {
    const angle = Math.random() * 2 * Math.PI
    const sizeIndex = Math.floor((i * SIZES.length) / dotCount)
    const size = SIZES[sizeIndex]
    const isRed = Math.random() < 0.4
    return {
      x: (Math.random() - 0.5) * width,
      y: (Math.random() - 0.5) * height,
      vx: Math.cos(angle) * INITIAL_SPEED,
      vy: Math.sin(angle) * INITIAL_SPEED,
      radius: size.radius,
      color: isRed ? size.red : size.green,
      isRed,
      sizeIndex,
      appearDelay: Math.random() * 100,
      disappearDelay: Math.random() * 1000,
    }
  })

  const circles = svg
    .selectAll<SVGCircleElement, DotNode>('circle')
    .data(dots)
    .join('circle')
    .attr('r', (d) => d.radius)
    .attr('fill', (d) => d.color)
    .style('opacity', (d) => (isVisible(d, mode) ? 1 : 0))

  const greenDots = dots.filter((d) => !d.isRed)
  const hubDots = greenDots.filter((d) => d.sizeIndex === 1)
  const spokeDots = greenDots.filter((d) => d.sizeIndex !== 1)

  const dotLinks: DotLink[] =
    hubDots.length > 0
      ? spokeDots.map((spoke, i) => ({
          source: spoke,
          target: hubDots[i % hubDots.length],
        }))
      : []

  const simulation = d3
    .forceSimulation<DotNode, DotLink>(dots)
    .force(
      'link',
      d3
        .forceLink<DotNode, DotLink>(dotLinks)
        .strength(0)
        .distance(LINK_DISTANCE),
    )
    .force(
      'excludeRects',
      forceExcludeRects(exclusionRefs, widthRef, heightRef),
    )
    .alphaDecay(0)

  applyMode(simulation, mode, circles)

  return { simulation, dots, circles }
}

function setBordersAndLimitSpeed(
  simulation: d3.Simulation<DotNode, DotLink>,
  dots: DotNode[],
  circles: DotCircles,
  width: number,
  height: number,
) {
  const left = -width / 2 - 30
  const right = width / 2 + 30
  const top = -height / 2 - 30
  const bottom = height / 2 + 30

  simulation.on('tick', () => {
    for (const dot of dots) {
      let vx = dot.vx ?? 0
      let vy = dot.vy ?? 0

      // Cap speed
      if (Math.abs(vx) + Math.abs(vy) > MAX_SPEED) {
        const speed = Math.sqrt(vx * vx + vy * vy)
        dot.vx = (vx / speed) * MAX_SPEED
        dot.vy = (vy / speed) * MAX_SPEED
        vx = dot.vx
        vy = dot.vy
      }

      const x = dot.x ?? 0
      const y = dot.y ?? 0

      // Wall bounce
      if (x < left) {
        dot.x = left
        dot.vx = Math.abs(vx) * WALL_BOUNCE
      } else if (x > right) {
        dot.x = right
        dot.vx = -Math.abs(vx) * WALL_BOUNCE
      }
      if (y < top) {
        dot.y = top
        dot.vy = Math.abs(vy) * WALL_BOUNCE
      } else if (y > bottom) {
        dot.y = bottom
        dot.vy = -Math.abs(vy) * WALL_BOUNCE
      }
    }

    circles.attr('cx', (d) => d.x ?? 0).attr('cy', (d) => d.y ?? 0)
  })
}

function applyMode(
  simulation: d3.Simulation<DotNode, DotLink>,
  mode: DotMode,
  circles: DotCircles,
) {
  const linkForce = simulation.force<d3.ForceLink<DotNode, DotLink>>('link')

  circles
    .transition()
    .duration(800)
    .delay((d) => (isVisible(d, mode) ? d.appearDelay : d.disappearDelay))
    .style('opacity', (d) => (isVisible(d, mode) ? 1 : 0))

  switch (mode) {
    case 'move':
    case 'filter':
      simulation.velocityDecay(0)
      simulation.force(
        'charge',
        d3
          .forceManyBody<DotNode>()
          .strength(REPULSION_STRENGTH)
          .distanceMax(100),
      )
      linkForce?.strength(0)
      simulation.force('x', d3.forceX(0).strength(0))
      simulation.force('y', d3.forceY(0).strength(0))
      break
    case 'attract':
      simulation.velocityDecay(0.1)
      simulation.force(
        'charge',
        d3
          .forceManyBody<DotNode>()
          .strength(REPULSION_STRENGTH)
          .distanceMax(300),
      )
      linkForce?.strength(LINK_STRENGTH).distance(LINK_DISTANCE)
      simulation.force('x', d3.forceX(0).strength(0))
      simulation.force('y', d3.forceY(0).strength(0))
      break
    case 'center':
      simulation.velocityDecay(0.4)
      simulation.force('charge', null)
      linkForce?.strength(0)
      simulation.force('x', d3.forceX(0).strength(POSITION_STRENGTH))
      simulation.force('y', d3.forceY(0).strength(POSITION_STRENGTH))
  }
}
