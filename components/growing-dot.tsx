import { FunctionComponent, useRef } from 'react'
import { useScrollPercentage } from 'lib/useScrollPercentage'
import * as colors from 'lib/colors'

const GrowingDot: FunctionComponent = () => {
  const wrapperRef = useRef(null)
  const percentage = useScrollPercentage(wrapperRef)

  const circleSize = `${percentage * 1000}px`

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
          cy='15px'
          fill={colors.green}
          r={circleSize}
          mask='url(#mask)'
        />
      </svg>
      <p className='first-text'>
        <span>Wie richtungsweisende</span>
        <span>Ergebnisse enstehen</span>
      </p>

      <style jsx>{`
        .growing-dot {
          height: 5000px;
          margin-top: 50vh;
          margin-bottom: 100vh;
        }

        .first-text {
          position: relative;
          top: -100vh;
          margin: 0;
          font-size: 1.4em;
          text-transform: uppercase;
          text-align: center;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 200px;
          justify-items: start;
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
        }
      `}</style>
    </div>
  )
}

export default GrowingDot
