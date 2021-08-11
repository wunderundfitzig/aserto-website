import { NextPage } from 'next'
import { PageProps } from './_app'
import PurposeHeader from 'components/purpose/purpose-header'
import MenschenUndDaten from 'components/purpose/menschen-und-daten'

const PurposePage: NextPage<PageProps> = (props) => {
  return (
    <article style={{ gridArea: props.gridArea }}>
      <main>
        <PurposeHeader />
        <MenschenUndDaten />
      </main>
    </article>
  )
}

export default PurposePage
