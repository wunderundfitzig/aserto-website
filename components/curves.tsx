import { FunctionComponent } from 'react'

type CurveProps = {
  color: string
}

export const FrontpageCurve: FunctionComponent<CurveProps> = (props) => {
  return (
    <svg
      className='curve'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1084.567 1248.952'
      preserveAspectRatio='none'
    >
      <defs>
        <clipPath id='a'>
          <path
            data-name='Pfad 247'
            d='M16.869 178.936v1248.952h1084.567V178.936zm907.179 977.907H703.356V595.475h220.692z'
            transform='translate(104.561 -178.936)'
            fill='none'
          />
        </clipPath>
      </defs>
      <g data-name='Gruppe 376'>
        <g
          data-name='Gruppe 375'
          transform='translate(-121.43)'
          clipPath='url(#a)'
        >
          <path
            data-name='Pfad 246'
            d='M854.22-29.224l307.04 511.252c58.5 95.37 42.916 174.748-72.834 219.925l-824 321.318c-159.39 57.51-128.8 141.459-127.1 215.643l15.374 147.092'
            fill='none'
            stroke={props.color}
            strokeMiterlimit='10'
            strokeWidth='14'
          />
        </g>
      </g>
      <style jsx>{`
        .curve {
          width: 800px;
          height: 100%;
          display: block;
          overflow: visible;
        }

        path {
          vector-effect: non-scaling-stroke;
        }
      `}</style>
    </svg>
  )
}

export const SimpleCutRoundCurve: FunctionComponent<CurveProps> = (props) => {
  return (
    <svg
      className='curve'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 321 479'
    >
      <defs>
        <clipPath id='b'>
          <path transform='translate(1599 721)' d='M0 0h321v479H0z' />
        </clipPath>
      </defs>
      <g transform='translate(-1599 -721)' clipPath='url(#b)'>
        <path
          data-name='Pfad 170'
          d='M1960.133 782.417c-104.4-56.477-201.3-71.331-282.83-5.356-109.518 87.525-64.318 260.33-11.412 455.934'
          fill='none'
          stroke={props.color}
          strokeWidth='14'
        />
      </g>
      <style jsx>{`
        .curve {
          width: 100%;
          height: 100%;
        }
        path {
          vector-effect: non-scaling-stroke;
        }
      `}</style>
    </svg>
  )
}
