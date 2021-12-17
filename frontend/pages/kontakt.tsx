import { GetStaticProps, NextPage } from 'next'
import { PageProps, queryPageData, SiteQueryResult } from 'lib/kirby-query'
import { Contact, ImageType } from 'lib/types'
import KontaktHeader from 'components/kontakt/kontakt-header'
import Impressum from 'components/kontakt/impressum'
import Ansprechpartner from 'components/kontakt/ansprechpartner'
import Metadata from 'components/metadata'
import Footer from 'components/footer'
import Anfahrt from 'components/kontakt/anfahrt'

type KontaktPageProps = {
  jobsContact: {
    contact: Contact
    image: ImageType
  }
  leadsContacts: {
    contact: Contact
    image: ImageType
  }[]
}
const Kontakt: NextPage<PageProps<KontaktPageProps>> = (props) => {
  return (
    <>
      <article style={{ gridArea: props.gridArea }}>
        <Metadata pageMeta={props.pageData} slug='/kontakt' />
        <main>
          <KontaktHeader />
          <Anfahrt mapsLink={props.siteInfo.mapsUrl} />
          <Ansprechpartner {...props.pageData} />
          <Impressum />
        </main>
      </article>
      <Footer gridArea='footer' siteInfo={props.siteInfo} />
    </>
  )
}

export const getStaticProps: GetStaticProps<
  SiteQueryResult<KontaktPageProps>
> = async () => {
  const result = await queryPageData<KontaktPageProps>({
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
    },
  })
  return { props: result }
}

export default Kontakt
