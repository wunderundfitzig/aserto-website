import { FunctionComponent } from 'react'

type Props = { isScrolledIntoView: boolean; curvePoints: [number, number][] }
const ConfidenceIntervall: FunctionComponent<Props> = (props) => {
  return (
    <g>
      <path
        d='M 109 226 Q 120 227 140 150 H 185 Q 130 230 109 228'
        fill='white'
      />
    </g>
  )
}

export default ConfidenceIntervall
