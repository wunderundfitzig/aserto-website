import { NextPage } from 'next'
import { PageProps } from 'pages/_app'
import KontaktHeader from 'components/kontakt/kontakt-header'

const Kontakt: NextPage<PageProps> = (props) => {
  return (
    <article style={{ gridArea: props.gridArea }}>
      <main>
        <KontaktHeader />
      </main>
    </article>
  )
}

export default Kontakt
