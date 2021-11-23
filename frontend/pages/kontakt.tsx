import { GetStaticProps, NextPage } from 'next'
import { PageProps, queryPageData, SiteQueryResult } from 'lib/kirby-query'
import KontaktHeader from 'components/kontakt/kontakt-header'
import Impressum from 'components/kontakt/impressum'
import Ansprechpartner from 'components/kontakt/ansprechpartner'
import Metadata from 'components/metadata'
import Footer from 'components/footer'
import Anfahrt from 'components/kontakt/anfahrt'

type KontaktPageProps = Record<string, never>
const Kontakt: NextPage<PageProps<KontaktPageProps>> = (props) => {
  return (
    <>
      <article style={{ gridArea: props.gridArea }}>
        <Metadata pageMeta={props.pageData} slug='/kontakt' />
        <main>
          <KontaktHeader />
          <Anfahrt mapsLink={props.siteInfo.mapsUrl} />
          <Ansprechpartner />
          <Impressum />
        </main>
      </article>
      <Footer gridArea='footer' siteInfo={props.siteInfo} />
    </>
  )
}

export const getStaticProps: GetStaticProps<
  SiteQueryResult<KontaktPageProps>
> = async () => {
  const result = await queryPageData<KontaktPageProps>({
    query: 'page("kontakt")',
  })
  return { props: result }
}

export default Kontakt
