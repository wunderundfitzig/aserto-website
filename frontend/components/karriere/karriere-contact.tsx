import { FunctionComponent } from 'react'
import * as colors from 'lib/colors'
import { breakpoint, minWidth } from 'lib/breakpoints'
import { Contact, ImageType } from 'lib/types'
import ContactBanner from 'components/contact-banner'
import { CutLine, formatAlignment } from 'components/curves'

const Background: FunctionComponent = () => {
  return (
    <svg
      className='background'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='450 0 100 35'
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

type Props = {
  contact: Contact
  image: ImageType
}
const KarriereContact: FunctionComponent<Props> = (props) => {
  return (
    <div className='karriere-contact'>
      <div className='line'>
        <CutLine
          color={colors.categoryColors.karriere}
          rotate={-20}
          preserveAspectRatio='none'
        />
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
          display: none;
        }

        @media ${minWidth(breakpoint.ml)} {
          .line {
            display: block;
            position: absolute;
            width: 50px;
            height: 50px;
            left: 65%;
            bottom: 40vw;
          }
        }

        @media ${minWidth(breakpoint.l)} {
          .line {
            bottom: 32vw;
          }
        }

        @media ${minWidth(breakpoint.xxl)} {
          .line {
            bottom: 420px;
          }
        }
      `}</style>
    </div>
  )
}
export default KarriereContact
