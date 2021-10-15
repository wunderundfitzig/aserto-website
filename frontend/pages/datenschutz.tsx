import { NextPage } from 'next'
import { PageProps } from 'pages/_app'
import DatenschutzHeader from 'components/datenschutz/datenschutz-header'
import DatenschutzText from 'components/datenschutz/datenschutz-text'
import Metadata from 'components/metadata'

const Kontakt: NextPage<PageProps> = (props) => {
  return (
    <article style={{ gridArea: props.gridArea }}>
      <Metadata
        title='aserto | Datenschutz'
        description='Datenschutz hat für aserto einen hohen Stellenwert'
        slug='/datenschutz'
      />
      <main>
        <DatenschutzHeader />
        <DatenschutzText />
      </main>
    </article>
  )
}

export default Kontakt
