import { NextPage } from 'next'
import { PageProps } from 'pages/_app'
import KontaktHeader from 'components/kontakt/kontakt-header'
import Anfahrt from 'components/kontakt/anfahrt'
import Impressum from 'components/kontakt/impressum'
import Ansprechpartner from 'components/kontakt/ansprechpartner'

const Kontakt: NextPage<PageProps> = (props) => {
  return (
    <article style={{ gridArea: props.gridArea }}>
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
