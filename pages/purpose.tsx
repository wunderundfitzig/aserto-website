import { NextPage } from 'next'
import { PageProps } from './_app'
import DatenUndMenschen from 'components/purpose/daten-menschen'

const PurposePage: NextPage<PageProps> = (props) => {
  return (
    <main style={{ gridArea: props.gridArea }}>
      <DatenUndMenschen />
    </main>
  )
}

export default PurposePage
