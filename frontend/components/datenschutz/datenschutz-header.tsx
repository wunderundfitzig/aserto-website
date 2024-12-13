'use client'

import HeaderBackground from 'components/header-background'
import { FunctionComponent } from 'react'
import * as colors from 'lib/colors'
import { breakpoint, minWidth } from 'lib/breakpoints'
import { CheckmarkLine } from 'components/curves'

const DatenschutzHeader: FunctionComponent = () => {
  return (
    <header className='kontakt-header'>
      <HeaderBackground color={colors.backgroundGrey} opacity={0.5} />
      <div className='line'>
        <CheckmarkLine color={colors.grey} />
      </div>
      <div className='inner'>
        <h1>Datenschutz</h1>
      </div>

      <style jsx>{`
        .kontakt-header {
          position: relative;
          display: grid;
          grid-template-areas: 'header';
          min-height: 400px;
        }

        .line {
          display: none;
        }

        .inner {
          grid-area: header;
          padding-bottom: 6em;
        }

        @media ${minWidth(breakpoint.m)} {
          .line {
            display: block;
            position: absolute;
            bottom: 0;
            right: 0;
            width: 100%;
            z-index: -1;
          }
        }
      `}</style>
    </header>
  )
}

export default DatenschutzHeader
