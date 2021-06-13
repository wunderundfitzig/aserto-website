import { FunctionComponent } from 'react'
import * as colors from 'lib/colors'
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
      <mask id='contact-banner-mask'>
        <rect x='-100%' y='0' width='300%' height='100%' fill='white' />
      </mask>
      <g mask='url(#contact-banner-mask)'>
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

const LeistungenContact: FunctionComponent = () => {
  const contactImage = {
    width: 188,
    height: 246,
    src: '/contact-placeholder-image.jpg',
  }
  const contact = {
    name: 'Prof. Dr. Lars Harden ',
    phone: '0511-515678-0',
    mail: 'harden@aserto.de',
  }

  return (
    <ContactBanner image={contactImage} contact={contact}>
      {{
        title: (
          <>
            Hast du Fragen zu unseren Leitungen?
            <br /> Stell sie doch einfach Lars:
          </>
        ),
        background: <Background />,
      }}
    </ContactBanner>
  )
}
export default LeistungenContact
