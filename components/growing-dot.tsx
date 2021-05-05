import { FunctionComponent, useRef } from 'react'
import { useScrolledPixels } from 'lib/useScrolledPixels'
import * as colors from 'lib/colors'

const GrowingDot: FunctionComponent = () => {
  const wrapperRef = useRef(null)
  const scrolledPixels = useScrolledPixels(wrapperRef)

  const circleSize = Math.max(1, scrolledPixels) / 20

  return (
    <div ref={wrapperRef} className='growing-dot'>
      <svg className='dot'>
        <mask id='mask'>
          <rect
            x='-100vh'
            y='-50vh'
            width='300vw'
            height='100vh'
            fill='white'
          />
        </mask>
        <circle
          cx='50%'
          cy='0'
          fill={colors.green}
          r={circleSize + 100}
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
            oder in eine Datenanalyse zu überführen
          </p>
        </div>
      </div>

      <style jsx>{`
        .growing-dot {
          height: 10000px;
          margin-top: 80vh;
          margin-bottom: 100vh;
        }

        .inner {
          position: relative;
          top: -100vh;
          height: 100%;
          display: flex;
          flex-flow: column;
          align-items: center;
        }

        h4 {
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
          transform: translateY(-50%);
          transition: opacity 0.3s;
          z-index: 2;
        }

        .section p {
          font-size: 0.9em;
          color: white;
          text-align: center;
        }

        .first-text {
          margin: -20px 0 0;
          font-size: 1.4em;
          text-align: center;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 300px;
          justify-items: start;
          height: 200px;
        }

        h3 {
          display: flex;
          justify-content: center;
          margin: 0;
          align-items: center;
          text-align: center;
          border-radius: 100%;
          font-weight: normal;
          border: 3px solid ${colors.green};
          z-index: -1;
        }

        .start {
          visibility: ${scrolledPixels > 300 ? 'visible' : 'hidden'};
          width: 230px;
          height: 230px;
        }

        .auftragsklaerung {
          opacity: ${scrolledPixels > 300 && scrolledPixels < 650 ? 1 : 0};
          width: 100%;
        }

        .micro {
          visibility: ${scrolledPixels > 900 ? 'visible' : 'hidden'};
          width: 290px;
          height: 290px;
          margin-top: 300px;
        }

        .analyse {
          opacity: ${scrolledPixels > 1000 && scrolledPixels < 2000 ? 1 : 0};
          margin-top: 150px;
          width: 200px;
        }

        .first-text span:first-child {
          justify-self: end;
        }

        .dot {
          position: sticky;
          top: 50%;
          width: 100%;
          height: 100vh;
          overflow: visible;
          z-index: 1;
        }
      `}</style>
    </div>
  )
}

export default GrowingDot
