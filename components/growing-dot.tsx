import { FunctionComponent, useRef } from 'react'
import { useScrolledPixels } from 'lib/useScrolledPixels'
import * as colors from 'lib/colors'

const GrowingDot: FunctionComponent = () => {
  const wrapperRef = useRef(null)
  const scrolledPixels = useScrolledPixels(wrapperRef)

  const circleSize = Math.sqrt(Math.max(1, scrolledPixels) * 20) + 30
  const bigCircleSize = scrolledPixels < 2300 ? 30 : '100vw'

  return (
    <div ref={wrapperRef} className='growing-dot'>
      <svg className='dot'>
        <mask id='mask'>
          <rect x='-100vh' y='0' width='300vw' height='100vh' fill='white' />
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
          <span>Wie richtungsweisende</span>
          <span>Ergebnisse enstehen</span>
        </p>
        <h3 className='start'>Start:</h3>
        <div className='section auftragsklaerung'>
          <h4>
            Auftrags-
            <br />
            klärung
          </h4>
        </div>
        <h3 className='micro'>Micro Ebene:</h3>
        <div className='section analyse'>
          <h4>Analyse von Daten, Strukturen und Dynamiken:</h4>
          <p>
            Im ersten Schritt sammeln und aggregieren wir alle verfügbaren
            Informationen, um diese dann je nach Fragestellung in ein Konzept
            oder in eine Datenanalyse zu überführen.
          </p>
        </div>
        <h3 className='macro'>Macro Ebene:</h3>
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
          height: 3600px;
          margin-top: 300px;
          margin-bottom: 100vh;
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
          display: flex;
          flex: 0 0 auto;
          justify-content: center;
          margin: 0;
          align-items: center;
          text-align: center;
          border-radius: 100%;
          font-weight: normal;
          border: 3px solid ${colors.green};
          z-index: -1;
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
          transform: translateY(-50%);
          transition: opacity 0.3s;
          z-index: 2;
        }

        .section p {
          font-size: 0.9em;
          color: white;
          text-align: center;
          margin: 1em 0 0;
        }

        .start {
          visibility: ${scrolledPixels > 295 ? 'visible' : 'hidden'};
          width: 215px;
          height: 215px;
        }

        .first-text {
          margin: calc(50vh - 20px) 0 0;
          font-size: 1.4em;
          text-align: center;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 300px;
          justify-items: start;
          height: 200px;
        }

        .auftragsklaerung {
          opacity: ${scrolledPixels > 300 && scrolledPixels < 650 ? 1 : 0};
          width: 100%;
        }

        .micro {
          visibility: ${scrolledPixels > 810 ? 'visible' : 'hidden'};
          width: 315px;
          height: 315px;
        }

        .analyse {
          opacity: ${scrolledPixels > 900 && scrolledPixels < 1400 ? 1 : 0};
          margin-top: 100px;
          width: 200px;
        }

        .macro {
          visibility: ${scrolledPixels > 1510 ? 'visible' : 'hidden'};
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
          opacity: ${scrolledPixels > 2600 ? 1 : 0};
          margin-top: 100px;
          width: 500px;
          margin-bottom: calc(50vh - 250px);
        }

        .first-text span:first-child {
          justify-self: end;
        }
      `}</style>
    </div>
  )
}

export default GrowingDot
