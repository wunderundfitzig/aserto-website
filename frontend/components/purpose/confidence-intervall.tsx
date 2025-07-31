'use client'

import { FunctionComponent } from 'react'
import * as colors from 'lib/colors'
import { curvedPath } from 'lib/curved-path'

const desctopConfidenceIntervall: [number, number][] = [
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

const mobileConfidenceIntervall: [number, number][] = [
  [109, 207],
  [110, 207.5],
  [170, 153],
  [200, 153],
  [400, 153],
  [400, 170],
  [250, 170],
  [120, 207.5],
  [109, 207.5],
]

type Props = {
  isScrolledIntoView: boolean
  isRight: boolean
  useMobileCurve: boolean
  curvePoints: [number, number][]
}
const ConfidenceIntervall: FunctionComponent<Props> = (props) => {
  const maxOffset = props.useMobileCurve ? 2000 : 2500
  const curveSection: [number, number][] = props.curvePoints.slice(3, 7)
  const confidenceIntervall = props.useMobileCurve
    ? mobileConfidenceIntervall
    : desctopConfidenceIntervall

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
        className={`line ${props.isScrolledIntoView ? 'drawn' : 'undrawn'}`}
        clipPath='url(#confidence-intervall-clip-path)'
        d={curvedPath(curveSection, 0.2)}
        stroke={colors.categoryColors.purpose}
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

        .line {
          stroke-dasharray: ${maxOffset};
          stroke-dashoffset: ${maxOffset};
        }

        .line.drawn {
          transition: stroke-dashoffset 4s;
          stroke-dashoffset: 0;
        }
      `}</style>
    </g>
  )
}

export default ConfidenceIntervall
