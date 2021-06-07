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
  preserveAspectRatio?: Alignment
}

export const formatAlignment = (alignment?: Alignment): string | undefined => {
  if (alignment === undefined) return undefined
  if (alignment === 'none') return 'none'
  return `x${alignment.alignX}Y${alignment.alignY} ${alignment.fit}`
}

const svgStyle = css`
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;
  stroke-width: 6px;

  @media (${minWidth(breakpoint.l)}) {
    stroke-width: 8px;
  }

  @media (${minWidth(breakpoint.xxl)}) {
    stroke-width: 10px;
  }
`

const pathStyle = css`
  path {
    vector-effect: non-scaling-stroke;
  }
`

export const FrontpageCurve: FunctionComponent<CurveProps> = (props) => {
  return (
    <svg
      className='curve'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1084.567 1248.952'
      preserveAspectRatio={formatAlignment(props.preserveAspectRatio)}
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
          />
        </g>
      </g>
      <style jsx>{svgStyle}</style>
      <style jsx>{pathStyle}</style>
      <style jsx>{`
        .curve {
          width: 800px;
        }
      `}</style>
    </svg>
  )
}

export const SimpleCutRoundCurve: FunctionComponent<CurveProps> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 270 385'
      preserveAspectRatio={formatAlignment(props.preserveAspectRatio)}
    >
      <path
        fill='none'
        stroke={props.color}
        d='M782.592 399.004C532.37 174.97 265.882-96.156 79.639 54.564-8.504 125.004 3.57 250.685 39.359 399.578'
      />
      <style jsx>{svgStyle}</style>
      <style jsx>{pathStyle}</style>
    </svg>
  )
}

export const CornerCurve: FunctionComponent<CurveProps> = (props) => {
  return (
    <svg
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
      <style jsx>{pathStyle}</style>
    </svg>
  )
}

export const OpenCircle: FunctionComponent<CurveProps> = (props) => {
  return (
    <svg
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
      <style jsx>{pathStyle}</style>
    </svg>
  )
}

export const SkewedHalfCircle: FunctionComponent<CurveProps> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 896 1358'
      preserveAspectRatio={formatAlignment(props.preserveAspectRatio)}
    >
      <path
        d='M34.397 49.15c342.582-98.389 700.061 99.568 798.451 442.15 66.118 230.216-1.59 467.158-157.045 627.651-137.47 141.42-331.948 212.398-528.194 192.775'
        stroke={props.color}
        fill='none'
        strokeLinecap='round'
      />
      <style jsx>{svgStyle}</style>
      <style jsx>{pathStyle}</style>
    </svg>
  )
}

export const TriangleLine: FunctionComponent<CurveProps> = (props) => {
  return (
    <svg
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
      <style jsx>{pathStyle}</style>
    </svg>
  )
}
