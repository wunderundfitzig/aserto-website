'use client'

import * as d3 from 'd3'
import * as colors from 'lib/colors'
import { FunctionComponent, useEffect, useRef, useState } from 'react'

const DOTS_PER_PX = 1 / 14000
const MAX_DOTS = 300
const INITIAL_SPEED = 0.1

const SIZES = [
  { radius: 6, red: colors.backgroundRed, green: colors.backgroundGreen },
  { radius: 8, red: colors.lightRed, green: colors.lightGreen },
  { radius: 12, red: colors.red, green: colors.green },
]

type DotNode = d3.SimulationNodeDatum & {
  radius: number
  color: string
}

const Dots: FunctionComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [nodes, setNodes] = useState<DotNode[]>([])

  // Effect 1: track container size (debounced so simulation only restarts once resizing settles)
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
    if (width === 0 || height === 0) return

    const dotCount = Math.min(
      Math.round(width * height * DOTS_PER_PX),
      MAX_DOTS,
    )

    const dots: DotNode[] = Array.from({ length: dotCount }, (_, i) => {
      const angle = Math.random() * 2 * Math.PI
      const size = SIZES[Math.floor((i * SIZES.length) / dotCount)]
      const isRed = Math.random() < 0.4
      return {
        x: (Math.random() - 0.5) * width,
        y: (Math.random() - 0.5) * height,
        vx: Math.cos(angle) * INITIAL_SPEED,
        vy: Math.sin(angle) * INITIAL_SPEED,
        radius: size.radius,
        color: isRed ? size.red : size.green,
      }
    })

    const simulation = d3
      .forceSimulation<DotNode>(dots)
      .force('charge', d3.forceManyBody().strength(-0.005).distanceMax(40))
      .alphaDecay(0)
      .velocityDecay(0)
      .on('tick', () => {
        for (const dot of dots) {
          if ((dot.x ?? 0) < -width / 2) {
            dot.x = -width / 2
            dot.vx = Math.abs(dot.vx ?? 0)
          } else if ((dot.x ?? 0) > width / 2) {
            dot.x = width / 2
            dot.vx = -Math.abs(dot.vx ?? 0)
          }
          if ((dot.y ?? 0) < -height / 2) {
            dot.y = -height / 2
            dot.vy = Math.abs(dot.vy ?? 0)
          } else if ((dot.y ?? 0) > height / 2) {
            dot.y = height / 2
            dot.vy = -Math.abs(dot.vy ?? 0)
          }
        }
        setNodes([...dots])
      })

    return () => {
      simulation.stop()
    }
  }, [width, height])

  return (
    <div ref={containerRef} className='block w-full h-full overflow-hidden'>
      <svg
        className='block'
        width={width}
        height={height}
        viewBox={`${-width / 2} ${-height / 2} ${width} ${height}`}
      >
        {nodes.map((dot, i) => (
          <circle
            key={i}
            cx={dot.x}
            cy={dot.y}
            r={dot.radius}
            fill={dot.color}
          />
        ))}
      </svg>
    </div>
  )
}

export default Dots
