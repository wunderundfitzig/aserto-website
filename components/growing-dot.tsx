import { FunctionComponent, useRef } from 'react'
import { useScrollPercentage } from 'lib/useScrollPercentage'
import * as colors from 'lib/colors'

const GrowingDot: FunctionComponent = () => {
  const wrapperRef = useRef(null)
  const percentage = useScrollPercentage(wrapperRef)

  const circleSize = `${percentage * 200}vw`

  return (
    <div ref={wrapperRef} className='growing-dot'>
      <div
        className='dot'
        style={{ width: circleSize, height: circleSize }}
      ></div>
      <style jsx>{`
        .growing-dot {
          height: 500vh;
          margin-top: 50vh;
          margin-bottom: 100vh;
        }

        .dot {
          position: sticky;
          top: 50%;
          transform: translateY(-50%);
          background-color: ${colors.green};
          border-radius: 100%;
        }
      `}</style>
    </div>
  )
}

export default GrowingDot
