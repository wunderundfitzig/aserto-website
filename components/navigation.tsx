import { FunctionComponent } from 'react'
import Link from 'next/link'
import { breakpoint, minWidth } from 'lib/breakpoints'

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
  return (
    <nav className='nav'>
      <ul>
        {navItems.map((navItem, idx) => (
          <div key={idx} className='group'>
            <li key={navItem.slug}>
              <Link href={navItem.slug}>
                <a>{navItem.label}</a>
              </Link>
            </li>
          </div>
        ))}
      </ul>
      <style jsx>{`
        .nav {
          grid-area: ${props.gridArea};
          z-index: 2;
          color: ${onFrontpage ? 'white' : 'inherit'};
          display: none;
        }

        ul {
          list-style: none;
          text-align: right;
          padding: 0;
          margin: 0;
        }

        li {
          margin-bottom: 1em;
        }

        @media ${minWidth(breakpoint.xl)} {
          .nav {
            display: block;
            transform: ${onFrontpage
              ? 'translateX(calc((20vw + 280px) * -1)) translateY(calc(50vh - 240px))'
              : 'none'};
            width: ${onFrontpage ? '150px' : '100%'};
            font-size: ${onFrontpage ? '1.4em' : '1em'};
            align-self: start;
            transition: transform 0.25s ease-in, font-size 0.1s ease-in;
          }
        }
      `}</style>
    </nav>
  )
}

export default Navigation
