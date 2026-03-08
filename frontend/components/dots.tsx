'use client'

import * as d3 from 'd3'
import * as colors from 'lib/colors'
import { useEffect, useRef, useState } from 'react'

const DOTS_PER_PX = 1 / 14000
const MAX_DOTS = 300
const INITIAL_SPEED = 0.1
const MAX_SPEED = 0.1
const REPULSION_STRENGTH = -0.09
const MAX_POSITION_STRENGTH = 0.01
const LINK_STRENGTH = 0.0005
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

export type DotMode = 'move' | 'attract' | 'center'

type Props = {
  mode?: DotMode
}

export default function Dots({ mode = 'move' }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const simulationRef = useRef<d3.Simulation<DotNode, DotLink> | null>(null)
  const dotsRef = useRef<DotNode[]>([])
  const circlesRef = useRef<DotCircles | null>(null)
  const modeRef = useRef(mode)
  modeRef.current = mode

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

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

    const svg = d3.select(svgRef.current)
    const { simulation, dots, circles } = setup(
      svg,
      container.clientWidth,
      container.clientHeight,
      modeRef.current,
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
  if (mode === 'move') return true
  if (mode === 'attract') return !dot.isRed
  return !dot.isRed && dot.sizeIndex < 2
}

function setup(
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  width: number,
  height: number,
  mode: DotMode,
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
      disappearDelay: Math.random() * 2000,
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
  const dotLinks: DotLink[] = greenDots.slice(0, -1).map((source, i) => ({
    source,
    target: greenDots[i + 1],
  }))

  const simulation = d3
    .forceSimulation<DotNode, DotLink>(dots)
    .force(
      'link',
      d3
        .forceLink<DotNode, DotLink>(dotLinks)
        .strength(0)
        .distance(LINK_DISTANCE),
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
  const left = -width / 2
  const right = width / 2
  const top = -height / 2
  const bottom = height / 2

  simulation.on('tick', () => {
    for (const dot of dots) {
      const x = dot.x ?? 0
      const y = dot.y ?? 0
      const vx = dot.vx ?? 0
      const vy = dot.vy ?? 0
      if (Math.abs(vx) + Math.abs(vy) > MAX_SPEED) {
        const speed = Math.sqrt(vx * vx + vy * vy)
        dot.vx = (vx / speed) * MAX_SPEED
        dot.vy = (vy / speed) * MAX_SPEED
      }

      if (x < left) {
        dot.x = left
        dot.vx = Math.abs(vx)
      } else if (x > right) {
        dot.x = right
        dot.vx = -Math.abs(vx)
      }
      if (y < top) {
        dot.y = top
        dot.vy = Math.abs(vy)
      } else if (y > bottom) {
        dot.y = bottom
        dot.vy = -Math.abs(vy)
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

  if (mode === 'move') {
    simulation.velocityDecay(0)
    simulation.force(
      'charge',
      d3.forceManyBody<DotNode>().strength(REPULSION_STRENGTH).distanceMax(100),
    )
    linkForce?.strength(0)
    simulation.force('x', d3.forceX(0).strength(0))
    simulation.force('y', d3.forceY(0).strength(0))
  } else if (mode === 'attract') {
    simulation.velocityDecay(0.05)
    simulation.force(
      'charge',
      d3.forceManyBody<DotNode>().strength(REPULSION_STRENGTH).distanceMax(300),
    )
    linkForce?.strength(LINK_STRENGTH)
    simulation.force('x', d3.forceX(0).strength(0))
    simulation.force('y', d3.forceY(0).strength(0))
  } else if (mode === 'center') {
    simulation.velocityDecay(0.1)
    simulation.force('charge', null)
    linkForce?.strength(LINK_STRENGTH)
    simulation.force('x', d3.forceX(0).strength(MAX_POSITION_STRENGTH))
    simulation.force('y', d3.forceY(0).strength(MAX_POSITION_STRENGTH))
  }
}
