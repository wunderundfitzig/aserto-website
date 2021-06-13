import { breakpoint, minWidth } from 'lib/breakpoints'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import AsertoLogo from './aserto-logo'
import SocialLinks from './social-links'

type Props = {
  gridArea: string
}
const Footer: FunctionComponent<Props> = (props) => {
  return (
    <footer className='footer'>
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
        <SocialLinks />
      </address>
      <nav title='footer navigation' className='footer-navigation'>
        <Link href='/impressum'>
          <a>Impressum</a>
        </Link>
        <Link href='/privacy'>
          <a>Datenschutz</a>
        </Link>
      </nav>
      <style jsx>{`
        .footer {
          grid-area: ${props.gridArea};
          display: grid;
          grid-gap: 2em;
          line-height: 1.5em;
          font-size: 0.8em;
          grid-auto-flow: row;
          padding: 3em 0;
        }

        .logo {
          width: 50px;
        }

        .footer-navigation {
          align-self: start;
          display: grid;
        }

        @media ${minWidth(breakpoint.xl)} {
          .footer {
            grid-template-columns: 50px auto auto 1fr auto;
            align-items: start;
            grid-gap: 5em;
            padding: 4em 0 4em;
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
