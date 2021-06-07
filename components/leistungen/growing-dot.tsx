import { FunctionComponent, useRef } from 'react'
import { useScrolledPixels } from 'lib/useScrolledPixels'
import * as colors from 'lib/colors'
import { breakpoint, minWidth } from 'lib/breakpoints'
import { formatAlignment } from 'components/curves'
import useWindowSize from 'lib/useWindowSize'

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

const GrowingDot: FunctionComponent = () => {
  const wrapperRef = useRef(null)
  const scrolledPixels = useScrolledPixels(wrapperRef)
  const { width, height } = useWindowSize()
  const fullScreenSize = (width || 0) > (height || 0) ? '100vw' : '100vh'

  const circleSize = Math.sqrt(Math.max(1, scrolledPixels) * 20) + 30
  const bigCircleSize = scrolledPixels < 2300 ? 30 : fullScreenSize

  return (
    <div ref={wrapperRef} className='growing-dot'>
      <svg className='dot'>
        <mask id='mask'>
          <rect x='-100vw' y='0' width='300vw' height='100vh' fill='white' />
        </mask>
        <circle
          cx='50%'
          cy='50%'
          fill={colors.green}
          r={circleSize}
          mask='url(#mask)'
        />
        <circle
          className='big-circle'
          cx='50%'
          cy='50%'
          fill={colors.green}
          r={bigCircleSize}
          mask='url(#mask)'
        />
      </svg>
      <div className='inner'>
        <p className='first-text'>
          <span>
            Wie richtungs
            <wbr />
            weisende
          </span>
          <span>Ergebnisse enstehen</span>
        </p>
        <h3 className='start'>
          Start:
          <Circle />
        </h3>
        <div className='section auftragsklaerung'>
          <h4>
            Auftrags-
            <br />
            klärung
          </h4>
        </div>
        <h3 className='micro'>
          Micro Ebene: <Circle />
        </h3>
        <div className='section analyse'>
          <h4>Analyse von Daten, Strukturen und Dynamiken:</h4>
          <p>
            Im ersten Schritt sammeln und aggregieren wir alle verfügbaren
            Informationen, um diese dann je nach Fragestellung in ein Konzept
            oder in eine Datenanalyse zu überführen.
          </p>
        </div>
        <h3 className='macro'>
          Macro Ebene: <Circle />
        </h3>
        <div className='section verdichtung'>
          <h4>Verdichtung & maßvolle Akzentuierung der relevanten Aspekte:</h4>
          <p>
            In einer Vielzahl von Informationen und Daten finden wir die Signale
            im Rauschen. Und erläutern, was diese zu bedeuten haben.
          </p>
        </div>
        <h3 className='meta'>Meta Ebene:</h3>
        <div className='section ergebnisse'>
          <h4>
            Holistische Einbettung der Ergebnisse in unternehmensrelevante
            Kontexte:
          </h4>
          <p>
            Reine Datenanalysen finden bei uns nicht statt, wir setzen unsere
            Analysen und Konzepte immer in den unternehmensrelevanten Kontext.
            Denn nur wenn wir die Hintergründe kennen, schaffen wir Relevanz.
          </p>
        </div>
      </div>

      <style jsx>{`
        .growing-dot {
          position: relative;
          height: 3700px;
          margin-top: -25vh;
          margin-bottom: 10em;
        }

        svg {
          position: sticky;
          top: 0;
          width: 100%;
          height: 100vh;
          overflow: visible;
          z-index: 1;
        }

        svg .big-circle {
          transition: r 2s;
        }

        .inner {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-flow: column;
          align-items: center;
        }

        h3 {
          position: relative;
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

        h3 svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        h4 {
          font-weight: 200;
          text-align: center;
          color: ${colors.lightGreen};
          text-transform: uppercase;
          margin: 0;
        }

        .section {
          position: sticky;
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
          top: 50%;
          height: 250px;
          width: 100%;
          transform: translateY(-50%);
          transition: opacity 0.3s;
          z-index: 2;
          padding: 0 1em;
        }

        .section p {
          font-size: 0.9em;
          color: white;
          text-align: center;
          margin: 1em 0 0;
        }

        .start {
          visibility: ${scrolledPixels > 285 ? 'visible' : 'hidden'};
          height: 212px;
        }

        .first-text {
          width: 100%;
          margin: calc(50vh - 20px) 0 0;
          font-size: 1em;
          word-break: break-word;
          text-align: right;
          display: grid;
          grid-template-columns: 1fr 1fr;
          justify-items: end;
          font-weight: 200;
          height: 200px;
          transform: translateY(-0.8em);
        }

        .first-text span {
          max-width: 8em;
        }

        .first-text span:first-child {
          justify-self: start;
          text-align: left;
        }

        .auftragsklaerung {
          opacity: ${scrolledPixels > 300 && scrolledPixels < 650 ? 1 : 0};
          width: 100%;
        }

        .micro {
          visibility: ${scrolledPixels > 805 ? 'visible' : 'hidden'};
          height: 318px;
        }

        .analyse {
          opacity: ${scrolledPixels > 900 && scrolledPixels < 1400 ? 1 : 0};
          margin-top: 100px;
        }

        .macro {
          visibility: ${scrolledPixels > 1515 ? 'visible' : 'hidden'};
          width: 410px;
          height: 410px;
        }

        .verdichtung {
          opacity: ${scrolledPixels > 1610 && scrolledPixels < 2300 ? 1 : 0};
          margin-top: 50px;
          width: 300px;
        }

        .meta {
          border: none;
          z-index: 1;
          visibility: ${scrolledPixels > 2400 ? 'visible' : 'hidden'};
          margin-top: 300px;
        }

        .ergebnisse {
          opacity: ${scrolledPixels > 2500 ? 1 : 0};
          margin-top: 100px;
          max-width: 500px;
          margin-bottom: calc(50vh - 250px);
        }

        @media (${minWidth(breakpoint.xs)}) {
          .first-text {
            font-size: 1.2em;
          }

          .first-text span,
          .first-text span:first-child {
            text-align: center;
          }
        }

        @media (${minWidth(breakpoint.s)}) {
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

        @media (${minWidth(breakpoint.l)}) {
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
    </div>
  )
}

export default GrowingDot
