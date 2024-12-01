import { FunctionComponent, useRef } from 'react'
import * as colors from 'lib/colors'
import { curvedPath } from 'lib/curved-path'
import { useWindowSize } from 'lib/use-window-size'
import { breakpoint, minWidth } from 'lib/breakpoints'

import DotsVisualisation from './dots-visualisation'
import MovingCurve from './moving-curve'
import ConfidenceIntervall from './confidence-intervall'

const desctopCurvePoints: [number, number][] = [
  [90, 2],
  [55, 45],
  [145, 90],
  [40, 180],
  [110, 230],
  [170, 160],
  [300, 160],
  [300, 190],
  [60, 258],
  [120, 320],
  [90, 370],
]

const mobileCurvePoints: [number, number][] = [
  [90, 2],
  [20, 48],
  [185, 90],
  [40, 160],
  [110, 210],
  [220, 160],
  [300, 160],
  [300, 190],
  [65, 270],
  [130, 318],
  [80, 370],
]

type Props = {
  isRight: boolean
  activeSectionIndex: number
}
const ScrollerSvg: FunctionComponent<Props> = (props) => {
  const { width } = useWindowSize()
  const curveRef = useRef<SVGPathElement>(null)

  const useMobileCurve = (width ?? 0) < breakpoint.sm
  const curvePoints = useMobileCurve ? mobileCurvePoints : desctopCurvePoints
  const clip = useMobileCurve
    ? 'M 0 0 H 100 V 150 H 109 V 230 L 400 150 V 275 H 70 V 400 H 0 Z'
    : 'M 0 0 H 100 V 150 H 109 V 230 L 400 150 V 260 H 70 V 400 H 0 Z'

  return (
    <svg viewBox='0 0 200 365' preserveAspectRatio='none'>
      <clipPath id='curve-clip-path'>
        <path d={clip} />
      </clipPath>
      <g className='visualisations'>
        <DotsVisualisation
          isScrolledIntoView={props.activeSectionIndex >= 1}
          isRight={props.isRight}
          curvePoints={curvePoints}
          curveElememt={curveRef.current}
        />
        <ConfidenceIntervall
          isRight={props.isRight}
          isScrolledIntoView={props.activeSectionIndex >= 3}
          useMobileCurve={useMobileCurve}
          curvePoints={curvePoints}
        />
        <MovingCurve
          curvePoints={curvePoints}
          isScrolledIntoView={props.activeSectionIndex >= 5}
        />
      </g>
      <path
        clipPath={'url(#curve-clip-path)'}
        ref={curveRef}
        d={curvedPath(curvePoints, 0.2)}
        fill='none'
        stroke={colors.categoryColors.purpose}
        strokeLinecap='round'
      />
      <style jsx>{`
        svg {
          position: absolute;
          width: 100%;
          top: 0;
          overflow: visible;
          height: 100%;
          pointer-events: none;
        }

        svg :global(path),
        svg :global(line) {
          vector-effect: non-scaling-stroke;
          stroke-width: 6px;
        }

        @media ${minWidth(breakpoint.ml)} {
          svg :global(path),
          svg :global(line) {
            stroke-width: 8px;
          }
        }

        @media ${minWidth(breakpoint.xxl)} {
          svg :global(path),
          svg :global(line) {
            stroke-width: 10px;
          }
        }
      `}</style>
    </svg>
  )
}

export default ScrollerSvg
