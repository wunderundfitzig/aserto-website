'use client'

import { FunctionComponent } from 'react'
import { categoryColors } from 'lib/colors'
import { breakpoint, minWidth } from 'lib/breakpoints'
import Slogan from 'components/slogan'

const SecondSloganText: FunctionComponent = () => {
  return (
    <section className='slogan'>
      <Slogan emphasisColor={categoryColors.purpose}>
        {{
          sloagen: (
            <>
              aserto bringt <em>Menschen und Daten</em> zusammen, damit Fakten
              greifbar und Diskussionen zielführend werden. Denn evidenzbasierte
              Entscheidungen sind die <em>besseren Entscheidungen.</em>
            </>
          ),
        }}
      </Slogan>
      <style jsx>{`
        section {
          margin: 8rem 0 7rem;
          max-width: 55em;
        }

        @media ${minWidth(breakpoint.sm)} {
          margin: 10rem 0;
        }
      `}</style>
    </section>
  )
}

export default SecondSloganText
