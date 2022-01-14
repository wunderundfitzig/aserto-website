import { breakpoint, minWidth } from 'lib/breakpoints'
import { FunctionComponent } from 'react'
import css from 'styled-jsx/css'

type Alignment =
  | {
      alignX: 'Min' | 'Mid' | 'Max'
      alignY: 'Min' | 'Mid' | 'Max'
      fit: 'slice' | 'meet'
    }
  | 'none'

type CurveProps = {
  color: string
  animate?: boolean
  className?: string
  preserveAspectRatio?: Alignment
}

export const formatAlignment = (alignment?: Alignment): string | undefined => {
  if (alignment === undefined) return undefined
  if (alignment === 'none') return 'none'
  return `x${alignment.alignX}Y${alignment.alignY} ${alignment.fit}`
}

const className = (props: CurveProps): string =>
  [props.className, props.animate && 'animate'].filter((cl) => cl).join(' ')

const svgStyle = css`
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
  svg {
    display: block;
    width: 100%;
    height: 100%;
    overflow: visible;
    stroke-width: 6px;
    pointer-events: none;
  }

  path,
  line {
    vector-effect: non-scaling-stroke;
  }

  .animate path,
  .animate line {
    stroke-dasharray: 5000;
    stroke-dashoffset: 5000;
    animation: dash 3s linear forwards;
    animation-delay: 0.5s;
  }

  @media ${minWidth(breakpoint.ml)} {
    svg {
      stroke-width: 8px;
    }
  }

  @media ${minWidth(breakpoint.xxl)} {
    svg {
      stroke-width: 10px;
    }
  }
`

export const FrontpageCurve: FunctionComponent<CurveProps> = (props) => {
  return (
    <svg
      aria-hidden
      className={className(props)}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 250 950 1100'
      preserveAspectRatio={formatAlignment(props.preserveAspectRatio)}
    >
      <g transform='translate(-121.43)'>
        <path
          d='M854.22-29.224l307.04 511.252c58.5 95.37 42.916 174.748-72.834 219.925l-824 321.318c-159.39 57.51-128.8 141.459-127.1 215.643l15.374 147.092'
          fill='none'
          stroke={props.color}
          strokeMiterlimit='10'
        />
      </g>
      <style jsx>{svgStyle}</style>
    </svg>
  )
}

export const MobileFrontpageCurve: FunctionComponent<CurveProps> = (props) => {
  return (
    <svg
      aria-hidden
      className={className(props)}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='-10 80 370 500'
      preserveAspectRatio={formatAlignment(props.preserveAspectRatio)}
    >
      <path
        d='M379.82 7.661l31.078 54.77c15.636 27.91 11.697 43.41-16.982 55.659l-67.295 25.975c-68.02 26.056-32.116 57.241-3.727 95.671 0 0 50.4 69.134 51.25 70.375 17.564 25.63 15.11 51.217-30.09 65.469-30.133 9.5-124.71 39.933-283.728 91.295C-6.46 485.22 6.357 511.998 7.07 535.661l6.442 46.92'
        stroke={props.color}
        fill='none'
        strokeLinecap='round'
      />

      <style jsx>{svgStyle}</style>
    </svg>
  )
}

export const SimpleCutRoundCurve: FunctionComponent<CurveProps> = (props) => {
  return (
    <svg
      aria-hidden
      className={className(props)}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 230 385'
      preserveAspectRatio={formatAlignment(props.preserveAspectRatio)}
    >
      <path
        fill='none'
        stroke={props.color}
        d='M782.592 399.004C532.37 174.97 265.882-96.156 79.639 54.564-8.504 125.004 3.57 250.685 39.359 399.578'
      />
      <style jsx>{svgStyle}</style>
    </svg>
  )
}

export const CornerCurve: FunctionComponent<CurveProps> = (props) => {
  return (
    <svg
      aria-hidden
      className={className(props)}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 222 674'
      preserveAspectRatio={formatAlignment(props.preserveAspectRatio)}
    >
      <path
        fill='none'
        stroke={props.color}
        strokeLinecap='round'
        d='M-496.378 1774.925S118.41 372.125 119.075 371.476c74.835-186.635 45.648-253.511-129.51-355.72'
      />
      <style jsx>{svgStyle}</style>
    </svg>
  )
}

