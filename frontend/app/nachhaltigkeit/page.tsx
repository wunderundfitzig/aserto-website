import { queryPageData } from 'lib/kirby-query'

import { Contact, ImageType } from 'lib/types'
import Metadata from 'components/metadata'
import Footer from 'components/footer'
import NachhaltigkeitHeader from 'components/nachhaltigkeit/nachhaltigkeit-header'
import Berichte from 'components/nachhaltigkeit/berichte'
import NachhaltigkeitBody from 'components/nachhaltigkeit/nachhaltigkeit-body'
import Kontakte from 'components/nachhaltigkeit/kontakte'

type PageData = {
  title: string
  body: string
  berichteTitle: string
  berichteDescription: string
  image: ImageType
  berichte: { url: string; fileName: string; label?: string }[]
  kontakte: { contact: Contact; image: ImageType }[]
}

export default async function Nachhaltigkeit() {
  const result = await queryPageData<PageData>({
    query: 'page("nachhaltigkeitsbericht")',
    select: {
      title: true,
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
      kontakte: {
        query: 'page.kontakte.toPages',
        select: {
          contact: {
            query: 'page',
            select: {
              name: 'page.title',
              mail: 'page.email',
              phone: true,
            },
          },
          image: {
            query: 'page.image',
            select: { src: 'file.id', width: true, height: true },
          },
        },
      },
    },
  })
  return (
    <>
      <article style={{ gridArea: 'main' }}>
        <Metadata pageMeta={result.pageData} slug='/nachhaltigkeit' />
        <main>
          <NachhaltigkeitHeader title={result.pageData.title} />
          <NachhaltigkeitBody
            image={result.pageData.image}
            html={result.pageData.body}
          />
          <Berichte
            title={result.pageData.berichteTitle}
            description={result.pageData.berichteDescription}
            pdfs={result.pageData.berichte}
          />
          <Kontakte contacts={result.pageData.kontakte} />
        </main>
      </article>
      <Footer gridArea='footer' siteInfo={result.siteInfo} />
    </>
  )
}
