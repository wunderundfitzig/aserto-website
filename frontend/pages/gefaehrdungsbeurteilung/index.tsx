import { GetStaticProps, NextPage } from 'next'
import { PageProps, queryPageData, SiteQueryResult } from 'lib/kirby-query'
import Metadata from 'components/metadata'
import Footer from 'components/footer'
import GefaehrdungsbeurteilungHeader from 'components/gefaehrdungsbeurteilung/gefaehrdungsbeurteilung-header'
import WarumSieWichtigIst from 'components/gefaehrdungsbeurteilung/warum-sie-wichtig-ist'
import GrowingDot from 'components/gefaehrdungsbeurteilung/growing-dot'
import AufDenPunkt from 'components/gefaehrdungsbeurteilung/auf-den-punkt'
import GefahrdungsbeurteilungContact from 'components/gefaehrdungsbeurteilung/gefaehrdungsbeurteilung-contact'

type LeistungenPageProps = Record<string, never>
const LeistungenPage: NextPage<PageProps<LeistungenPageProps>> = (props) => {
  return (
    <>
      <article style={{ gridArea: props.gridArea }}>
        <Metadata pageMeta={props.pageData} slug='/leistungen' />
        <main>
          <GefaehrdungsbeurteilungHeader />
          <WarumSieWichtigIst />
          <GrowingDot />
          <AufDenPunkt />
        </main>
        <GefahrdungsbeurteilungContact />
      </article>
      <Footer gridArea='footer' siteInfo={props.siteInfo} />
    </>
  )
}

export const getStaticProps: GetStaticProps<
  SiteQueryResult<LeistungenPageProps>
> = async () => {
  const result = await queryPageData<LeistungenPageProps>({
    query: 'page("leistungen")',
  })
  return { props: result }
}

export default LeistungenPage
