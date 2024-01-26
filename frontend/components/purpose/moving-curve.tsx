import { FunctionComponent, useEffect, useState } from 'react'
import * as colors from 'lib/colors'
import { curvedPath } from 'lib/curved-path'
import { breakpoint } from 'lib/breakpoints'
import { useWindowSize } from 'lib/use-window-size'
import { transparentize } from 'polished'

function makeOffsetCurve(
  curve: [number, number][],
  offset: number,
): [number, number][] {
  return curve.map((point, idx) =>
    idx === 2 ? [point[0] + offset, point[1]] : point,
  )
}

const offsetSteps = [0, 0.2, 0.4, 0.6, 0.8]

type Props = {
  isScrolledIntoView: boolean
  curvePoints: [number, number][]
}
const MovingCurve: FunctionComponent<Props> = (props) => {
  const { width } = useWindowSize()
  const maxOffset = (width ?? 0) < breakpoint.sm ? 50 : 30
  const [offset, setOffset] = useState(0)
  const movingCurve: [number, number][] = props.curvePoints.slice(-4)

  useEffect(() => {
    if (!props.isScrolledIntoView) {
      setOffset(0)
      return
    }
    if (offset >= maxOffset) return
    requestAnimationFrame(() => {
      setOffset(offset + 1)
    })
  }, [props.isScrolledIntoView, offset, maxOffset])

  return (
    <g>
      <clipPath id='moving-curve-clip-path'>
        <path d='M 70 0 H 200 V 400 H 70 Z' />
      </clipPath>
      {offsetSteps.map((step) => (
        <path
          key={step}
          clipPath={'url(#moving-curve-clip-path)'}
          d={curvedPath(makeOffsetCurve(movingCurve, step * maxOffset), 0.2)}
          fill='none'
          stroke={transparentize(0.9 - step / 2, colors.beige)}
          strokeLinecap='round'
          visibility={offset >= step * maxOffset ? 'visible' : 'hidden'}
        />
      ))}
      <path
        clipPath={'url(#moving-curve-clip-path)'}
        d={curvedPath(makeOffsetCurve(movingCurve, offset), 0.2)}
        fill='none'
        stroke={colors.categoryColors.purpose}
        strokeLinecap='round'
      />
    </g>
  )
}
export default MovingCurve
