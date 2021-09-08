import { NextPage } from 'next'
import { PageProps } from 'pages/_app'
import KontaktHeader from 'components/kontakt/kontakt-header'
import Anfahrt from 'components/kontakt/anfahrt'
import Impressum from 'components/kontakt/impressum'
import Ansprechpartner from 'components/kontakt/ansprechpartner'
import Metadata from 'components/metadata'

const Kontakt: NextPage<PageProps> = (props) => {
  return (
    <article style={{ gridArea: props.gridArea }}>
      <Metadata
        title='aserto | Kontakt'
        description='aserto GmbH & Co. KG | Kriegerstr. 44 30161Hannover | Tel. 0511-515678-0 | info@aserto.de'
        slug='/kontakt'
      />
      <main>
        <KontaktHeader />
        <Anfahrt />
        <Ansprechpartner />
        <Impressum />
      </main>
    </article>
  )
}

export default Kontakt
