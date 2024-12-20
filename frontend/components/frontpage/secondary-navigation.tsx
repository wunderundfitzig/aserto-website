import { FunctionComponent } from 'react'
import Link from 'next/link'

type Props = {
  gridArea?: string
}
const SecondaryNavigation: FunctionComponent<Props> = (props) => {
  return (
    <nav title='footer navigation'>
      <ul>
        <li>
          <Link href='/nachhaltigkeit'>Nachhaltigkeit</Link>
        </li>
        <li>
          <Link href='/datenschutz'>Datenschutz</Link>
        </li>
        <li>
          <Link href='/kontakt'>Kontakt / Impressum</Link>
        </li>
      </ul>
      <style jsx>{`
        nav {
          grid-area: ${props.gridArea ? props.gridArea : 'unset'};
          display: grid;
          margin-bottom: 1em;
          z-index: 1;
        }

        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          font-size: 0.8em;
        }

        li {
          white-space: nowrap;
          margin-bottom: 0.5em;
        }
      `}</style>
    </nav>
  )
}

export default SecondaryNavigation
