'use client'

import { FunctionComponent } from 'react'
import * as colors from 'lib/colors'
import { Contact, ImageType } from 'lib/types'
import ContactBanner from 'components/contact-banner'
import { formatAlignment } from 'components/curves'

const Background: FunctionComponent = () => {
  return (
    <svg
      className='background'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio={formatAlignment({
        alignY: 'Max',
        alignX: 'Mid',
        fit: 'slice',
      })}
    >
      <g>
        <svg
          viewBox='0 0 100 100'
          preserveAspectRatio={formatAlignment({
            alignY: 'Min',
            alignX: 'Mid',
            fit: 'slice',
          })}
        >
          <circle r='100' cx='50' cy='100' fill={colors.backgroundGreen} />
        </svg>
      </g>

      <style jsx>{`
        .background {
          width: 100%;
          height: 100%;
          overflow: visible;
        }
        svg {
          overflow: visible;
        }
      `}</style>
    </svg>
  )
}

type Props = {
  contact: Contact
  image: ImageType
}
const LeistungenContact: FunctionComponent<Props> = (props) => {
  return (
    <ContactBanner image={props.image} contact={props.contact}>
      {{
        title: <>Haben Sie Fragen zu unseren Leistungen?</>,
        background: <Background />,
      }}
    </ContactBanner>
  )
}
export default LeistungenContact
