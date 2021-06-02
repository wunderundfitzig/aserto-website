import Link from 'next/link'
import { FunctionComponent } from 'react'
import AsertoLogo from './aserto-logo'

type Props = {
  gridArea: string
}
const Footer: FunctionComponent<Props> = (props) => {
  return (
    <footer className='footer'>
      <AsertoLogo />
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
      <div className='scial-icons'></div>
      <nav title='footer navigation' className='footer-navigation'>
        <Link href='/impressum'>
          <a>Impressum</a>
        </Link>
        <Link href='/privacy'>
          <a>Privacy Policy</a>
        </Link>
      </nav>
      <style jsx>{`
        .footer {
          grid-area: ${props.gridArea};
        }
      `}</style>
    </footer>
  )
}

export default Footer
