import { GetStaticProps, NextPage } from 'next'
import { PageProps, queryPageData, SiteQueryResult } from 'lib/kirby-query'
import NachhaltigkeitsberichtHeader from 'components/nachhaltigkeitsbericht/nachhaltigkeitsbericht-header'

import Metadata from 'components/metadata'
import Footer from 'components/footer'

type NachhaltigkeitsberichtPageProps = {
  privacyPolicy: string
}
const Nachhaltigkeitsbericht: NextPage<
  PageProps<NachhaltigkeitsberichtPageProps>
> = (props) => {
  return (
    <>
      <article style={{ gridArea: props.gridArea }}>
        <Metadata pageMeta={props.pageData} slug='/nachhaltigkeitsbericht' />
        <main>
          <NachhaltigkeitsberichtHeader />
        </main>
      </article>
      <Footer gridArea='footer' siteInfo={props.siteInfo} />
    </>
  )
}

export const getStaticProps: GetStaticProps<
  SiteQueryResult<NachhaltigkeitsberichtPageProps>
> = async () => {
  const result = await queryPageData<NachhaltigkeitsberichtPageProps>({
    query: 'page("datenschutz")',
    select: { privacyPolicy: 'page.body.toBlocks.toHtml' },
  })
  return { props: result }
}

export default Nachhaltigkeitsbericht
