import { GetStaticProps, NextPage } from 'next'
import { PageProps, queryPageData, SiteQueryResult } from 'lib/kirby-query'

import { ImageType } from 'lib/types'
import Metadata from 'components/metadata'
import Footer from 'components/footer'
import NachhaltigkeitsberichtHeader from 'components/nachhaltigkeitsbericht/nachhaltigkeitsbericht-header'
import Berichte from 'components/nachhaltigkeitsbericht/berichte'
import NachhaltigkeitsberichtBody from 'components/nachhaltigkeitsbericht/nachhaltigkeitsbericht-body'

type NachhaltigkeitsberichtPageProps = {
  body: string
  berichteTitle: string
  berichteDescription: string
  image: ImageType
  berichte: { url: string; fileName: string; label?: string }[]
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
          <NachhaltigkeitsberichtBody
            image={props.pageData.image}
            html={props.pageData.body}
          />
          <Berichte
            title={props.pageData.berichteTitle}
            description={props.pageData.berichteDescription}
            pdfs={props.pageData.berichte}
          />
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
  return { props: result }
}

export default Nachhaltigkeitsbericht