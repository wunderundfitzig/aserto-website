import { categoryColors } from 'lib/colors'
import { FunctionComponent, useEffect, useRef, useState } from 'react'

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

export const AnimatedCurve: FunctionComponent = () => {
  const curveRef = useRef<SVGPathElement | null>(null)
  const [dots, setDots] = useState<[number, number][]>([])
  const curvePoints: [number, number][] = [
    [50, 0],
    [20, 50],
    [120, 150],
    [25, 220],
  ]

  useEffect(() => {
    if (curveRef.current === null) return
    const curveLength = curveRef.current.getTotalLength()
    let length = 0
    const step = 2
    const dots: [number, number][] = []
    while (length < curveLength) {
      const point = curveRef.current.getPointAtLength(length)
      dots.push([point.x, point.y])
      length += step
    }
    setDots(dots)
  }, [])

  return (
    <section className='animated-curve'>
      <svg viewBox='0 0 200 400'>
        <path
          ref={curveRef}
          d={curvedPath(curvePoints, 0.2)}
          fill='none'
          stroke={categoryColors.purpose}
          strokeWidth={1}
          strokeLinecap='round'
        />
        {dots.map((dot, idx) => (
          <circle key={idx} r={0.5} cx={dot[0]} cy={dot[1]} />
        ))}
      </svg>
      <style jsx>{`
        section {
          width: 200%;
        }

        svg {
          overflow: visible;
        }
      `}</style>
    </section>
  )
}

export default AnimatedCurve
