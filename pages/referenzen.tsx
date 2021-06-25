import Cases from 'components/referenzen/cases'
import ClientQuotes from 'components/referenzen/client-quotes'
import LogoList from 'components/referenzen/logo-list'
import ReferenzenHeader from 'components/referenzen/referenzen-header'
import { NextPage } from 'next'
import { PageProps } from 'pages/_app'

const LeistungenPage: NextPage<PageProps> = (props) => {
  return (
    <article style={{ gridArea: props.gridArea }}>
      <main>
        <ReferenzenHeader />
        <LogoList />
        <ClientQuotes />
        <Cases />
      </main>
    </article>
  )
}

export default LeistungenPage
