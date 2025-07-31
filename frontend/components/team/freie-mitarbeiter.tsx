'use client'

import { breakpoint, minWidth } from 'lib/breakpoints'
import { FunctionComponent } from 'react'

type Props = {
  title: string
  names: string
}
const FreieMitarbeiter: FunctionComponent<Props> = (props) => {
  return (
    <section className='freie-mitarbeiter'>
      <h2>{props.title}</h2>
      <div className='text-block'>
        <p>{props.names}</p>
      </div>
      <style jsx>{`
        section {
          margin: 10rem 0;
        }

        h2 {
          max-width: 45rem;
          hyphens: auto;
        }

        .text-block {
          max-width: 45em;
        }

        @media ${minWidth(breakpoint.s)} {
          h2 {
            hyphens: initial;
          }
        }
      `}</style>
    </section>
  )
}
export default FreieMitarbeiter
