import { FunctionComponent } from 'react'

type CurveProps = {
  color: string
}

export const SimpleCutRoundCurve: FunctionComponent<CurveProps> = (props) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 321 479'>
      <defs>
        <clipPath id='a'>
          <path transform='translate(1599 721)' d='M0 0h321v479H0z' />
        </clipPath>
      </defs>
      <g transform='translate(-1599 -721)' clipPath='url(#a)'>
        <path
          data-name='Pfad 170'
          d='M1960.133 782.417c-104.4-56.477-201.3-71.331-282.83-5.356-109.518 87.525-64.318 260.33-11.412 455.934'
          fill='none'
          stroke={props.color}
          strokeWidth='20'
        />
      </g>
    </svg>
  )
}
