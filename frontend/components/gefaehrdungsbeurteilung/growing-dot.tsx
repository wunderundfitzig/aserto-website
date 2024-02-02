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
        stroke={colors.lightBlue}
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

const VISIBLE_BEFORE = 20
const VISIBILE_AFTER = 60

const ANALYSE_OFFSET_BEFORE = 50 - VISIBLE_BEFORE
const ANALYSE_OFFSET_AFTER = 50 + VISIBILE_AFTER

const VERDICHTUNG_OFFSET_BEFORE = 150 - VISIBLE_BEFORE
const VERDICHTUNG_OFFSET_AFTER = 150 + VISIBILE_AFTER

const ERGEBNISE_OFFSET_BFORE = 250 - VISIBLE_BEFORE

const CIRCLE_SCALE_FACTOR = 300

const circleSizes = Array.from({ length: ERGEBNISE_OFFSET_BFORE }, (_, i) =>
  Math.sqrt(i * CIRCLE_SCALE_FACTOR),
)

const GrowingDot: FunctionComponent = () => {
  const wrapperRef = useRef(null)
  const scrolledPixels = useScrolledPixels(wrapperRef)
  const { width: _width, height: _height } = useWindowSize()
  const width = _width ?? 1
  const height = _height ?? 1
  const scrolledVh = Math.max(1, Math.trunc((scrolledPixels / height) * 100))
  const fullScreenSize = width > height ? width : height
  const isPastLastSlide = scrolledVh > ERGEBNISE_OFFSET_BFORE

  const circleSize = isPastLastSlide
    ? circleSizes[ERGEBNISE_OFFSET_BFORE]
    : circleSizes[scrolledVh]
  const bigCircleSize = isPastLastSlide ? fullScreenSize : 0

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
            fill={colors.beige}
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
            fill={colors.beige}
            r={1}
          />
        </g>
      </svg>
      <div className='inner'>
        <h2 className='first-text'>
          <span>Wie Sie die Gesundheit</span>
          <span>
            Ihrer&nbsp;Mitarbeit
            <wbr />
            enden stärken
          </span>
        </h2>
        <div
          className='outline-cirlce micro'
          style={{
            visibility:
              scrolledVh > ANALYSE_OFFSET_BEFORE ? 'visible' : 'hidden',
          }}
        >
          <Circle />
        </div>
        <div
          className='section analyse'
          style={{
            opacity:
              scrolledVh > ANALYSE_OFFSET_BEFORE &&
              scrolledVh < ANALYSE_OFFSET_AFTER
                ? 1
                : 0,
          }}
        >
          <h3>Erkennen:</h3>
          <p>
            Mithilfe einer an Ihre Bedarfe angepassten Befragung nach
            wissenschaftlichen Kriterien ermitteln wir den Ist-Stand der
            psychischen Gesundheit in der Belegschaft. Dabei beleuchten wir
            sowohl Anforderungen als auch Ressourcen, die die Gesundheit
            beeinflussen können.
          </p>
        </div>
        <div
          className='outline-cirlce macro'
          style={{
            visibility:
              scrolledVh > VERDICHTUNG_OFFSET_BEFORE ? 'visible' : 'hidden',
          }}
        >
          <Circle />
        </div>
        <div
          className='section verdichtung'
          style={{
            opacity:
              scrolledVh > VERDICHTUNG_OFFSET_BEFORE &&
              scrolledVh < VERDICHTUNG_OFFSET_AFTER
                ? 1
                : 0,
          }}
        >
          <h3>Verstehen:</h3>
          <p>
            Gemeinsam mit Ihnen gehen wir den identifizierten Stärken und
            Herausforderungen auf den Grund und leiten konkrete Handlungsfelder
            ab. Dabei nehmen wir sowohl das Unternehmen als auch die
            Führungskräfte und Mitarbeitenden in die Verantwortung.
          </p>
        </div>
        <div
          className='section ergebnisse'
          style={{
            opacity: scrolledVh > ERGEBNISE_OFFSET_BFORE ? 1 : 0,
          }}
        >
          <h3>Handeln:</h3>
          <p>
            Im Abgleich mit den bestehenden Angeboten in Ihrem Unternehmen und
            den Handlungsfeldern entsteht eine konkrete Roadmap. Das kann von
            individuellen Coachingangeboten bis zur Einführung von
            unternehmensweiten Deep-Work-Phasen oder einer
            no-mails-after-6pm-Policy gehen.
          </p>
        </div>
      </div>

      <style jsx>{`
        .growing-dot {
          position: relative;
          height: 380vh;
          margin-top: calc(-50vh + 10rem);
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
          transform: translateY(calc(-50% - 20vh));
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
          color: ${colors.lightBeige};
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
          height: auto;
          top: calc(50vh - 60px);
          transform: translateY(-50%);
          font-size: 1em;
          overflow-wrap: break-word;
          text-align: right;
          display: grid;
          grid-template-columns: 1fr 1fr;
          justify-items: end;
          font-weight: 200;
          margin: 0;
        }

        .first-text span {
          max-width: 7em;
        }

        .first-text span:first-child {
          justify-self: start;
          text-align: left;
        }

        .micro {
          grid-area: analyse;
          width: 249px;
          height: 249px;
        }

        .macro {
          grid-area: verdichtung;
          width: 455px;
          height: 455px;
        }

        .verdichtung {
          width: 300px;
        }

        .analyse {
          grid-area: analyse;
          max-width: 250px;
        }

        .verdichtung {
          grid-area: verdichtung;
        }

        .ergebnisse {
          grid-area: ergebnisse;
          max-width: 500px;
        }

        @media ${minWidth(breakpoint.xs)} {
          .first-text {
            font-size: 1.2em;
            top: 50vh;
          }
        }

        @media ${minWidth(breakpoint.s)} {
          .section {
            padding: 0;
          }
          .first-text {
            font-size: 1.4em;
          }

          .ergebnisse {
            max-width: 500px;
          }
        }

        @media ${minWidth(breakpoint.ml)} {
          .first-text {
            grid-gap: 300px;
            justify-items: start;
          }

          .first-text span {
            max-width: 9em;
          }
        }

        @media ${minWidth(breakpoint.xl)} {
          .first-text {
            grid-gap: 210px;
            justify-items: center;
          }
          .first-text span {
            max-width: 100%;
          }
          .first-text span:first-child {
            justify-self: center;
          }
        }
        @media ${minWidth(breakpoint.xxl)} {
          .growing-dot {
            margin-top: calc(-50vh + 15rem);
          }
        }
      `}</style>
    </section>
  )
}

export default GrowingDot
