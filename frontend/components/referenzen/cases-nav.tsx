import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as colors from 'lib/colors'
import { breakpoint, minWidth } from 'lib/breakpoints'
import { ImageType } from 'lib/types'
import { imageLoader } from 'lib/image-loader'

type Props = {
  cases: {
    id: string
    client: string
    clientShortName?: string
    logo: ImageType
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
            <Link replace href={`#${caseArticle.id}`} className='client-link'>
              <div className='client-logo'>
                <Image
                  loader={imageLoader}
                  {...caseArticle.logo}
                  alt={`${caseArticle.client} Logo`}
                />
              </div>
              <span className='client-name'>
                {caseArticle.clientShortName ?? caseArticle.client}
              </span>
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

        ul :global(.client-link) {
          height: 60px;
          display: grid;
          align-items: center;
          justify-content: center;
          padding: 0.8em;
          transition: background-color, color, font-weight;
          transition-delay: 0.1s;
          transition-duration: 0.2s;
          background-color: ${colors.categoryColors.referenzen};
        }

        .active :global(.client-link) {
          background-color: white;
        }

        .client-logo {
          display: grid;
          filter: invert(1) brightness(2);
          transition: filter;
          transition-delay: 0.1s;
          transition-duration: 0s;
          min-width: 45px;
        }

        .client-logo :global(img) {
          width: 100%;
          height: auto;
        }

        .active .client-logo {
          filter: none;
        }

        .client-name {
          display: none;
        }

        @media ${minWidth(breakpoint.s)} {
          ul :global(.client-link) {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding-right: 1.5em;
            color: white;
          }

          .client-name {
            display: block;
            text-align: right;
            text-transform: uppercase;
            font-size: 0.9em;
          }

          .active :global(.client-link) {
            color: ${colors.categoryColors.referenzen};
            font-weight: bold;
          }

          .client-logo {
            display: none;
          }
        }

        @media ${minWidth(breakpoint.m)} {
          .case-nav {
            display: grid;
            grid-template-areas: 'nav';
            justify-content: end;
          }
          .case-nav::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            right: 0;
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

          ul :global(.client-link) {
            padding: 1em 2em 1em 3em;
          }
        }
      `}</style>
    </nav>
  )
}

export default CasesNav