export const OpenCircle: FunctionComponent<CurveProps> = (props) => {
  return (
    <svg
      aria-hidden
      className={className(props)}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 856 895'
      preserveAspectRatio={formatAlignment(props.preserveAspectRatio)}
    >
      <path
        fill='none'
        stroke={props.color}
        strokeLinecap='round'
        d='M14.345 256.572C119.632 40.702 379.979-48.943 595.85 56.344 811.721 161.632 901.366 421.978 796.078 637.85 714.27 805.58 538.848 897.104 363.5 880.203 213.885 865.822 82.315 775.17 15.584 640.493'
      />
      <style jsx>{svgStyle}</style>
    </svg>
  )
}

export const SkewedHalfCircle: FunctionComponent<CurveProps> = (props) => {
  return (
    <svg
      aria-hidden
      className={className(props)}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 896 1358'
      preserveAspectRatio={formatAlignment(props.preserveAspectRatio)}
    >
      <path
        d='M34.397 49.15c342.582-98.389 700.061 99.568 798.451 442.15 66.118 230.216-1.59 467.158-157.045 627.651-137.47 141.42-331.948 212.398-528.194 192.775'
        stroke={props.color}
        fill='none'
        transform='rotate(-5)'
        strokeLinecap='round'
      />
      <style jsx>{svgStyle}</style>
    </svg>
  )
}

export const TriangleLine: FunctionComponent<CurveProps> = (props) => {
  return (
    <svg
      aria-hidden
      className={className(props)}
      viewBox='0 0 1233 1145'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio={formatAlignment(props.preserveAspectRatio)}
    >
      <path
        d='M1479.097 481.457L455.664 963.277l933.367 203.355L12 12'
        stroke={props.color}
        fill='none'
        strokeLinecap='round'
        strokeMiterlimit='10'
      />
      <style jsx>{svgStyle}</style>
    </svg>
  )
}

export const RoundCurve: FunctionComponent<CurveProps> = (props) => {
  return (
    <svg
      aria-hidden
      className={className(props)}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 2028.305 2224.411'
      preserveAspectRatio={formatAlignment(props.preserveAspectRatio)}
    >
      <path
        d='M704.947 13.072s1472.265 611.831 1299.09 1161.6S12.248 2212.158 12.248 2212.158'
        fill='none'
        stroke={props.color}
        strokeLinecap='round'
      />
      <style jsx>{svgStyle}</style>
    </svg>
  )
}

export const EndlessLine: FunctionComponent<
  CurveProps & { rotate: number; animate?: boolean }
