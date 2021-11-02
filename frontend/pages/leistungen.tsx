import { GetStaticProps, NextPage } from 'next'
import { PageProps, queryPageData, SiteQueryResult } from 'lib/kirby-query'
import GrowingDot from 'components/leistungen/growing-dot'
import WasUnsAusmacht from 'components/leistungen/was-uns-ausmacht'
import LeistungenHeader from 'components/leistungen/leistungen-header'
import AufDenPunkt from 'components/leistungen/auf-den-punkt'
import LeistungenContact from 'components/leistungen/leistungen-contact'
import Metadata from 'components/metadata'
import Footer from 'components/footer'

type LeistungenPageProps = Record<string, never>
const LeistungenPage: NextPage<PageProps<LeistungenPageProps>> = (props) => {
  return (
    <>
      <article style={{ gridArea: props.gridArea }}>
        <Metadata pageMeta={props.pageData} slug='/leistungen' />
        <main>
          <LeistungenHeader />
          <WasUnsAusmacht />
          <GrowingDot />
          <AufDenPunkt />
        </main>
        <LeistungenContact />
      </article>
      <Footer gridArea='footer' siteInfo={props.siteInfo} />
    </>
  )
}

export const getStaticProps: GetStaticProps<
  SiteQueryResult<LeistungenPageProps>
> = async () => {
  const result = await queryPageData<LeistungenPageProps>({
    query: 'page("datenschutz")',
  })
  return { props: result }
}

export default LeistungenPage
