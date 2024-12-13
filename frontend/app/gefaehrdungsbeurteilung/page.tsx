import { queryPageData } from 'lib/kirby-query'

import Footer from 'components/footer'
import AufDenPunkt from 'components/gefaehrdungsbeurteilung/auf-den-punkt'
import GefahrdungsbeurteilungContact from 'components/gefaehrdungsbeurteilung/gefaehrdungsbeurteilung-contact'
import GefaehrdungsbeurteilungHeader from 'components/gefaehrdungsbeurteilung/gefaehrdungsbeurteilung-header'
import GrowingDot from 'components/gefaehrdungsbeurteilung/growing-dot'
import WarumSieWichtigIst from 'components/gefaehrdungsbeurteilung/warum-sie-wichtig-ist'
import Metadata from 'components/metadata'

export default async function Gefaehrdungsbeurteilung() {
  const result = await queryPageData({ query: 'page("leistungen")' })
  return (
    <>
      <article style={{ gridArea: 'main' }}>
        <Metadata pageMeta={result.pageData} slug='/leistungen' />
        <main>
          <GefaehrdungsbeurteilungHeader />
          <WarumSieWichtigIst />
          <GrowingDot />
          <AufDenPunkt />
        </main>
        <GefahrdungsbeurteilungContact />
      </article>
      <Footer gridArea='footer' siteInfo={result.siteInfo} />
    </>
  )
}
