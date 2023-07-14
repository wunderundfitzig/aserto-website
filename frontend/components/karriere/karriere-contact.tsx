import { FunctionComponent } from 'react'
import * as colors from 'lib/colors'
import { Contact, ImageType } from 'lib/types'
import ContactBanner from 'components/contact-banner'
import { StraightLine, formatAlignment } from 'components/curves'

const Background: FunctionComponent = () => {
  return (
    <svg
      className='background'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 35'
      preserveAspectRatio={formatAlignment({
        alignY: 'Min',
        alignX: 'Mid',
        fit: 'slice',
      })}
    >
      <rect
        x={-100}
        y={12}
        width={300}
        height={35}
        fill={colors.backgroundRed}
      />

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
const KarriereContact: FunctionComponent<Props> = (props) => {
  return (
    <div className='karriere-contact'>
      <div className='line red-left'>
        <StraightLine color={colors.categoryColors.karriere} rotate={60} />
      </div>
      <div className='line white-right'>
        <StraightLine color='white' rotate={60} />
      </div>
      <ContactBanner
        contactCardTitle='Kontakt'
        image={props.image}
        contact={props.contact}
      >
        {{
          title: <>Wir haben gerade keine passende Stelle für Dich?</>,
          text: (
            <>
              Du hast aber das Gefühl, perfekt zu uns zu passen? Kein Problem –
              sende uns gern eine Initiativbewerbung.
            </>
          ),
          background: <Background />,
        }}
      </ContactBanner>
      <style jsx>{`
        .karriere-contact {
          position: relative;
        }

        .line {
          position: absolute;
        }

        .red-left {
          width: 220px;
          height: 220px;
          bottom: -100px;
          left: -40px;
          z-index: 120;
        }

        .white-right {
          width: 320px;
          height: 320px;
          bottom: -100px;
          right: -200px;
          z-index: 120;
        }
      `}</style>
    </div>
  )
}
export default KarriereContact
