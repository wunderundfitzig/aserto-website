import { FunctionComponent } from 'react'
import * as colors from 'lib/colors'
import ContactBanner from 'components/contact-banner'
import { formatAlignment } from 'components/curves'

const Background: FunctionComponent = () => {
  return (
    <svg
      className='background'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='400 0 200 35'
      preserveAspectRatio={formatAlignment({
        alignY: 'Min',
        alignX: 'Mid',
        fit: 'slice',
      })}
    >
      <path d='M0 178L500 0l500 178z' fill={colors.backgroundRed} />

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

const KarriereContact: FunctionComponent = () => {
  const contactImage = {
    width: 188,
    height: 246,
    src: '/contact-placeholder-image.jpg',
  }
  const contact = {
    name: 'Prof. Dr. Jana Harden ',
    phone: '0511-515678-0',
    mail: 'harden@aserto.de',
  }

  return (
    <ContactBanner image={contactImage} contact={contact}>
      {{
        title: <>Wir haben gerade keine passende Stelle für Dich?</>,
        text: (
          <>
            Du hast aber das Gefühl, perfekt zu uns zu passen? Kein Problem -
            sende uns gerne eine Initiativbewerbung. Du hast noch Fragen? Dann
            melde Dich bei Anna Begau.
          </>
        ),
        background: <Background />,
      }}
    </ContactBanner>
  )
}
export default KarriereContact
