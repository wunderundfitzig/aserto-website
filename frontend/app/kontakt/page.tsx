import Footer from 'components/footer'
import Anfahrt from 'components/kontakt/anfahrt'
import Ansprechpartner from 'components/kontakt/ansprechpartner'
import Impressum from 'components/kontakt/impressum'
import KontaktHeader from 'components/kontakt/kontakt-header'
import Metadata from 'components/metadata'
import { queryPageData } from 'lib/kirby-query'
import { Contact, ImageType } from 'lib/types'

type PageData = {
  jobsContact: {
    contact: Contact
    image: ImageType
  }
  leadsContacts: {
    contact: Contact
    image: ImageType
  }[]
  imprint: string
}

export default async function Kontakt() {
  const result = await queryPageData<PageData>({
    query: 'page("kontakt")',
    select: {
      jobsContact: {
        query: 'page.jobsContact.toPage',
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
      leadsContacts: {
        query: 'page.leadsContacts.toPages',
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
      imprint: 'page.imprint.toBlocks.toHtml',
    },
  })

  return (
    <>
      <article style={{ gridArea: 'main' }}>
        <Metadata pageMeta={result.pageData} slug='/kontakt' />
        <main>
          <KontaktHeader />
          <Anfahrt mapsLink={result.siteInfo.mapsUrl} />
          <Ansprechpartner {...result.pageData} />
          <Impressum html={result.pageData.imprint} />
        </main>
      </article>
      <Footer gridArea='footer' siteInfo={result.siteInfo} />
    </>
  )
}
