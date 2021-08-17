import { FunctionComponent, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import PoissonDiskSampling from 'poisson-disk-sampling'
import * as colors from 'lib/colors'
import { useScrolledPixels } from 'lib/use-scrolled-pixels'

import image1 from 'public/images/purpose-1.jpg'
import image2 from 'public/images/purpose-2.jpg'
import image3 from 'public/images/purpose-3.jpg'

const pds = new PoissonDiskSampling({
  shape: [50, 165],
  minDistance: 2,
  maxDistance: 3,
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
  const wrapperRef = useRef(null)
  const scrolledPixels = useScrolledPixels(wrapperRef)
  const curveRef = useRef<SVGPathElement | null>(null)
  const [dots, setDots] = useState<Dot[]>([])
  const [points, setPoints] = useState<Point[]>([])
  const [visibleDotsCount, setVisibleDotsCount] = useState(0)
  const curvePoints: [number, number][] = [
    [65, 0],
    [30, 48],
    [145, 115],
    [50, 180],
    [100, 220],
  ]

  const isRight = scrolledPixels > 200 && scrolledPixels < 900

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
    const step = 3
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
      visibleDotsCount === 0 ? 2000 : 100
    )
  }, [dots, visibleDotsCount])

  return (
    <section ref={wrapperRef} className='animated-curve'>
      <div className={`scroller ${isRight && 'right'}`}>
        <svg className='background' viewBox='0 0 200 400'>
          <rect
            fill={colors.lightBeige}
            x={100}
            y={0}
            width={100}
            height={400}
          />
        </svg>
        <h2>Dafür braucht es Menschen und Daten</h2>
        <div className='row'>
          <div className='image-wrapper'>
            <Image src={image1} layout='fill' alt='' objectFit='cover' />
          </div>
          <div className='text'>
            <h3>Menschen</h3>
            <p>
              Menschen, die zuhören und die richtigen Fragen stellen, damit ein
              möglichst umfassendes Gesamtbild entsteht.
            </p>
          </div>
        </div>

        <div className='row right'>
          <div></div>
          <div className='text'>
            <h3>Daten</h3>
            <p>
              die mithilfe statistischer Methoden als Signale im Datenrauschen
              sichtbar werden.
            </p>
          </div>
        </div>

        <div className='row'>
          <div className='text'>
            <h3>Menschen</h3>
            <p>die Signale richtig deuten und in Beziehung setzen.</p>
          </div>
          <div className='image-wrapper'>
            <Image src={image3} layout='fill' alt='' objectFit='cover' />
          </div>
        </div>

        <svg className='line' viewBox='0 0 200 400'>
          <path
            ref={curveRef}
            d={curvedPath(curvePoints, 0.2)}
            fill='none'
            stroke={colors.categoryColors.purpose}
            strokeWidth={1}
            strokeLinecap='round'
          />
        </svg>

        <svg className='visualisations' viewBox='0 0 200 400'>
          <rect
            fill={colors.lightBeige}
            x={100}
            y={60}
            width={50}
            height={165}
          />
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
      </div>
      <style jsx>{`
        section {
          margin-top: 6rem;
        }

        .scroller {
          position: relative;
          width: 200%;
          height: 10000px;
          transition: transform 1s ease-out;
        }

        .scroller.right {
          transform: translateX(-50%);
        }

        h2 {
          margin-bottom: 6rem;
        }

        .row {
          position: relative;
          width: 50%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          margin-bottom: 20%;
        }

        .row.right {
          margin-left: 50%;
          z-index: 1;
        }

        .row h3 {
          font-weight: 200;
          color: ${colors.categoryColors.purpose};
          text-transform: uppercase;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          padding-bottom: 100%;
        }

        .text {
          padding: 3rem;
        }

        svg {
          position: absolute;
          width: 100%;
          top: 0;
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
