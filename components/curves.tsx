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
            d='M16.869 178.936v1248.952h1084.567V178.936zm907.179 977.907H703.356V595.475h220.692z'
            transform='translate(104.561 -178.936)'
            fill='none'
          />
        </clipPath>
      </defs>
      <g>
        <g transform='translate(-121.43)' clipPath='url(#a)'>
          <path
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
      viewBox='0 0 270 385'
      preserveAspectRatio='xMinYMax meet'
    >
      <path
        fill='none'
        stroke={props.color}
        strokeWidth='14'
        d='M782.592 399.004C532.37 174.97 265.882-96.156 79.639 54.564-8.504 125.004 3.57 250.685 39.359 399.578'
      />

      <style jsx>{`
        .curve {
          display: block;
          width: 100%;
          height: 100%;
          overflow: visible;
        }
        path {
          vector-effect: non-scaling-stroke;
        }
      `}</style>
    </svg>
  )
}

export const CornerCurve: FunctionComponent<CurveProps> = (props) => {
  return (
    <svg
      className='curve'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 222 674'
      preserveAspectRatio='xMaxYMid slice'
    >
      <path
        fill='none'
        stroke={props.color}
        strokeLinecap='round'
        strokeWidth='14'
        d='M-496.378 1774.925S118.41 372.125 119.075 371.476c74.835-186.635 45.648-253.511-129.51-355.72'
      />

      <style jsx>{`
        .curve {
          display: block;
          width: 100%;
          height: 100%;
          overflow: visible;
        }
        path {
          vector-effect: non-scaling-stroke;
        }
      `}</style>
    </svg>
  )
}
