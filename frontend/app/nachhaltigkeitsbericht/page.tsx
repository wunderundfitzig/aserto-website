import { queryPageData } from 'lib/kirby-query'
import { ImageType } from 'lib/types'

import Footer from 'components/footer'
import Metadata from 'components/metadata'
import Berichte from 'components/nachhaltigkeitsbericht/berichte'
import NachhaltigkeitsberichtBody from 'components/nachhaltigkeitsbericht/nachhaltigkeitsbericht-body'
import NachhaltigkeitsberichtHeader from 'components/nachhaltigkeitsbericht/nachhaltigkeitsbericht-header'

type PageData = {
  body: string
  berichteTitle: string
  berichteDescription: string
  image: ImageType
  berichte: { url: string; fileName: string; label?: string }[]
}
export default async function Nachhaltigkeitsbericht() {
  const result = await queryPageData<PageData>({
    query: 'page("nachhaltigkeitsbericht")',
    select: {
      body: 'page.body.toBlocks.toHtml',
      berichteTitle: true,
      berichteDescription: true,
      image: {
        select: {
          src: 'file.id',
          width: true,
          height: true,
        },
      },
      berichte: {
        query: 'page.files.filterBy("template", "pdf").sortBy("sort")',
        select: {
          url: 'file.url',
          fileName: 'file.name',
          label: 'file.label',
        },
      },
    },
  })

  return (
    <>
      <article style={{ gridArea: 'main' }}>
        <Metadata pageMeta={result.pageData} slug='/nachhaltigkeitsbericht' />
        <main>
          <NachhaltigkeitsberichtHeader />
          <NachhaltigkeitsberichtBody
            image={result.pageData.image}
            html={result.pageData.body}
          />
          <Berichte
            title={result.pageData.berichteTitle}
            description={result.pageData.berichteDescription}
            pdfs={result.pageData.berichte}
          />
        </main>
      </article>
      <Footer gridArea='footer' siteInfo={result.siteInfo} />
    </>
  )
}
