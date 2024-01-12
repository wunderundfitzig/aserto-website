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
          <circle r='100' cx='50' cy='100' fill={colors.backgroundBlue} />
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

const GefahrdungsbeurteilungContact: FunctionComponent = () => {
  const contact: Contact = {
    name: 'Daniela Charrier',
    phone: '0511-51567863',
    mail: 'daniela.charrier@aserto.de',
  }
  const image: ImageType = {
    src: '/team/daniela-charrier/vnd3560.jpg',
    width: 2143,
    height: 3000,
  }

  return (
    <ContactBanner image={image} contact={contact}>
      {{
        title: (
          <>
            Haben Sie Fragen zur Gefährdungsbeurteilung <br />
            psychischer Belastung mit aserto?
          </>
        ),
        background: <Background />,
      }}
    </ContactBanner>
  )
}
export default GefahrdungsbeurteilungContact
