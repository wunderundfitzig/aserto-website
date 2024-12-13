'use client'

import Link from 'next/link'
import { FunctionComponent } from 'react'
import { breakpoint, minWidth } from 'lib/breakpoints'
import { footerBackgroundColors } from 'lib/colors'
import { SiteInfo } from 'lib/kirby-query'
import AsertoLogo from './aserto-logo'
import SocialLinks from './social-links'
import { usePathname } from 'next/navigation'

type Props = {
  gridArea: string
  siteInfo: SiteInfo
}
const Footer: FunctionComponent<Props> = (props) => {
  const pathname = usePathname()
  const rootPath = pathname.split('/').slice(1)[0]
  const backgroundColor = (footerBackgroundColors as Record<string, string>)[
    rootPath
  ]

  return (
    <footer className='footer'>
      <svg
        viewBox='0 0 100 100'
        className='background-rect'
        preserveAspectRatio='none'
      >
        <rect
          x={-1000}
          y={0}
          width={2000}
          height={100}
          fill={backgroundColor}
        />
      </svg>
      <div className='logo'>
        <AsertoLogo />
      </div>
      <address className='address'>{props.siteInfo.address}</address>
      <address className='contact'>
        <a href={`mailto:${props.siteInfo.infoMail}`}>
          {props.siteInfo.infoMail}
        </a>
        <br />
        <a href={`mailto:${props.siteInfo.jobMail}`}>
          {props.siteInfo.jobMail}
        </a>
        <br />
        {props.siteInfo.phoneNumber}
      </address>
      <address className='icons'>
        <SocialLinks {...props.siteInfo} color='black' />
      </address>
      <nav title='footer navigation' className='footer-navigation'>
        <Link href='/nachhaltigkeitsbericht'>Nachhaltigkeitsbericht</Link>
        <Link href='/datenschutz'>Datenschutz</Link>
        <Link href='/kontakt'>Kontakt / Impressum</Link>
      </nav>
      <style jsx>{`
        .footer {
          position: relative;
          pointer-events: relative;
          grid-area: ${props.gridArea};
          display: grid;
          grid-gap: 2em;
          grid-template-columns: 1fr 1fr;
          grid-template-areas:
            'logo     logo'
            'address  nav'
            'contact  social';
          line-height: 1.5em;
          font-size: 0.8em;
          padding: 3rem 0;
          z-index: 200;
        }

        .background-rect {
          position: absolute;
          z-index: -1;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .address {
          grid-area: address;
          white-space: pre-line;
        }

        .contact {
          grid-area: contact;
        }

        .logo {
          width: 50px;
          grid-area: logo;
        }

        .icons {
          grid-area: social;
        }

        .footer-navigation {
          grid-area: nav;
          align-self: start;
          display: grid;
        }

        address {
          font-style: normal;
        }

        @media ${minWidth(breakpoint.s)} {
          .footer {
            grid-template-rows: auto auto;
            grid-template-columns: auto auto 1fr auto;

            grid-template-areas:
              'logo logo logo logo'
              'address contact social nav';
          }
        }

        @media ${minWidth(breakpoint.l)} {
          .footer {
            grid-template-areas: 'logo address contact social nav';
            grid-template-columns: 50px auto auto 1fr auto;
            grid-template-rows: auto;
            align-items: start;
            grid-gap: 5em;
            padding: 5rem 0 4rem;
          }

          .logo {
            margin-top: 0.4em;
          }

          .icons {
            align-self: center;
            justify-self: center;
          }

          .footer-navigation {
            text-align: right;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
