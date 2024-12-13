'use client'

import { breakpoint, minWidth } from 'lib/breakpoints'
import { FunctionComponent, ReactNode } from 'react'

type Props = {
  emphasisColor: string
  children: {
    roofline?: ReactNode
    sloagen: ReactNode
  }
}
const Slogan: FunctionComponent<Props> = (props) => {
  return (
    <div>
      {props.children.roofline && (
        <p className='roofline'>{props.children.roofline}</p>
      )}
      <p className='slogan'>{props.children.sloagen}</p>
      <style jsx>{`
        .roofline {
          font-size: 1em;
          text-transform: uppercase;
          margin: 0 0 0.2em;
        }
        .slogan {
          font-family: 'Usherwood';
          font-size: 1.6em;
          line-height: 1.4em;
          font-weight: bold;
          margin: 0;
        }

        .slogan :global(em) {
          color: ${props.emphasisColor};
          font-style: normal;
        }

        @media ${minWidth(breakpoint.s)} {
          .slogan {
            font-size: 1.8em;
          }
        }

        @media ${minWidth(breakpoint.ml)} {
          .slogan {
            font-size: 2.2em;
          }
        }

        @media ${minWidth(breakpoint.l)} {
          .roofline {
            font-size: 0.8em;
          }
          .slogan {
            font-size: 2.5em;
          }
        }
      `}</style>
    </div>
  )
}

export default Slogan
