'use client'

import { breakpoint, minWidth } from 'lib/breakpoints'
import { FunctionComponent, ReactNode } from 'react'

type Props = {
  color: string
  align?: 'left' | 'right'
  children: {
    roofline: ReactNode
    title: ReactNode
  }
}
const Motto: FunctionComponent<Props> = (props) => {
  const { align = 'left' } = props

  return (
    <div className='motto'>
      <div className='roofline'>{props.children.roofline}</div>
      <div className='title'>{props.children.title}</div>
      <style jsx>{`
        .motto {
          text-align: ${align};
        }

        .roofline {
          font-size: 0.9em;
          margin: 0 0 0.3em;
          font-weight: 200;
        }

        .roofline > :global(*) {
          margin: 0;
          line-height: 1.5em;
        }

        .title {
          color: ${props.color};
          font-weight: 600;
          font-size: 1.2em;
          min-width: 100%;
        }

        .title > :global(*) {
          font-weight: inherit;
          font-size: inherit;
        }

        @media ${minWidth(breakpoint.sm)} {
          .title {
            max-width: 30em;
            font-size: 1.4em;
          }
        }
      `}</style>
    </div>
  )
}
export default Motto
