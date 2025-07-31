import { queryPageData } from 'lib/kirby-query'

import DatenschutzHeader from 'components/datenschutz/datenschutz-header'
import DatenschutzText from 'components/datenschutz/datenschutz-text'
import Footer from 'components/footer'
import Metadata from 'components/metadata'

type PageData = { privacyPolicy: string }

export default async function Datenschutz() {
  const result = await queryPageData<PageData>({
    query: 'page("datenschutz")',
    select: { privacyPolicy: 'page.body.toBlocks.toHtml' },
  })

  return (
    <>
      <article style={{ gridArea: 'main' }}>
        <Metadata pageMeta={result.pageData} slug='/datenschutz' />
        <main>
          <DatenschutzHeader />
          <DatenschutzText html={result.pageData.privacyPolicy} />
        </main>
      </article>
      <Footer gridArea='footer' siteInfo={result.siteInfo} />
    </>
  )
}
