import HeaderBackground from 'components/header-background'
import { FunctionComponent } from 'react'
import * as colors from 'lib/colors'
import { breakpoint, minWidth } from 'lib/breakpoints'
import Slogan from 'components/slogan'
import { CheckmarkLine } from 'components/curves'

const KontaktHeader: FunctionComponent = () => {
  return (
    <header className='kontakt-header'>
      <HeaderBackground color={colors.backgroundGrey} opacity={0.5} />
      <div className='line'>
        <CheckmarkLine color={colors.grey} />
      </div>
      <div className='inner'>
        <h1>Kontakt</h1>
        <Slogan emphasisColor={colors.grey}>
          {{
            sloagen: (
              <>
                aserto GmbH & Co. KG
                <br />
                Kriegerstr. 44
                <br />
                30161Hannover
                <br />
                Tel. 0511-515678-0
                <br />
                <a href='mailto:info@aserto.de'>info@aserto.de</a>
              </>
            ),
          }}
        </Slogan>
      </div>

      <style jsx>{`
        .kontakt-header {
          position: relative;
          display: grid;
          grid-template-areas: 'header';
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

export default KontaktHeader
