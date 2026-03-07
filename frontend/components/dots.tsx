'use client'

import * as d3 from 'd3'
import * as colors from 'lib/colors'
import { FunctionComponent, useEffect, useRef, useState } from 'react'

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

export type DotMode = 'move' | 'attract' | 'center'

function isVisible(dot: DotNode, mode: DotMode): boolean {
  if (mode === 'move') return true
  if (mode === 'attract') return !dot.isRed
  return !dot.isRed && dot.sizeIndex < 2
}

function applyMode(simulation: d3.Simulation<DotNode, DotLink>, mode: DotMode) {
  const linkForce = simulation.force<d3.ForceLink<DotNode, DotLink>>('link')

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

type Props = {
  mode?: DotMode
}

const Dots: FunctionComponent<Props> = ({ mode = 'move' }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const simulationRef = useRef<d3.Simulation<DotNode, DotLink> | null>(null)
  const dotsRef = useRef<DotNode[]>([])
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

  // Effect 2: restart simulation whenever size changes
  useEffect(() => {
    if (width === 0 || height === 0 || !svgRef.current) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('circle').remove()

    const dotCount = Math.min(
      Math.round(width * height * DOTS_PER_PX),
      MAX_DOTS,
    )

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

    dotsRef.current = dots

    const currentMode = modeRef.current

    const circles = svg
      .selectAll<SVGCircleElement, DotNode>('circle')
      .data(dots)
      .join('circle')
      .attr('r', (d) => d.radius)
      .attr('fill', (d) => d.color)
      .style('opacity', (d) => (isVisible(d, currentMode) ? 1 : 0))

    const greenDots = dots.filter((d) => !d.isRed)
    const dotLinks: DotLink[] = greenDots.slice(0, -1).map((source, i) => ({
      source,
      target: greenDots[i + 1],
    }))

    const simulation = d3
      .forceSimulation<DotNode, DotLink>(dots)
      .force(
        'charge',
        d3
          .forceManyBody<DotNode>()
          .strength(REPULSION_STRENGTH)
          .distanceMax(100),
      )
      .force(
        'link',
        d3
          .forceLink<DotNode, DotLink>(dotLinks)
          .strength(0)
          .distance(LINK_DISTANCE),
      )
      .alphaDecay(0)
      .on('tick', () => {
        for (const dot of dots) {
          const speed = Math.sqrt((dot.vx ?? 0) ** 2 + (dot.vy ?? 0) ** 2)
          if (speed > MAX_SPEED) {
            dot.vx = ((dot.vx ?? 0) / speed) * MAX_SPEED
            dot.vy = ((dot.vy ?? 0) / speed) * MAX_SPEED
          }
          if ((dot.x ?? 0) < -width / 2) {
            dot.vx = Math.abs(dot.vx ?? 0)
          } else if ((dot.x ?? 0) > width / 2) {
            dot.vx = -Math.abs(dot.vx ?? 0)
          }
          if ((dot.y ?? 0) < -height / 2) {
            dot.vy = Math.abs(dot.vy ?? 0)
          } else if ((dot.y ?? 0) > height / 2) {
            dot.vy = -Math.abs(dot.vy ?? 0)
          }
        }
        circles.attr('cx', (d) => d.x ?? 0).attr('cy', (d) => d.y ?? 0)
      })

    applyMode(simulation, modeRef.current)
    simulationRef.current = simulation

    return () => {
      simulation.stop()
      simulationRef.current = null
    }
  }, [width, height])

  // Effect 3: update forces + circle visibility when mode changes
  useEffect(() => {
    const simulation = simulationRef.current
    if (!simulation || !svgRef.current) return

    applyMode(simulation, mode)

    d3.select(svgRef.current)
      .selectAll<SVGCircleElement, DotNode>('circle')
      .transition()
      .duration(800)
      .delay((d) => (isVisible(d, mode) ? d.appearDelay : d.disappearDelay))
      .style('opacity', (d) => (isVisible(d, mode) ? 1 : 0))
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

export default Dots
