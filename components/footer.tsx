import { breakpoint, minWidth } from 'lib/breakpoints'
import { categoryBackgroundColors } from 'lib/colors'
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
  const backgroundColor = (categoryBackgroundColors as Record<string, string>)[
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
      <address className='adress'>
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
      <address className='scial-icons'>
        <SocialLinks color='black' />
      </address>
      <nav title='footer navigation' className='footer-navigation'>
        <Link href='/kontakt'>
          <a>Kontakt / Impressum</a>
        </Link>
        <Link href='/datenschutz'>
          <a>Datenschutz</a>
        </Link>
      </nav>
      <style jsx>{`
        .footer {
          position: relative;
          pointer-events: relative;
          grid-area: ${props.gridArea};
          display: grid;
          grid-gap: 2em;
          line-height: 1.5em;
          font-size: 0.8em;
          grid-auto-flow: row;
          padding: 3rem 0;
          margin-top: -2rem;
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

        address {
          font-style: normal;
        }

        .logo {
          width: 50px;
        }

        .footer-navigation {
          align-self: start;
          display: grid;
        }

        @media ${minWidth(breakpoint.l)} {
          .footer {
            grid-template-columns: 50px auto auto 1fr auto;
            align-items: start;
            grid-gap: 5em;
            padding: 5rem 0 4rem;
          }

          .logo {
            margin-top: 0.4em;
          }

          .scial-icons {
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
