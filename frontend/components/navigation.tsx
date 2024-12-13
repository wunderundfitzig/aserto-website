import { FunctionComponent, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { breakpoint, minWidth } from 'lib/breakpoints'
import { categoryColors } from 'lib/colors'

import NavigationButton from 'components/navigation-button'

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
  const pathname = usePathname()
  const rootPath = pathname?.split('/').slice(1)[0] ?? ''
  const highlightColor = (categoryColors as Record<string, string>)[rootPath]

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <nav className={`nav ${isOpen && 'open'} ${onFrontpage && 'on-frontpage'}`}>
      {!onFrontpage && (
        <NavigationButton
          navigationIsOpen={isOpen}
          onClick={() => {
            if (!isOpen) {
              window.scroll(0, 0)
            }
            setTimeout(() => {
              setIsOpen((isOpen) => !isOpen)
            }, 300)
          }}
        />
      )}
      <ul>
        {navItems.map((navItem) => {
          return (
            <li
              key={navItem.slug}
              className={`/${rootPath}` === navItem.slug ? 'active' : undefined}
            >
              <Link href={navItem.slug}>{navItem.label}</Link>
            </li>
          )
        })}
      </ul>
      <style jsx>{`
        :global(body) {
          overflow: ${isOpen ? 'hidden' : 'inherit'};
        }
        .nav {
          grid-area: ${props.gridArea};
          z-index: 1000;
          position: sticky;
          top: 1.5rem;
        }

        .nav.on-frontpage {
          grid-area: 3 / 2 / 4 / 4;
          justify-self: flex-end;
          align-self: center;
          color: white;
          padding-right: 1.5rem;
          margin-bottom: 1em;
          font-size: 1.35em;
          font-weight: 200;
          z-index: 100;
          mix-blend-mode: normal;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          text-align: right;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          visibility: hidden;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }

        .nav.on-frontpage ul {
          position: static;
          width: unset;
          height: unset;
          visibility: visible;
          opacity: 1;
        }

        .nav.open ul {
          visibility: visible;
          display: grid;
          opacity: 1;

          background-color: white;
          padding-top: 5rem;
          padding-bottom: 7rem;
          padding-right: 2.3rem;
          font-size: 1.5em;
          justify-content: flex-end;
          align-content: center;
          font-weight: 200;
        }

        li {
          margin-bottom: 1em;
          font-size: 1.1em;
        }

        li.active {
          font-weight: bold;
          color: ${highlightColor};
        }

        .nav.open li.active {
          font-weight: normal;
        }

        .nav.on-frontpage li {
          margin-bottom: 0.8em;
        }

        @media ${minWidth(breakpoint.xs)} {
          .nav.on-frontpage {
            grid-area: 3 / 2 / 5 / 3;
          }
        }

        @media ${minWidth(breakpoint.l)} {
          .nav {
            grid-area: ${props.gridArea};
            z-index: 100;
            top: 0;
            background-color: white;
            width: calc(100% + 1.5rem);
            padding: 3rem 1.1rem 1rem 0.5rem;
            margin: -3rem -0.5rem 0;
            font-size: 1em;
            align-self: start;
          }

          .nav.on-frontpage {
            grid-area: 1 / footer / footer / 2;
            background-color: transparent;
            font-size: 1.5em;
            margin: 0;
          }

          ul {
            display: block;
            position: static;
            width: unset;
            height: unset;
            visibility: visible;
            opacity: 1;
          }
        }

        @media ${minWidth(breakpoint.xxl)} {
          .nav.on-frontpage {
            font-size: 1.5em;
          }
        }
      `}</style>
    </nav>
  )
}

export default Navigation
