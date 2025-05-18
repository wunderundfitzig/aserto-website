'use client'

import { FunctionComponent } from 'react'
import { categoryColors } from 'lib/colors'
import Slogan from 'components/slogan'

const SloganText: FunctionComponent = () => {
  return (
    <section className='slogan'>
      <Slogan emphasisColor={categoryColors.purpose}>
        {{
          sloagen: (
            <>
              aserto begleitet Unternehmen und Institutionen bei{' '}
              <em>richtungsweisenden Handlungen</em> und eröffnet{' '}
              <em>Möglichkeiten zur Veränderung.</em>
            </>
          ),
        }}
      </Slogan>
      <style jsx>{`
        section {
          margin: 10rem 0;
          max-width: 55em;
        }
      `}</style>
    </section>
  )
}

export default SloganText