> = (props) => {
  return (
    <svg
      aria-hidden
      className={className(props)}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100'
      preserveAspectRatio={formatAlignment(props.preserveAspectRatio)}
    >
      <line
        x1={-10000}
        y1={50}
        x2={20000}
        y2={50}
        fill='none'
        transform={`rotate(${props.rotate}, 50, 50)`}
        stroke={props.color}
        strokeLinecap='round'
      />
      <style jsx>{svgStyle}</style>
      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }

        .animate line {
          stroke-dasharray: 40000;
          stroke-dashoffset: 40000;
          animation: dash 20s linear forwards;
          animation-delay: -9s;
        }
      `}</style>
    </svg>
  )
}

export const CutLine: FunctionComponent<CurveProps & { rotate: number }> = (
  props
) => {
  return (
    <svg
      aria-hidden
      className={className(props)}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100'
      preserveAspectRatio={formatAlignment(props.preserveAspectRatio)}
    >
      <line
        x1={0}
        y1={100}
        x2={10000}
        y2={100}
        fill='none'
        transform={`rotate(${props.rotate}, 0, 100)`}
        stroke={props.color}
        strokeLinecap='round'
      />
      <style jsx>{svgStyle}</style>
    </svg>
  )
}

export const CheckmarkLine: FunctionComponent<CurveProps> = (props) => {
  return (
    <svg
      aria-hidden
      className={className(props)}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 125 100'
      preserveAspectRatio={formatAlignment(props.preserveAspectRatio)}
    >
      <path
        fill='none'
        stroke={props.color}
        strokeLinecap='round'
        d='M7-6L117.828 94 166 62.759'
      />
      <style jsx>{svgStyle}</style>
    </svg>
  )
}

export const LeftRightTurnCurve: FunctionComponent<CurveProps> = (props) => {
  return (
    <svg
      aria-hidden
      className={className(props)}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='90 -170 400 500'
      preserveAspectRatio={formatAlignment(props.preserveAspectRatio)}
    >
      <mask id='left-right-turn-curve-mask'>
        <rect x={0} y={-95} width={600} height={800} fill='white' />
        <rect x={110} y={95} width={400} height={60} />
      </mask>
      <path
        d='M532.913 357.268s-154.24 102.816-154.45 102.866c-26.955 15.248-33.984 2.379-41.21-12.767-7.225-15.145-120.491-332.421-142.407-383.4-21.916-50.978-31.502-65.76-78.586-37.84-47.083 27.918-104.753 61.93-104.753 61.93'
        stroke={props.color}
        fill='none'
        strokeLinecap='round'
        mask='url(#left-right-turn-curve-mask)'
      />
      <style jsx>{svgStyle}</style>
    </svg>
  )
}

export const PurposeCurve: FunctionComponent<CurveProps> = (props) => {
  return (
    <svg
      aria-hidden
      className={className(props)}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='1450 340 1440 1100'
      preserveAspectRatio={formatAlignment(props.preserveAspectRatio)}
    >
      <mask id='purpose-curve-mask'>
        <rect x={0} y={0} width={5000} height={2000} fill='white' />
        <rect className='dot-mask' x={1600} y={920} width={500} height={130} />
        <rect x={2300} y={1000} width={590} height={440} />
      </mask>
      <path
        d='M5351.854 98.31S2312.816 1513.966 2312.237 1514.087c-74.501 36.927-93.741 6.116-113.501-30.158s-328.624-796.597-388.5-918.715-86.148-157.495-216.289-89.913S7.006 1409.255 7.006 1409.255'
        fill='none'
        stroke={props.color}
        strokeLinecap='round'
        mask='url(#purpose-curve-mask)'
      />
      <style jsx>{svgStyle}</style>
    </svg>
  )
}

export const DownhillCurve: FunctionComponent<CurveProps> = (props) => {
  return (
    <svg
      aria-hidden
      className={className(props)}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='500 450 1100 1750'
      preserveAspectRatio={formatAlignment(props.preserveAspectRatio)}
    >
      <path
        d='M20.667 378.483s550.746 141.872 551.527 142.376c125.741 33.761 137.462 74.2 137.374 259.926s3.8 178.102 6.999 277.491 60.04 153.148 146.292 153.224 343.324-9.422 421.319-12.73 163.906-7.998 173.072 109.448 81.68 856.77 81.68 856.77'
        fill='none'
        stroke={props.color}
        strokeLinecap='round'
      />
      <style jsx>{svgStyle}</style>
    </svg>
  )
}

export const RoundZigZagCurve: FunctionComponent<CurveProps> = (props) => {
  return (
    <svg
      aria-hidden
      className={className(props)}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='750 470 1510 680'
      preserveAspectRatio={formatAlignment(props.preserveAspectRatio)}
    >
      <path
        d='m448.925 489.404 1804.458 737.226s-750.304 118.597-729 636.37c-.402 3.413 0 429.927 0 229.927'
        fill='none'
        stroke={props.color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <style jsx>{svgStyle}</style>
    </svg>
  )
}

export const TeamLine: FunctionComponent<CurveProps> = (props) => {
  return (
    <svg
      aria-hidden
      className={className(props)}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='100 0 1500 2583.521'
      preserveAspectRatio={formatAlignment(props.preserveAspectRatio)}
    >
      <path
        d='M537.553 9.999H28.93l1551 1217.707L76.73 2573.52h1852.543'
        fill='none'
        stroke={props.color}
        strokeLinecap='round'
        strokeMiterlimit={10}
      />
      <style jsx>{svgStyle}</style>
    </svg>
  )
}
