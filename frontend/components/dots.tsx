'use client'

import * as d3 from 'd3'
import * as colors from 'lib/colors'
import { FunctionComponent, useEffect, useRef, useState } from 'react'

const DOT_COUNT = 50
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

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let width = container.clientWidth
    let height = container.clientHeight
    setWidth(width)
    setHeight(height)

    const dots: DotNode[] = Array.from({ length: DOT_COUNT }, (_, i) => {
      const angle = Math.random() * 2 * Math.PI
      const size = SIZES[Math.floor((i * SIZES.length) / DOT_COUNT)]
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
      .force('center', d3.forceCenter(0, 0).strength(0.05))
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

    const observer = new ResizeObserver(() => {
      width = container.clientWidth
      height = container.clientHeight
      setWidth(width)
      setHeight(height)
    })
    observer.observe(container)

    return () => {
      simulation.stop()
      observer.disconnect()
    }
  }, [])

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
