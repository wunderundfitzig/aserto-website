import ReferenzenHeader from 'components/referenzen/referenzen-header'
import { NextPage } from 'next'
import { PageProps } from 'pages/_app'

const LeistungenPage: NextPage<PageProps> = (props) => {
  return (
    <article style={{ gridArea: props.gridArea }}>
      <main>
        <ReferenzenHeader />
      </main>
    </article>
  )
}

export default LeistungenPage
