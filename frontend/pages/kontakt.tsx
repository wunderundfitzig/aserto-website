import { GetStaticProps, NextPage } from 'next'
import { PageProps, queryPageData, SiteQueryResult } from 'lib/kirby-query'
import KontaktHeader from 'components/kontakt/kontakt-header'
import Impressum from 'components/kontakt/impressum'
import Ansprechpartner from 'components/kontakt/ansprechpartner'
import Metadata from 'components/metadata'
import Footer from 'components/footer'

type KontaktPageProps = Record<string, never>
const Kontakt: NextPage<PageProps<KontaktPageProps>> = (props) => {
  return (
    <>
      <article style={{ gridArea: props.gridArea }}>
        <Metadata
          title={props.pageData.seotitle}
          description={props.pageData.seodescription}
          slug='/kontakt'
        />
        <main>
          <KontaktHeader />
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
