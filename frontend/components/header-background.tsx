'use client'

import { breakpoint, minWidth } from 'lib/breakpoints'
import { FunctionComponent } from 'react'

type Props = {
  color: string
  opacity?: number
  gridArea?: string
}
const HeaderBackground: FunctionComponent<Props> = (props) => {
  return (
    <svg
      className='background'
      viewBox='0 0 100 100'
      preserveAspectRatio='none'
    >
      <rect
        fill={props.color}
        fillOpacity={props.opacity ?? 1}
        x={0}
        y={0}
        width={100}
        height={100}
      />
      <style jsx>
        {`
          @keyframes fade-in {
            from {
              opacity: 0;
            }

            to {
              opacity: 1;
            }
          }

          svg {
            position: absolute;
            grid-area: ${props.gridArea ? props.gridArea : 'none'};
            width: 100%;
            height: 100%;
            z-index: -1;
            will-change: opacity;
            animation: fade-in 2.5s ease-in;
            overflow: visible;
          }

          rect {
            transform: scaleX(100) scaleY(100);
            transform-origin: center bottom;
          }

          @media ${minWidth(breakpoint.l)} {
            .background rect {
              transform-origin: bottom right;
            }
          }
        `}
      </style>
    </svg>
  )
}
export default HeaderBackground
