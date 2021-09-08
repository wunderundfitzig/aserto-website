import { FunctionComponent, useEffect, useRef, useState } from 'react'
import PoissonDiskSampling from 'poisson-disk-sampling'
import seedrandom from 'seedrandom'
import * as colors from 'lib/colors'

import { curvedPath } from 'lib/curved-path'
import { useIntersectionObserver } from 'lib/use-intersection-observer'
import AnimatedCurveRow from './animated-curve-row'
import { breakpoint, minWidth } from 'lib/breakpoints'

const rows = [
  {
    category: 'menschen',
    image: '/images/purpose-1.jpg',
    text:
      'Menschen, die zuhören und die richtigen Fragen stellen, damit ein möglichst umfassendes Gesamtbild entsteht.',
  },
  {
    category: 'daten',
    onBackground: true,
    text:
      'Daten, die mithilfe statistischer Methoden als Signale im Datenrauschen sichtbar werden.',
  },
  {
    category: 'menschen',
    image: '/images/purpose-3.jpg',
    imagePosition: 'right',
    text: 'Menschen, die Signale richtig deuten und in Beziehung setzen.',
  },
  {
    category: 'daten',
    text:
      'Daten, damit gesicherte Erkenntnisse und sachlich gestützte Prognosen entstehen.',
  },
  {
    category: 'menschen',
    image: '/images/purpose-2.jpg',
    imagePosition: 'right',
    text:
      'Menschen, die Erkenntnisse prägnant verdichten und in Lösungen und Handlungsperspektiven denken.',
  },
  {
    category: 'daten',
    text: 'Daten, die Veränderungen sichtbar machen.',
  },
] as const

const rng = seedrandom('seed')
const pds = new PoissonDiskSampling(
  {
    shape: [200, 150],
    minDistance: 2,
    maxDistance: 3,
    tries: 10,
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
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([])
  const _activeSectionIndex = useIntersectionObserver(sectionRefs.current, {
    topOffset: (height) => height * 0.5,
  })
  const curveRef = useRef<SVGPathElement | null>(null)
  const [backgroundDots, setBackgroundDots] = useState<Point[]>([])
  const [dotsOnCurve, setDotsOnCurve] = useState<Point[]>([])
  const [visibleDotsCount, setVisibleDotsCount] = useState(0)
  const curvePoints: [number, number][] = [
    [65, 2],
    [30, 48],
    [145, 90],
    [50, 160],
    [110, 230],
    [170, 160],
    [300, 160],
    [300, 190],
    [65, 270],
    [130, 320],
    [90, 350],
  ]

  const activeSectionIndex = _activeSectionIndex || 0
  const isRight = activeSectionIndex % 2 !== 0
  const scrolledToDotsAnimation = activeSectionIndex >= 1

  useEffect(() => {
    if (dotsOnCurve.length === 0) return
    pds.reset()
    dotsOnCurve.forEach((dot) => {
      pds.addPoint(unproject(dot, dottedLineVisualisationOffset))
    })
    pds.fill()
    const points = pds.getAllPoints() as Point[]
    const projectedPoints = points.map((point) =>
      project(point, dottedLineVisualisationOffset)
    )

    setBackgroundDots(projectedPoints)
  }, [dotsOnCurve])

  useEffect(() => {
    if (curveRef.current === null) return
    const curveLength = curveRef.current.getTotalLength()
    let length = 1
    const step = 3
    const dots: Point[] = []
    while (length < curveLength) {
      const point = curveRef.current.getPointAtLength(length)
      if (point.x > 101 && point.y < 160) {
        dots.push([point.x, point.y])
      }
      length += step
    }
    setDotsOnCurve(dots)
  }, [])

  useEffect(() => {
    if (!scrolledToDotsAnimation) {
      setVisibleDotsCount(0)
      return
    }
    if (visibleDotsCount >= dotsOnCurve.length) return
    setTimeout(() => setVisibleDotsCount(visibleDotsCount + 1), 100)
  }, [dotsOnCurve, visibleDotsCount, scrolledToDotsAnimation])

  return (
    <section className='animated-curve'>
      <div className={`scroller ${isRight ? 'right' : 'left'}`}>
        <h2>Dafür braucht es…</h2>
        {rows.map((row, idx) => {
          return (
            <AnimatedCurveRow
              key={idx}
              ref={(ref: HTMLDivElement) => {
                sectionRefs.current[idx] = ref
              }}
              isActive={
                (isRight && row.category === 'daten') ||
                (!isRight && row.category === 'menschen')
              }
              {...row}
            />
          )
        })}
        <svg className='line' viewBox='0 0 200 350' preserveAspectRatio='none'>
          <clipPath id='curve-clip-path'>
            <path d='M 0 0 H 100 V 150 H 250 V 400 H 0 Z' />
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

        <svg
          className='visualisations'
          viewBox='0 0 200 350'
          preserveAspectRatio='none'
        >
          {backgroundDots.map((dot, idx) => (
            <line
              x1={dot[0]}
              y1={dot[1]}
              x2={dot[0] + 0.000001}
              y2={dot[1] + 0.000001}
              key={'background-dot' + idx}
              r={0.5}
              stroke={colors.categoryColors.purpose}
              strokeWidth={10}
              strokeLinecap='round'
            />
          ))}
          {dotsOnCurve.map((dot, idx) => (
            <line
              x1={dot[0]}
              y1={dot[1]}
              x2={dot[0] + 0.000001}
              y2={dot[1] + 0.000001}
              key={'background-dot' + idx}
              r={0.5}
              stroke={
                idx < visibleDotsCount ? 'white' : colors.categoryColors.purpose
              }
              strokeWidth={10}
              strokeLinecap='round'
            />
          ))}
        </svg>
      </div>
      <style jsx global>{`
        body,
        html {
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

        .visualisations {
          transition: opacity 1s ease-out;
        }

        .scroller.left .visualisations {
          opacity: 0;
        }

        svg {
          position: absolute;
          width: 100%;
          top: 0;
          overflow: visible;
          height: 100%;
          stroke-width: 6px;
        }

        .line {
        }
        path,
        line {
          vector-effect: non-scaling-stroke;
          stroke-width: 6;
        }

        circle {
          transition: fill 0.3s ease-in-out;
        }

        @media ${minWidth(breakpoint.ml)} {
          line {
            stroke-width: 8;
          }
        }

        @media ${minWidth(breakpoint.xxl)} {
          line {
            stroke-width: 10;
          }
        }
      `}</style>
    </section>
  )
}

export default AnimatedCurve
