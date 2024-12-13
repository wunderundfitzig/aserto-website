'use client'

import { FunctionComponent } from 'react'
import { categoryColors, backgroundRed } from 'lib/colors'
import { Contact, ImageType } from 'lib/types'
import ContactBanner from 'components/contact-banner'
import { StraightLine, formatAlignment } from 'components/curves'
import { breakpoint, minWidth } from 'lib/breakpoints'

const Background: FunctionComponent = () => {
  return (
    <div className='custom-background'>
      <div className='line fake-red'>
        <StraightLine
          color={categoryColors.karriere}
          preserveAspectRatio={{ alignX: 'Min', alignY: 'Min', fit: 'slice' }}
          rotate={64}
        />
      </div>

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
        <rect x={-100} y={0} width={300} height={35} fill={backgroundRed} />
      </svg>
      <style jsx>{`
        .custom-background {
          position: relative;
          width: 100%;
          height: 100%;
          top: 100px;
        }
        .background {
          width: 100%;
          height: 100%;
          overflow: visible;
          z-index: -1;
        }
        .fake-red {
          display: none;
        }
        svg {
          overflow: visible;
        }
        @media ${minWidth(breakpoint.sm)} {
          .custom-background {
            top: 0;
          }
        }
        @media ${minWidth(breakpoint.xl)} {
          .fake-red {
            display: block;
            position: absolute;
            width: 1px;
            height: 320px;
            bottom: -100px;
            right: 237px;
            z-index: 100;
          }
        }
      `}</style>
    </div>
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
        <StraightLine
          color={categoryColors.karriere}
          preserveAspectRatio={{ alignX: 'Min', alignY: 'Min', fit: 'slice' }}
          rotate={64}
        />
      </div>
      <div className='line white-right'>
        <StraightLine
          color='white'
          preserveAspectRatio={{ alignX: 'Min', alignY: 'Min', fit: 'slice' }}
          rotate={66}
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
          position: absolute;
          width: 1px;
        }

        .red-left {
          display: none;
        }

        .white-right {
          display: none;
        }
        @media ${minWidth(breakpoint.sm)} {
          .red-left {
            display: block;
            height: 220px;
            bottom: -150px;
            left: -40px;
            z-index: 120;
          }
        }

        @media ${minWidth(breakpoint.xxl)} {
          .red-left {
            display: block;
            height: 220px;
            bottom: -100px;
            left: -40px;
            z-index: 120;
          }
          .white-right {
            display: block;
            height: 320px;
            bottom: -100px;
            right: 120px;
            z-index: 120;
          }
        }
      `}</style>
    </div>
  )
}
export default KarriereContact
