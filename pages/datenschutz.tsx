import { NextPage } from 'next'
import { PageProps } from 'pages/_app'
import DatenschutzHeader from 'components/datenschutz/datenschutz-header'

const Kontakt: NextPage<PageProps> = (props) => {
  return (
    <article style={{ gridArea: props.gridArea }}>
      <main>
        <DatenschutzHeader />
      </main>
    </article>
  )
}

export default Kontakt
