import { breakpoint, minWidth } from 'lib/breakpoints'
import { footerBackgroundColors } from 'lib/colors'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'
import AsertoLogo from './aserto-logo'
import SocialLinks from './social-links'

type Props = {
  gridArea: string
}
const Footer: FunctionComponent<Props> = (props) => {
  const router = useRouter()
  const rootPath = router.pathname.split('/').slice(1)[0]
  const backgroundColor = (footerBackgroundColors as Record<string, string>)[
    rootPath
  ]

  return (
    <footer className='footer'>
      <svg viewBox='0 0 100 100' className='background-rect'>
        <rect
          x={-1000}
          y={0}
          width={2000}
          height={100}
          fill={backgroundColor}
          fillOpacity={0.5}
        />
      </svg>
      <div className='logo'>
        <AsertoLogo />
      </div>
      <address className='address'>
        aserto GmnH & Co. KG
        <br />
        Kriegerstr. 44 <br />
        30161 Hannover
      </address>
      <address className='contact'>
        <a href='mailto:job@aserto.de'>job@aserto.de</a>
        <br />
        <a href='info:job@aserto.de'>info@aserto.de</a>
        <br />
        0511 515678 0
      </address>
      <address className='icons'>
        <SocialLinks color='black' />
      </address>
      <nav title='footer navigation' className='footer-navigation'>
        <Link href='/datenschutz'>
          <a>Datenschutz</a>
        </Link>
        <Link href='/kontakt'>
          <a>Kontakt / Impressum</a>
        </Link>
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
