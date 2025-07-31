import { queryPageData } from 'lib/kirby-query'
import { Case, Client, ClientQuote, Contact, ImageType } from 'lib/types'

import Footer from 'components/footer'
import Metadata from 'components/metadata'
import Cases from 'components/referenzen/cases'
import ClientQuotes from 'components/referenzen/client-quotes'
import LogoList from 'components/referenzen/logo-list'
import ReferenzenContact from 'components/referenzen/referenzen-contact'
import ReferenzenHeader from 'components/referenzen/referenzen-header'

type PageData = {
  cases: Case[]
  clients: Client[]
  clientQuotes: ClientQuote[]
  contactImage: ImageType
  contact: Contact
}
export default async function Referenzen() {
  const result = await queryPageData<PageData>({
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

  return (
    <>
      <article style={{ gridArea: 'main' }}>
        <Metadata pageMeta={result.pageData} slug='/referenzen' />
        <main>
          <ReferenzenHeader />
          <LogoList clients={result.pageData.clients} />
          <ClientQuotes quotes={result.pageData.clientQuotes} />
          <Cases cases={result.pageData.cases} />
        </main>
        <ReferenzenContact
          contact={result.pageData.contact}
          image={result.pageData.contactImage}
        />
      </article>
      <Footer gridArea='footer' siteInfo={result.siteInfo} />
    </>
  )
}
