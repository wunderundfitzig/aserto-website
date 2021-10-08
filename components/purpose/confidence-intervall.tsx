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
  [200, 170],
  [113, 227],
  [109, 227],
]

type Props = {
  isScrolledIntoView: boolean
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
    <g>
      <path
        d={curvedPath(confidenceIntervall, 0.2)}
        stroke={colors.categoryColors.purpose}
        fill={colors.categoryColors.purpose}
        opacity={0.2}
      />
      <path
        d={curvedPath(curveSection, 0.2)}
        stroke={colors.categoryColors.purpose}
        strokeDasharray={4400}
        strokeDashoffset={3500 - offset}
        fill='none'
      />
    </g>
  )
}

export default ConfidenceIntervall
