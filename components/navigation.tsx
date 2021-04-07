import { FunctionComponent } from 'react'
import Link from 'next/link'

const navItems = [
  [
    { label: 'Purpose', slug: 'purpose' },
    { label: 'Team', slug: 'team' },
  ],
  [
    { label: 'Leistungen', slug: 'leistungen' },
    { label: 'Referenzen', slug: 'referenzen' },
  ],
  [
    { label: 'Jobs', slug: 'jobs' },
    { label: 'Kontakt', slug: 'kontakt' },
  ],
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
        {navItems.map((group, idx) => (
          <div key={idx} className='group'>
            {group.map((navItem) => (
              <li key={navItem.slug}>
                <Link href={navItem.slug}>
                  <a>{navItem.label}</a>
                </Link>
              </li>
            ))}
          </div>
        ))}
      </ul>
      <style jsx>{`
        .nav {
          grid-area: ${props.gridArea};
          transform: ${onFrontpage
            ? 'translateX(calc((20vw + 280px) * -1)) translateY(calc(50vh - 240px))'
            : 'none'};
          z-index: 2;
          width: ${onFrontpage ? '150px' : '100%'};
          font-size: ${onFrontpage ? '1.4em' : '1em'};
          align-self: start;
          height: auto;
        }

        ul {
          list-style: none;
          text-align: right;
          padding: 0;
          margin: 0;
        }

        .group {
          margin: 1.3em 0;
        }

        li {
          margin: 0.5em 0;
        }

        a {
          color: ${onFrontpage ? 'white' : 'inherit'};
        }
      `}</style>
    </nav>
  )
}

export default Navigation
