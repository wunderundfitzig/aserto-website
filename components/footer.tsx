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
      <div className='adress'>
        aserto GmnH & Co. KG
        <br />
        Kriegerstr. 44 <br />
        30161 Hannover
      </div>
      <div className='contact'>
        <a href='mailto:job@aserto.de'>job@aserto.de</a>
        <br />
        <a href='info:job@aserto.de'>info@aserto.de</a>
        <br />
        0511 515678 0
      </div>
      <div className='scial-icons'>
        <SocialLinks />
      </div>
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
          grid-template-columns: 50px auto auto 1fr auto;
          align-items: start;
          grid-gap: 5em;
          padding: 6em 0 4em;
          line-height: 1.5em;
          font-size: 0.8em;
        }

        .logo {
          margin-top: 0.4em;
        }

        .scial-icons {
          align-self: center;
          justify-self: center;
        }

        .footer-navigation {
          align-self: start;
          display: grid;
          text-align: right;
        }
      `}</style>
    </footer>
  )
}

export default Footer
