import { FunctionComponent, useState } from 'react'
import Link from 'next/link'
import { breakpoint, minWidth } from 'lib/breakpoints'
import NavigationButton from 'components/navigation-button'
import { backgroundBlue, categoryColors } from 'lib/colors'
import { useRouter } from 'next/router'

const navItems = [
  { label: 'Purpose', slug: '/purpose' },
  { label: 'Team', slug: '/team' },
  { label: 'Leistungen', slug: '/leistungen' },
  { label: 'Referenzen', slug: '/referenzen' },
  { label: 'Karriere', slug: '/karriere' },
]

type Props = {
  onFrontpage?: boolean
  gridArea?: string
}
const Navigation: FunctionComponent<Props> = (props) => {
  const { onFrontpage = false } = props
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const rootPath = router.pathname.split('/').slice(1)[0]

  return (
    <nav className={`nav ${isOpen && 'open'} ${onFrontpage && 'on-frontpage'}`}>
      {!onFrontpage && (
        <NavigationButton
          navigationIsOpen={isOpen}
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        />
      )}
      <ul>
        {navItems.map((navItem) => {
          return (
            <li
              key={navItem.slug}
              className={`/${rootPath}` === navItem.slug ? 'active' : undefined}
            >
              <Link href={navItem.slug}>
                {/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
                <a
                  onClick={() => {
                    setIsOpen(false)
                  }}
                >
                  {navItem.label}
                </a>
                {/* eslint-enable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
              </Link>
            </li>
          )
        })}
      </ul>
      <style jsx>{`
        .nav {
          grid-area: ${props.gridArea};
          z-index: 10;
        }

        .nav.on-frontpage {
          grid-area: 3 / 1 / 3 / 4;
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
          background-color: ${backgroundBlue};
          overflow: auto;
          color: black;
        }

        li {
          margin-bottom: 1em;
          font-size: 1.1em;
        }

        li.active {
          font-weight: bold;
          color: ${(categoryColors as Record<string, string>)[rootPath]};
        }

        .nav.on-frontpage li {
          margin-bottom: 1em;
        }

        @media ${minWidth(breakpoint.l)} {
          .nav {
            grid-area: ${props.gridArea};
            width: 100%;
            font-size: 1em;
            align-self: start;
            transition: transform 0.25s ease-in, font-size 0.1s ease-in;
            padding: 0;
            padding-right: 10px;
          }

          .nav.on-frontpage {
            grid-area: ${props.gridArea};
            transition: none;
            transform: translateX(calc((20vw + 250px) * -1))
              translateY(calc(60vh - 300px));
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
