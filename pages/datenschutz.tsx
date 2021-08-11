import { NextPage } from 'next'
import { PageProps } from 'pages/_app'
import DatenschutzHeader from 'components/datenschutz/datenschutz-header'
import DatenschutzText from 'components/datenschutz/datenschutz-text'

const Kontakt: NextPage<PageProps> = (props) => {
  return (
    <article style={{ gridArea: props.gridArea }}>
      <main>
        <DatenschutzHeader />
        <DatenschutzText />
      </main>
    </article>
  )
}

export default Kontakt
