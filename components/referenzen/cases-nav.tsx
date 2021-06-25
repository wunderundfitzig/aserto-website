import React, { FunctionComponent } from 'react'
import Image from 'next/image'
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
    <nav>
      <ul className='case-nav'>
        {props.cases.map((singleCase) => (
          <li
            key={singleCase.id}
            className={
              singleCase.id === props.activeCaseId ? 'active' : undefined
            }
          >
            <div className='client-logo'>
              <Image {...singleCase.logo} />
            </div>
            <span className='client-name'>{singleCase.client}</span>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .case-nav {
          background-color: ${colors.categoryColors.referenzen};
          height: 100vh;
          overflow-y: auto;
          position: sticky;
          top: 0;
        }

        ul {
          list-style: none;
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
      `}</style>
    </nav>
  )
}

export default CasesNav
