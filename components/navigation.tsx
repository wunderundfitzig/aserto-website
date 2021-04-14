import { FunctionComponent, useState } from 'react'
import Link from 'next/link'
import { breakpoint, minWidth } from 'lib/breakpoints'
import NavigationButton from 'components/navigation-button'
import { lightBlue } from 'lib/colors'

const navItems = [
  { label: 'Purpose', slug: '/purpose' },
  { label: 'Team', slug: '/team' },
  { label: 'Leistungen', slug: '/leistungen' },
  { label: 'Referenzen', slug: '/referenzen' },
  { label: 'Jobs', slug: '/jobs' },
]

type Props = {
  onFrontpage?: boolean
  gridArea?: string
}
const Navigation: FunctionComponent<Props> = (props) => {
  const { onFrontpage = false } = props
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={`nav ${isOpen && 'open'} ${onFrontpage && 'on-frontpage'}`}>
      {!onFrontpage && (
        <NavigationButton
          navigationIsOpen={isOpen}
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        />
      )}
      <ul>
        {navItems.map((navItem) => (
          <li key={navItem.slug}>
            <Link href={navItem.slug}>
              <a>{navItem.label}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .nav {
          grid-area: ${props.gridArea};
          z-index: 1;
          padding-left: 1.5em;
        }

        .nav.on-frontpage {
          grid-area: 3 / 1 / 3 / 3;
          display: flex;
          justify-content: end;
          align-items: center;
          color: white;
          padding-right: 1em;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          text-align: right;
          display: ${onFrontpage ? 'block' : 'none'};
        }

        .nav.open ul {
          position: fixed;
          display: flex;
          flex-direction: column;
          justify-content: center;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-top: 6em solid white;
          border-right: 3em solid white;
          padding-right: 1.6em;
          padding-bottom: 1em;
          background-color: ${lightBlue};
          overflow: auto;
          color: black;
        }

        li {
          margin-bottom: 1.5em;
          font-size: 1.1em;
        }

        .nav.on-frontpage li {
          margin-bottom: 1em;
        }

        @media ${minWidth(breakpoint.xl)} {
          .nav {
            grid-area: ${props.gridArea};
            width: 100%;
            font-size: 1em;
            align-self: start;
            transition: transform 0.25s ease-in, font-size 0.1s ease-in;
            padding: 0;
          }

          .nav.on-frontpage {
            grid-area: ${props.gridArea};
            transform: translateX(calc((20vw + 260px) * -1))
              translateY(calc(50vh - 260px));
            width: 150px;
            font-size: 1.4em;
          }

          ul {
            display: block;
          }
        }
      `}</style>
    </nav>
  )
}

export default Navigation
