import { queryPageData } from 'lib/kirby-query'

import Metadata from 'components/metadata'
import Frontpage from './_frontpage'

export default async function Index() {
  const result = await queryPageData({ query: 'page("index")' })

  return (
    <>
      <Metadata pageMeta={result.pageData} slug='/' />
      <Frontpage siteInfo={result.siteInfo} />
    </>
  )
}
