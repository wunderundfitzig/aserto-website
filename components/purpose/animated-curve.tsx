import { FunctionComponent, useRef } from 'react'
import * as colors from 'lib/colors'

import { curvedPath } from 'lib/curved-path'
import { useIntersectionObserver } from 'lib/use-intersection-observer'
import AnimatedCurveRow from './animated-curve-row'
import { breakpoint, minWidth } from 'lib/breakpoints'
import DotsVisualisation from './dots-visualisation'

const rows = [
  {
    category: 'menschen',
    image: '/images/purpose/purpose-1.jpg',
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
    image: '/images/purpose/purpose-3.jpg',
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
    image: '/images/purpose/purpose-2.jpg',
    imagePosition: 'right',
    text:
      'Menschen, die Erkenntnisse prägnant verdichten und in Lösungen und Handlungsperspektiven denken.',
  },
  {
    category: 'daten',
    text: 'Daten, die Veränderungen sichtbar machen.',
  },
] as const

export const AnimatedCurve: FunctionComponent = () => {
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([])
  const _activeSectionIndex = useIntersectionObserver(sectionRefs.current, {
    topOffset: (height) => height * 0.5,
  })
  const curveRef = useRef<SVGPathElement | null>(null)
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
        <svg viewBox='0 0 200 350' preserveAspectRatio='none'>
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
              curveElememt={curveRef.current}
            />
          </g>
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
          margin-top: 3rem;
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
