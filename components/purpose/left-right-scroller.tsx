import { FunctionComponent, useRef } from 'react'
import * as colors from 'lib/colors'

import { useIntersectionObserver } from 'lib/use-intersection-observer'
import ScrollerRow from './scroller-row'
import ScrollerSvg from './scroller-svg'

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
      'die Erkenntnisse prägnant verdichten und in Lösungen und Handlungsperspektiven denken.',
  },
  {
    category: 'daten',
    text: 'die Veränderungen sichtbar machen.',
  },
] as const

export const LeftRightScroller: FunctionComponent = () => {
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([])
  const _activeSectionIndex = useIntersectionObserver(sectionRefs.current, {
    topOffset: (height) => height * 0.5,
  })

  const activeSectionIndex = _activeSectionIndex || 0
  const isRight = activeSectionIndex % 2 !== 0

  return (
    <section className='animated-curve'>
      <div className={`scroller ${isRight ? 'right' : 'left'}`}>
        <h2>Dafür braucht es…</h2>
        {rows.map((row, idx) => {
          return (
            <ScrollerRow
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
        <ScrollerSvg
          isRight={isRight}
          activeSectionIndex={activeSectionIndex}
        />
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
      `}</style>
    </section>
  )
}

export default LeftRightScroller
