import { GetStaticProps, NextPage } from 'next'
import { PageProps, queryPageData, SiteQueryResult } from 'lib/kirby-query'
import NachhaltigkeitsberichtHeader from 'components/nachhaltigkeitsbericht/nachhaltigkeitsbericht-header'

import Metadata from 'components/metadata'
import Footer from 'components/footer'
import BlocksHtml from 'components/blocks-html'

type NachhaltigkeitsberichtPageProps = {
  body: string
  berichteTitle: string
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
          <BlocksHtml html={props.pageData.body} />
          <h2>{props.pageData.berichteTitle}</h2>
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
    query: 'page("nachhaltigkeitsbericht")',
    select: { body: 'page.body.toBlocks.toHtml', berichteTitle: true },
  })
  return { props: result }
}

export default Nachhaltigkeitsbericht
