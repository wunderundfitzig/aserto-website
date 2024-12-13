import { queryPageData } from 'lib/kirby-query'

import Footer from 'components/footer'
import Metadata from 'components/metadata'
import LeftRightScroller from 'components/purpose/left-right-scroller'
import MenschenUndDaten from 'components/purpose/menschen-und-daten'
import PurposeHeader from 'components/purpose/purpose-header'
import Quotes from 'components/purpose/quotes'
import SecondSloganText from 'components/purpose/second-slogan-text'
import SloganText from 'components/purpose/slogan-text'

export default async function Purpose() {
  const result = await queryPageData({ query: 'page("purpose")' })
  return (
    <>
      <article style={{ gridArea: 'main' }}>
        <Metadata pageMeta={result.pageData} slug='/purpose' />
        <main>
          <PurposeHeader />
          <Quotes />
          <MenschenUndDaten />
          <SloganText />
          <LeftRightScroller />
          <SecondSloganText />
        </main>
      </article>
      <Footer gridArea='footer' siteInfo={result.siteInfo} />
    </>
  )
}
