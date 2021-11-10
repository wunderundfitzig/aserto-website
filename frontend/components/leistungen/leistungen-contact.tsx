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

const LeistungenContact: FunctionComponent = () => {
  const contactImage = {
    width: 696,
    height: 975,
    src: '/images/team/portraits/_VND8816.jpg',
  }
  const contact = {
    name: 'Marcel Drews',
    phone: '0511-515678-0',
    mail: 'drews@aserto.de',
  }

  return (
    <ContactBanner image={contactImage} contact={contact}>
      {{
        title: <>Haben Sie Fragen zu unseren Leistungen?</>,
        background: <Background />,
      }}
    </ContactBanner>
  )
}
export default LeistungenContact
