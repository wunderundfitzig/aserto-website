import { FunctionComponent, useRef } from 'react'
import * as colors from 'lib/colors'

import { curvedPath } from 'lib/curved-path'
import { useIntersectionObserver } from 'lib/use-intersection-observer'
import AnimatedCurveRow from './animated-curve-row'
import { breakpoint, minWidth } from 'lib/breakpoints'
import DotsVisualisation from './dots-visualisation'
import { useWindowSize } from 'lib/use-window-size'

const rows = [
  {
    category: 'menschen',
    image: '/images/purpose/purpose-1.jpg',
    imagePosition: 'right',
    text:
      'die zuhören und die richtigen Fragen stellen, damit ein möglichst umfassendes Gesamtbild entsteht.',
  },
  {
    category: 'daten',
    onBackground: true,
    text:
      'die mithilfe statistischer Methoden als Signale im Datenrauschen sichtbar werden.',
  },
  {
    category: 'menschen',
    image: '/images/purpose/purpose-3.jpg',
    imagePosition: 'right',
    text: 'die Signale richtig deuten und in Beziehung setzen.',
  },
  {
    category: 'daten',
    text:
      'damit gesicherte Erkenntnisse und sachlich gestützte Prognosen entstehen.',
  },
  {
    category: 'menschen',
    image: '/images/purpose/purpose-2.jpg',
    imagePosition: 'right',
    text:
      'die Erkenntnisse prägnant verdichten und die in Lösungen und Handlungsperspektiven denken.',
  },
  {
    category: 'daten',
    text: 'die Veränderungen sichtbar machen.',
  },
] as const

const desctopCurvePoints: [number, number][] = [
  [90, 2],
  [55, 45],
  [145, 90],
  [40, 180],
  [110, 230],
  [170, 160],
  [300, 160],
  [300, 190],
  [60, 258],
  [120, 320],
  [90, 350],
]

const mobileCurvePoints: [number, number][] = [
  [90, 2],
  [20, 48],
  [185, 90],
  [40, 160],
  [110, 210],
  [220, 160],
  [300, 160],
  [300, 190],
  [65, 270],
  [130, 318],
  [80, 370],
]

export const AnimatedCurve: FunctionComponent = () => {
  const { width } = useWindowSize()
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([])
  const _activeSectionIndex = useIntersectionObserver(sectionRefs.current, {
    topOffset: (height) => height * 0.5,
  })
  const curveRef = useRef<SVGPathElement | null>(null)

  const activeSectionIndex = _activeSectionIndex || 0
  const isRight = activeSectionIndex % 2 !== 0
  const useMobileCurve = (width ?? 0) < breakpoint.sm
  const curvePoints = useMobileCurve ? mobileCurvePoints : desctopCurvePoints

  return (
    <section className='animated-curve'>
      <div className={`scroller ${isRight ? 'right' : 'left'}`}>
        <h2>Dafür braucht es&nbsp;…</h2>
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
        <svg viewBox='0 0 200 365' preserveAspectRatio='none'>
          <clipPath id='curve-clip-path'>
            <path d='M 0 0 H 100 V 150 H 250 V 400 H 0 Z' />
          </clipPath>
          <path
            clipPath={isRight ? 'url(#curve-clip-path)' : ''}
            ref={curveRef}
            d={curvedPath(curvePoints, 0.2)}
            fill='none'
            stroke={colors.categoryColors.purpose}
            strokeLinecap='round'
          />

          <g className='visualisations'>
            <DotsVisualisation
              isScrolledIntoView={activeSectionIndex >= 1}
              curvePoints={curvePoints}
              curveElememt={curveRef.current}
            />
          </g>
        </svg>
      </div>
      <style jsx global>{`
        html {
          overflow-x: hidden;
          overflow-x: clip;
        }
      `}</style>
      <style jsx>{`
        section {
          margin-top: 3rem;
        }

        .scroller {
          position: relative;
          width: 200%;
          transition: transform 1s ease-out;
          padding-bottom: 12rem;
          z-index: 200;
        }

        .scroller::after {
          content: ' ';
          position: absolute;
          width: 300vw;
          height: 100%;
          top: 0;
          left: -100vw;
          background-color: ${colors.lightBeige};
          opacity: 0;
          transition: opacity 1s ease-out;
          will-change: opacity;
          z-index: -1;
        }

        .scroller::before {
          content: ' ';
          position: absolute;
          width: 300vw;
          height: 100%;
          top: 0;
          left: -100vw;
          background-color: white;
          z-index: -2;
        }

        .scroller.right {
          transform: translateX(-50%);
        }

        .scroller.right::after {
          opacity: 1;
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
          pointer-events: none;
        }

        svg :global(path),
        svg :global(line) {
          vector-effect: non-scaling-stroke;
          stroke-width: 6px;
        }

        circle {
          transition: fill 0.3s ease-in-out;
        }

        @media ${minWidth(breakpoint.ml)} {
          svg :global(path),
          svg :global(line) {
            stroke-width: 8px;
          }
        }

        @media ${minWidth(breakpoint.xxl)} {
          svg :global(path),
          svg :global(line) {
            stroke-width: 10px;
          }
        }
      `}</style>
    </section>
  )
}

export default AnimatedCurve
