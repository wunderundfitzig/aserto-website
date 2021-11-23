import { GetStaticProps, NextPage } from 'next'
import { PageProps, queryPageData, SiteQueryResult } from 'lib/kirby-query'
import PurposeHeader from 'components/purpose/purpose-header'
import MenschenUndDaten from 'components/purpose/menschen-und-daten'
import Quotes from 'components/purpose/quotes'
import LeftRightScroller from 'components/purpose/left-right-scroller'
import Metadata from 'components/metadata'
import SloganText from 'components/purpose/slogan-text'
import SecondSloganText from 'components/purpose/second-slogan-text'
import Footer from 'components/footer'

type PurposePageProps = Record<string, never>
const PurposePage: NextPage<PageProps<PurposePageProps>> = (props) => {
  return (
    <>
      <article style={{ gridArea: props.gridArea }}>
        <Metadata pageMeta={props.pageData} slug='/purpose' />
        <main>
          <PurposeHeader />
          <Quotes />
          <MenschenUndDaten />
          <SloganText />
          <LeftRightScroller />
          <SecondSloganText />
        </main>
      </article>
      <Footer gridArea='footer' siteInfo={props.siteInfo} />
    </>
  )
}

export const getStaticProps: GetStaticProps<
  SiteQueryResult<PurposePageProps>
> = async () => {
  const result = await queryPageData<PurposePageProps>({
    query: 'page("datenschutz")',
  })
  return { props: result }
}

export default PurposePage
