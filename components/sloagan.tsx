import { breakpoint, minWidth } from 'lib/breakpoints'
import { FunctionComponent, ReactNode } from 'react'

type Props = {
  emphasisColor: string
  children: {
    roofline?: ReactNode
    sloagen: ReactNode
  }
}
const Sloagan: FunctionComponent<Props> = (props) => {
  return (
    <div>
      {props.children.roofline && (
        <p className='roofline'>{props.children.roofline}</p>
      )}
      <p className='sloagen'>{props.children.sloagen}</p>
      <style jsx>{`
        .roofline {
          font-size: 0.8em;
          margin: 0 0 0.5em;
        }
        .sloagen {
          font-family: 'Usherwood';
          font-size: 1.6em;
          line-height: 1.4em;
          font-weight: bold;
          margin: 0;
        }

        .sloagen :global(em) {
          color: ${props.emphasisColor};
          font-style: normal;
        }

        @media ${minWidth(breakpoint.s)} {
          .sloagen {
            font-size: 1.8em;
          }
        }

        @media ${minWidth(breakpoint.l)} {
          .sloagen {
            font-size: 2.2em;
          }
        }

        @media ${minWidth(breakpoint.xl)} {
          .roofline {
            font-size: 0.8em;
          }
          .sloagen {
            font-size: 2.5em;
          }
        }
      `}</style>
    </div>
  )
}

export default Sloagan
