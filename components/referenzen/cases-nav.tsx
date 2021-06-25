import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as colors from 'lib/colors'
import { breakpoint, minWidth } from 'lib/breakpoints'

type Props = {
  cases: {
    id: string
    client: string
    logo: { src: string; width: number; height: number }
  }[]
  activeCaseId: string
}
const CasesNav: FunctionComponent<Props> = (props) => {
  return (
    <nav className='case-nav'>
      <ul>
        {props.cases.map((caseArticle) => (
          <li
            key={caseArticle.id}
            className={
              caseArticle.id === props.activeCaseId ? 'active' : undefined
            }
          >
            <Link href={`#${caseArticle.id}`}>
              <a>
                <div className='client-logo'>
                  <Image {...caseArticle.logo} />
                </div>
                <span className='client-name'>{caseArticle.client}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .case-nav {
          background-color: ${colors.categoryColors.referenzen};
          height: 100vh;
          position: sticky;
          top: 0;
        }

        ul {
          list-style: none;
          height: 100%;
          overflow-y: auto;
          display: grid;
          align-content: center;
          padding: 2em 0;
          margin: 0;
        }

        li {
          height: 60px;
          padding: 0.8em;
        }

        li.active {
          background-color: white;
        }

        .client-name {
          display: none;
        }

        @media ${minWidth(breakpoint.s)} {
          li {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding-right: 1.5em;
          }

          .client-name {
            display: block;
            color: white;
            text-align: right;
            text-transform: uppercase;
            font-size: 0.9em;
          }

          .active .client-name {
            color: ${colors.categoryColors.referenzen};
            font-weight: bold;
          }

          .client-logo {
            display: none;
          }
        }

        @media (${minWidth(breakpoint.m)}) {
          .case-nav {
            display: grid;
            grid-template-areas: 'nav';
            justify-content: end;
          }
          .case-nav::before {
            content: '';
            grid-area: nav;
            width: 100%;
            height: 100%;
            background-color: ${colors.categoryColors.referenzen};
            transform: scaleX(10);
            transform-origin: right;
            z-index: -1;
            pointer-events: none;
          }

          ul {
            grid-area: nav;
            padding-bottom: 6em;
          }

          li {
            position: relative;
            padding: 1em 2em 1em 3em;
          }
        }
      `}</style>
    </nav>
  )
}

export default CasesNav
