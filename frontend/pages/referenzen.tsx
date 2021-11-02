import { GetStaticProps, NextPage } from 'next'
import { PageProps, queryPageData, SiteQueryResult } from 'lib/kirby-query'
import Cases from 'components/referenzen/cases'
import ClientQuotes from 'components/referenzen/client-quotes'
import LogoList from 'components/referenzen/logo-list'
import ReferenzenHeader from 'components/referenzen/referenzen-header'
import Metadata from 'components/metadata'
import ReferenzenContact from 'components/referenzen/referenzen-contact'
import Footer from 'components/footer'

type ReferenzenPageProps = Record<string, never>
const ReferenzenPage: NextPage<PageProps<ReferenzenPageProps>> = (props) => {
  return (
    <>
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
        <ReferenzenContact />
      </article>
      <Footer gridArea='footer' siteInfo={props.siteInfo} />
    </>
  )
}

export const getStaticProps: GetStaticProps<
  SiteQueryResult<ReferenzenPageProps>
> = async () => {
  const result = await queryPageData<ReferenzenPageProps>({
    query: 'page("datenschutz")',
  })
  return { props: result }
}

export default ReferenzenPage
