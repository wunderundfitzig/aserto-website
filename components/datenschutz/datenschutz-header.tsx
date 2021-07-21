import HeaderBackground from 'components/header-background'
import { FunctionComponent } from 'react'
import * as colors from 'lib/colors'
import { CheckmarkLine } from 'components/curves'

const DatenschutzHeader: FunctionComponent = () => {
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

export default DatenschutzHeader
