import { FunctionComponent, useEffect, useState } from 'react'
import * as colors from 'lib/colors'
import { curvedPath } from 'lib/curved-path'

const confidenceIntervall: [number, number][] = [
  [109, 227],
  [110, 226],
  [130, 153],
  [200, 153],
  [400, 153],
  [400, 170],
  [180, 170],
  [113, 227],
  [109, 227],
]

type Props = {
  isScrolledIntoView: boolean
  isRight: boolean
  curvePoints: [number, number][]
}
const ConfidenceIntervall: FunctionComponent<Props> = (props) => {
  const maxOffset = 4000
  const [offset, setOffset] = useState(0)
  const curveSection: [number, number][] = props.curvePoints.slice(3, 7)

  useEffect(() => {
    if (!props.isScrolledIntoView) {
      setOffset(0)
      return
    }
    if (offset >= maxOffset) return
    requestAnimationFrame(() => {
      setOffset(offset + 15)
    })
  }, [props.isScrolledIntoView, offset, maxOffset])

  return (
    <g className={`${props.isRight ? 'right' : 'left'}`}>
      <clipPath id='confidence-intervall-clip-path'>
        <path d='M 70 0 H 400 V 400 H 70 Z' />
      </clipPath>
      <path
        className='confidence-intervall'
        d={curvedPath(confidenceIntervall, 0.2)}
        stroke={colors.categoryColors.purpose}
        fill={colors.categoryColors.purpose}
      />
      <path
        clipPath='url(#confidence-intervall-clip-path)'
        d={curvedPath(curveSection, 0.2)}
        stroke={colors.categoryColors.purpose}
        strokeDasharray={4400}
        strokeDashoffset={3500 - offset}
        fill='none'
      />
      <style jsx>{`
        .confidence-intervall {
          opacity: 0;
          transition: opacity 0.3s ease-out;
        }

        .right .confidence-intervall {
          opacity: 0.2;
        }
      `}</style>
    </g>
  )
}

export default ConfidenceIntervall
