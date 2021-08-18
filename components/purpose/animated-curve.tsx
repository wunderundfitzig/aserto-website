import { FunctionComponent, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import PoissonDiskSampling from 'poisson-disk-sampling'
import seedrandom from 'seedrandom'
import * as colors from 'lib/colors'
import { useScrolledPixels } from 'lib/use-scrolled-pixels'

import image1 from 'public/images/purpose-1.jpg'
import image2 from 'public/images/purpose-2.jpg'
import image3 from 'public/images/purpose-3.jpg'
import { curvedPath } from 'lib/curved-path'
import { useWindowSize } from 'lib/use-window-size'

const rng = seedrandom('seed')
const pds = new PoissonDiskSampling(
  {
    shape: [49, 200],
    minDistance: 2,
    maxDistance: 3,
  },
  rng
)

type Point = [number, number]

const dottedLineVisualisationOffset = { x: 101, y: 1 }
function project(point: Point, offset: { x: number; y: number }): Point {
  return [point[0] + offset.x, point[1] + offset.y]
}
function unproject(point: Point, offset: { x: number; y: number }): Point {
  return [point[0] - offset.x, point[1] - offset.y]
}

export const AnimatedCurve: FunctionComponent = () => {
  const wrapperRef = useRef(null)
  const { height } = useWindowSize()
  const scrolledPixels = useScrolledPixels(wrapperRef)
  const curveRef = useRef<SVGPathElement | null>(null)
  const [backgroundDots, setBackgroundDots] = useState<Point[]>([])
  const [dotsOnCurve, setDotsOnCurve] = useState<Point[]>([])
  const [visibleDotsCount, setVisibleDotsCount] = useState(0)
  const curvePoints: [number, number][] = [
    [65, 2],
    [30, 48],
    [145, 115],
    [50, 180],
    [100, 220],
  ]

  const scrolled = scrolledPixels + (height ?? 0)
  const isRight = scrolled > 1000 && scrolled < 1800

  useEffect(() => {
    pds.reset()
    dotsOnCurve.forEach((dot) => {
      pds.addPoint(unproject(dot, dottedLineVisualisationOffset))
    })
    pds.fill()
    const points = pds.getAllPoints() as Point[]
    setBackgroundDots(
      points.map((point) => project(point, dottedLineVisualisationOffset))
    )
  }, [dotsOnCurve])

  useEffect(() => {
    if (curveRef.current === null) return
    const curveLength = curveRef.current.getTotalLength()
    let length = 0
    const step = 3
    const dots: Point[] = []
    while (length < curveLength) {
      const point = curveRef.current.getPointAtLength(length)
      if (point.x > 101 && point.y < 190) {
        dots.push([point.x, point.y])
      }
      length += step
    }
    setDotsOnCurve(dots)
  }, [])

  useEffect(() => {
    if (visibleDotsCount >= dotsOnCurve.length) return
    setTimeout(
      () => setVisibleDotsCount(visibleDotsCount + 1),
      visibleDotsCount === 0 ? 2000 : 100
    )
  }, [dotsOnCurve, visibleDotsCount])

  return (
    <section ref={wrapperRef} className='animated-curve'>
      <div className={`scroller ${isRight ? 'right' : 'left'}`}>
        <h2>Dafür braucht es Menschen und Daten</h2>
        <div className='row left'>
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
              Daten, die mithilfe statistischer Methoden als Signale im
              Datenrauschen sichtbar werden.
            </p>
          </div>
        </div>
        <div className='row left'>
          <div className='text'>
            <h3>Menschen</h3>
            <p>Menschen, die Signale richtig deuten und in Beziehung setzen.</p>
          </div>
          <div className='image-wrapper'>
            <Image src={image3} layout='fill' alt='' objectFit='cover' />
          </div>
        </div>

        <svg className='line' viewBox='0 0 200 400'>
          <clipPath id='curve-clip-path'>
            <path d='M 0 0 H 100 V 150 H 200 V 400 H 0 Z' />
          </clipPath>
          <path
            clipPath={isRight ? 'url(#curve-clip-path)' : ''}
            ref={curveRef}
            d={curvedPath(curvePoints, 0.2)}
            fill='none'
            stroke={colors.categoryColors.purpose}
            strokeWidth={1}
            strokeLinecap='round'
          />
        </svg>

        <svg className='visualisations' viewBox='0 0 200 400'>
          {backgroundDots.map((dot, idx) => (
            <circle
              cx={dot[0]}
              cy={dot[1]}
              key={'background-dot' + idx}
              r={0.5}
              fill={colors.categoryColors.purpose}
            />
          ))}
          {dotsOnCurve.map((dot, idx) => (
            <circle
              cx={dot[0]}
              cy={dot[1]}
              key={idx}
              r={0.5}
              fill={
                idx < visibleDotsCount ? 'white' : colors.categoryColors.purpose
              }
            />
          ))}
        </svg>
      </div>
      <style jsx global>{`
        body {
          overflow-x: hidden;
        }
      `}</style>
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

        .scroller::before {
          content: ' ';
          transition: background-color 1s ease-out;
        }

        .scroller.right {
          transform: translateX(-50%);
        }

        .scroller.right::before {
          position: absolute;
          width: 300vw;
          height: 100%;
          left: -100vw;
          background-color: ${colors.lightBeige};
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
          transition: opacity 0.3s;
        }

        .row.right {
          margin-left: 50%;
          z-index: 1;
        }

        .scroller.right .row.left {
           {
            /* transform: translateX(-200%); */
          }
          opacity: 0;
        }

        .scroller.left .row.right {
           {
            /* transform: translateX(200%); */
          }
          opacity: 0;
        }

        .visualisations {
          transition: opacity 1s ease-out;
        }

        .scroller.left .visualisations {
          opacity: 0;
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
