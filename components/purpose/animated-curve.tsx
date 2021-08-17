import { FunctionComponent, useEffect, useRef, useState } from 'react'
import PoissonDiskSampling from 'poisson-disk-sampling'
import * as colors from 'lib/colors'

const pds = new PoissonDiskSampling({
  shape: [50, 165],
  minDistance: 4,
  maxDistance: 5,
  tries: 10,
})

// this is from https://bl.ocks.org/1wheel/ac027026e8e73bab7b65cfe17e257140
function curvedPath(data: [number, number][], p: number) {
  return (
    'M' +
    data
      .map((d, i) => {
        if (!i) return d.join(' ')
        if (i == data.length - 1) return 'L ' + d.join(' ')

        const [x0, y0] = data[i - 1]
        const [x1, y1] = data[i + 0]
        const [x2, y2] = data[i + 1]

        return [
          'L',
          lerp(x1, x0, p),
          lerp(y1, y0, p),
          'C',
          d.join(' '),
          d.join(' '),
          lerp(x1, x2, p),
          lerp(y1, y2, p),
        ].join(' ')
      })
      .join(' ')
  )
}

function lerp(a: number, b: number, t: number) {
  return a + t * (b - a)
}

type Dot = { cx: number; cy: number }
type Point = [number, number]

export const AnimatedCurve: FunctionComponent = () => {
  const curveRef = useRef<SVGPathElement | null>(null)
  const [dots, setDots] = useState<Dot[]>([])
  const [points, setPoints] = useState<Point[]>([])
  const [visibleDotsCount, setVisibleDotsCount] = useState(0)
  const curvePoints: [number, number][] = [
    [50, 0],
    [20, 50],
    [140, 140],
    [25, 200],
  ]

  useEffect(() => {
    pds.reset()
    dots.forEach((dot) => {
      pds.addPoint([dot.cx - 100, dot.cy - 60])
    })
    const points = pds.getAllPoints() as Point[]
    pds.fill()
    setPoints(points)
  }, [dots])

  useEffect(() => {
    if (curveRef.current === null) return
    const curveLength = curveRef.current.getTotalLength()
    let length = 2.6
    const step = 5
    const dots: Dot[] = []
    while (length < curveLength) {
      const point = curveRef.current.getPointAtLength(length)
      if (point.x > 101 && point.y < 190) {
        dots.push({ cx: point.x, cy: point.y })
      }
      length += step
    }
    setDots(dots)
  }, [])

  useEffect(() => {
    if (visibleDotsCount >= dots.length) return
    setTimeout(
      () => setVisibleDotsCount(visibleDotsCount + 1),
      visibleDotsCount === 0 ? 2000 : 300
    )
  }, [dots, visibleDotsCount])

  return (
    <section className='animated-curve'>
      <svg viewBox='0 0 200 400'>
        <rect fill={colors.lightBeige} x={100} y={0} width={100} height={400} />
        <path
          ref={curveRef}
          d={curvedPath(curvePoints, 0.2)}
          fill='none'
          stroke={colors.categoryColors.purpose}
          strokeWidth={1}
          strokeLinecap='round'
        />
        <rect fill={colors.lightBeige} x={100} y={60} width={50} height={165} />
        {points.map((point, idx) => (
          <circle
            cx={point[0] + 100}
            cy={point[1] + 60}
            key={idx}
            r={0.5}
            fill={colors.categoryColors.purpose}
          />
        ))}
        {dots.map((dot, idx) => (
          <circle
            {...dot}
            key={idx}
            r={0.5}
            fill={
              idx < visibleDotsCount ? 'white' : colors.categoryColors.purpose
            }
          />
        ))}
      </svg>
      <style jsx>{`
        section {
          width: 200%;
          margin-top: 6rem;
        }

        svg {
          overflow: visible;
        }

        circle {
          transition: fill 0.3s ease-in-out;
        }
      `}</style>
    </section>
  )
}

export default AnimatedCurve
