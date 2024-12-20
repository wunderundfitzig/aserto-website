import { GetStaticProps, NextPage } from 'next'
import { PageProps, queryPageData, SiteQueryResult } from 'lib/kirby-query'

import { Contact, ImageType } from 'lib/types'
import Metadata from 'components/metadata'
import Footer from 'components/footer'
import NachhaltigkeitHeader from 'components/nachhaltigkeit/nachhaltigkeit-header'
import Berichte from 'components/nachhaltigkeit/berichte'
import NachhaltigkeitBody from 'components/nachhaltigkeit/nachhaltigkeit-body'
import Kontakte from 'components/nachhaltigkeit/kontakte'

type NachhaltigkeitPageProps = {
  title: string
  body: string
  berichteTitle: string
  berichteDescription: string
  image: ImageType
  berichte: { url: string; fileName: string; label?: string }[]
  kontakte: { contact: Contact; image: ImageType }[]
}
const Nachhaltigkeit: NextPage<PageProps<NachhaltigkeitPageProps>> = (
  props,
) => {
  return (
    <>
      <article style={{ gridArea: props.gridArea }}>
        <Metadata pageMeta={props.pageData} slug='/nachhaltigkeit' />
        <main>
          <NachhaltigkeitHeader title={props.pageData.title} />
          <NachhaltigkeitBody
            image={props.pageData.image}
            html={props.pageData.body}
          />
          <Berichte
            title={props.pageData.berichteTitle}
            description={props.pageData.berichteDescription}
            pdfs={props.pageData.berichte}
          />
          <Kontakte contacts={props.pageData.kontakte} />
        </main>
      </article>
      <Footer gridArea='footer' siteInfo={props.siteInfo} />
    </>
  )
}

export const getStaticProps: GetStaticProps<
  SiteQueryResult<NachhaltigkeitPageProps>
> = async () => {
  const result = await queryPageData<NachhaltigkeitPageProps>({
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
  return { props: result }
}

export default Nachhaltigkeit
