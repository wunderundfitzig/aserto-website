import HeaderBackground from 'components/header-background'
import { FunctionComponent } from 'react'
import * as colors from 'lib/colors'
import Slogan from 'components/slogan'
import { CheckmarkLine } from 'components/curves'

const KontaktHeader: FunctionComponent = () => {
  return (
    <header className='kontakt-header'>
      <HeaderBackground
        color={colors.backgroundGrey}
        opacity={0.5}
        gridArea='header'
      />
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
                Kriegerstr. 44 30161Hannover
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
          position: absolute;
          bottom: 0;
          grid-area: header;
        }

        .inner {
          grid-area: header;
          padding-bottom: 6em;
        }
      `}</style>
    </header>
  )
}

export default KontaktHeader
