import { GetStaticProps, NextPage } from 'next'
import { PageProps, queryPageData, SiteQueryResult } from 'lib/kirby-query'
import { Case, Client, ClientQuote, Contact, ImageType } from 'lib/types'
import Cases from 'components/referenzen/cases'
import ClientQuotes from 'components/referenzen/client-quotes'
import LogoList from 'components/referenzen/logo-list'
import ReferenzenHeader from 'components/referenzen/referenzen-header'
import Metadata from 'components/metadata'
import ReferenzenContact from 'components/referenzen/referenzen-contact'
import Footer from 'components/footer'

type ReferenzenPageProps = {
  cases: Case[]
  clients: Client[]
  clientQuotes: ClientQuote[]
  contactImage: ImageType
  contact: Contact
}
const ReferenzenPage: NextPage<PageProps<ReferenzenPageProps>> = (props) => {
  return (
    <>
      <article style={{ gridArea: props.gridArea }}>
        <Metadata pageMeta={props.pageData} slug='/referenzen' />
        <main>
          <ReferenzenHeader />
          <LogoList clients={props.pageData.clients} />
          <ClientQuotes quotes={props.pageData.clientQuotes} />
          <Cases cases={props.pageData.cases} />
        </main>
        <ReferenzenContact
          contact={props.pageData.contact}
          image={props.pageData.contactImage}
        />
      </article>
      <Footer gridArea='footer' siteInfo={props.siteInfo} />
    </>
  )
}

export const getStaticProps: GetStaticProps<
  SiteQueryResult<ReferenzenPageProps>
> = async () => {
  const result = await queryPageData<ReferenzenPageProps>({
    query: 'page("referenzen")',
    select: {
      clients: {
        query: 'page.clients.toStructure',
        select: {
          name: true,
          logo: {
            query: 'structureItem.logo.toFile',
            select: {
              src: 'file.id',
              width: true,
              height: true,
            },
          },
        },
      },
      clientQuotes: {
        query: 'page.clientQuotes.toStructure',
        select: {
          author: true,
          quote: true,
        },
      },
      cases: {
        query: 'page.children',
        select: {
          id: 'page.slug',
          title: true,
          client: true,
          clientShortName: true,
          category: true,
          task: true,
          solution: true,
          logo: {
            query: 'page.image',
            select: {
              src: 'file.id',
              width: true,
              height: true,
            },
          },
        },
      },
      contact: {
        query: 'page.contact.toPage',
        select: {
          name: 'page.title',
          mail: 'page.email',
          phone: true,
        },
      },
      contactImage: {
        query: 'page.contact.toPage.image',
        select: { src: 'file.id', width: true, height: true },
      },
    },
  })
  return { props: result }
}

export default ReferenzenPage
