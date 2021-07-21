import { NextPage } from 'next'
import { PageProps } from './_app'
import DatenUndMenschen from 'components/purpose/daten-menschen'

const PurposePage: NextPage<PageProps> = (props) => {
  return (
    <article style={{ gridArea: props.gridArea }}>
      <main>
        <DatenUndMenschen />
      </main>
    </article>
  )
}

export default PurposePage
