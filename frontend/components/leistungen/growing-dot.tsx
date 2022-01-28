import { FunctionComponent, useRef } from 'react'
import { useScrolledPixels } from 'lib/use-scrolled-pixels'
import * as colors from 'lib/colors'
import { breakpoint, minWidth } from 'lib/breakpoints'
import { formatAlignment } from 'components/curves'
import { useWindowSize } from 'lib/use-window-size'

export const Circle: FunctionComponent = () => {
  return (
    <svg
      className='circle'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 102 102'
      preserveAspectRatio={formatAlignment({
        alignX: 'Mid',
        alignY: 'Mid',
        fit: 'slice',
      })}
    >
      <circle
        cx='51'
        cy='51'
        r='50'
        fill='none'
        stroke={colors.green}
        strokeWidth={6}
      />
      <style jsx>
        {`
          .circle {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: visible;
          }

          circle {
            vector-effect: non-scaling-stroke;
          }
        `}
      </style>
    </svg>
  )
}

const LAST_SLIDE_OFFSET = 240

const GrowingDot: FunctionComponent = () => {
  const wrapperRef = useRef(null)
  const scrolledPixels = useScrolledPixels(wrapperRef)
  const { width, height } = useWindowSize()
  const scrolledPercent = (scrolledPixels / (height ?? 1)) * 100
  const fullScreenSize = (width ?? 0) > (height ?? 0) ? width ?? 0 : height ?? 0
  const isPastLastSlide = scrolledPercent > LAST_SLIDE_OFFSET

  const circleSize = isPastLastSlide
    ? Math.sqrt(LAST_SLIDE_OFFSET * 300)
    : Math.sqrt(Math.max(1, scrolledPercent) * 300)
  const bigCircleSize = isPastLastSlide ? fullScreenSize : 0

  const analyseTopOffset = 40
  const verdictungTopOffset = 140
  const ergbenisseTopOffset = 240

  return (
    <section ref={wrapperRef} className='growing-dot'>
      <svg className='dot'>
        <mask id='growing-dot-mask'>
          <rect x='-100%' y='0' width='300%' height='100%' fill='white' />
        </mask>
        <g mask='url(#growing-dot-mask)'>
          <circle
            className='growing-circle'
            style={{
              transform: `scale(${circleSize + 30})`,
              transformOrigin: '50% 50%',
            }}
            cx='50%'
            cy='50%'
            fill={colors.green}
            r={1}
          />
          <circle
            className='big-circle'
            cx='50%'
            cy='50%'
            style={{
              transform: `scale(${bigCircleSize + 30})`,
              transformOrigin: '50% 50%',
            }}
            fill={colors.green}
            r={1}
          />
        </g>
      </svg>
      <div className='inner'>
        <h2 className='first-text'>
          <span>
            Wie richtungs
            <wbr />
            weisende
          </span>
          <span>Ergebnisse entstehen</span>
        </h2>
        <div
          className='outline-cirlce micro'
          style={{
            visibility:
              scrolledPercent > analyseTopOffset ? 'visible' : 'hidden',
          }}
        >
          <Circle />
        </div>
        <div
          className='section analyse'
          style={{
            opacity:
              scrolledPercent > analyseTopOffset &&
              scrolledPercent < analyseTopOffset + 50
                ? 1
                : 0,
          }}
        >
          <h3>Analyse:</h3>
          <p>
            Im ersten Schritt sammeln und aggregieren wir alle verfügbaren
            Informationen, um diese dann je nach Fragestellung in ein Konzept
            oder in eine Datenanalyse zu überführen.
          </p>
        </div>
        <div
          className='outline-cirlce macro'
          style={{
            visibility:
              scrolledPercent > verdictungTopOffset ? 'visible' : 'hidden',
          }}
        >
          <Circle />
        </div>
        <div
          className='section verdichtung'
          style={{
            opacity:
              scrolledPercent > verdictungTopOffset &&
              scrolledPercent < verdictungTopOffset + 50
                ? 1
                : 0,
          }}
        >
          <h3>Verdichtung und maßvolle Akzentuierung:</h3>
          <p>
            In einer Vielzahl von Informationen und Daten finden wir die Signale
            im Rauschen. Und wir erläutern, was diese zu bedeuten haben.
          </p>
        </div>
        <div
          className='section ergebnisse'
          style={{
            opacity: scrolledPercent > ergbenisseTopOffset ? 1 : 0,
          }}
        >
          <h3>Ganzheitliche Betrachtung:</h3>
          <p>
            Reine Datenanalysen finden bei uns nicht statt. Wir setzen unsere
            Analysen und Konzepte immer in den unternehmensrelevanten Kontext.
            Denn nur, wenn wir die Hintergründe kennen, schaffen wir Relevanz.
          </p>
        </div>
      </div>

      <style jsx>{`
        .growing-dot {
          position: relative;
          height: 350vh;
           {
            /* margin-top: -10rem; */
          }
          margin-bottom: 0;
          z-index: 110;
        }

        svg {
          position: sticky;
          top: 0;
          width: 100%;
          height: 100vh;
          overflow: visible;
          z-index: 1;
          pointer-events: none;
        }

        .growing-circle {
          will-change: transform;
        }

        .big-circle {
          transition: transform 2s;
        }

        .inner {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          display: grid;
          grid-auto-flow: column;
          grid-template-columns: 1fr;
          grid-template-rows: 50vh 100vh 100vh 100vh;
          grid-template-areas:
            'space'
            'analyse'
            'verdichtung'
            'ergebnisse';
          justify-content: center;
          justify-items: center;
          align-items: end;
        }

        .outline-cirlce {
          position: absolute;
          top: 50%;
          transform: translateY(calc(-50% - 10vh));
          display: flex;
          flex: 0 0 auto;
          max-width: 100%;
          justify-content: center;
          margin: 0;
          align-items: center;
          text-align: center;
          font-weight: normal;
          z-index: -1;
        }

        .outline-cirlce svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        h3 {
          font-weight: 200;
          text-align: center;
          color: ${colors.lightGreen};
          text-transform: uppercase;
          margin: 0;
        }

        .section {
          position: sticky;
          top: 0;
          height: 100%;
          width: 100%;
          max-width: 100%;
          display: grid;
          align-content: center;
          transition: opacity 0.3s;
          z-index: 2;
          padding: 0 1em;
        }

        .section p {
          font-size: 0.9em;
          line-height: 1.5em;
          color: white;
          text-align: center;
          margin: 1em 0 0;
        }

        .first-text {
          position: absolute;
          width: 100%;
          top: calc(50vh - 20px);
          font-size: 1em;
          overflow-wrap: break-word;
          text-align: right;
          display: grid;
          grid-template-columns: 1fr 1fr;
          justify-items: end;
          font-weight: 200;
        }

        .first-text span {
          max-width: 8em;
        }

        .first-text span:first-child {
          justify-self: start;
          text-align: left;
        }

        .micro {
          grid-area: analyse;
          width: 279px;
          height: 279px;
        }

        .macro {
          grid-area: verdichtung;
          width: 470px;
          height: 470px;
        }

        .verdichtung {
          width: 300px;
        }

        .analyse {
          grid-area: analyse;
        }

        .verdichtung {
          grid-area: verdichtung;
        }

        .ergebnisse {
          position: static;
          grid-area: ergebnisse;
          max-width: 500px;
        }

        @media ${minWidth(breakpoint.xs)} {
          .first-text {
            font-size: 1.2em;
          }

          .first-text span,
          .first-text span:first-child {
            text-align: center;
          }
        }

        @media ${minWidth(breakpoint.s)} {
          .section {
            padding: 0;
          }
          .first-text {
            font-size: 1.4em;
          }

          .analyse {
            max-width: 200px;
          }

          .ergebnisse {
            max-width: 500px;
          }
        }

        @media ${minWidth(breakpoint.ml)} {
          .first-text {
            transform: none;
            grid-gap: 300px;
            justify-items: start;
            height: 200px;
          }

          .first-text span {
            max-width: 100%;
          }

          .first-text span:first-child {
            text-align: center;
            justify-self: end;
          }
        }
      `}</style>
    </section>
  )
}

export default GrowingDot
