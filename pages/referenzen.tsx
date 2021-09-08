import Cases from 'components/referenzen/cases'
import ClientQuotes from 'components/referenzen/client-quotes'
import LogoList from 'components/referenzen/logo-list'
import ReferenzenHeader from 'components/referenzen/referenzen-header'
import { NextPage } from 'next'
import { PageProps } from 'pages/_app'
import Metadata from 'components/metadata'

const LeistungenPage: NextPage<PageProps> = (props) => {
  return (
    <article style={{ gridArea: props.gridArea }}>
      <Metadata
        title='aserto | Referenzen'
        description='Für Akteure aus Wirtschaft und Wissenschaft und Institutionen verschaffen Durchblick, bestimmten die Richtung, bauen Hürden ab oder gestalten Transformationen.'
        slug='/referenzen'
      />
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
