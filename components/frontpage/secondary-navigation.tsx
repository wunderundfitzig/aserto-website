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
          <Link href='/kontakt'>
            <a>Kontakt / Impressum</a>
          </Link>
        </li>
        <li>
          <Link href='/datenschutz'>
            <a>Datenschutz</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        nav {
          grid-area: ${props.gridArea ? props.gridArea : 'none'};
          display: grid;
          justify-content: flex-end;
          align-items: flex-end;
          padding-bottom: 1.5em;
        }

        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          text-align: right;
          font-size: 0.8em;
        }

        li {
          white-space: nowrap;
        }
      `}</style>
    </nav>
  )
}

export default SecondaryNavigation
