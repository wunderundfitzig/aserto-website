import Footer from 'components/footer'
import AufDenPunkt from 'components/gefaehrdungsbeurteilung/auf-den-punkt'
import GrowingDot from 'components/gefaehrdungsbeurteilung/growing-dot'
import LeistungenContact from 'components/leistungen/leistungen-contact'
import LeistungenHeader from 'components/leistungen/leistungen-header'
import WasUnsAusmacht from 'components/leistungen/was-uns-ausmacht'
import Metadata from 'components/metadata'
import { queryPageData } from 'lib/kirby-query'
import { Contact, ImageType } from 'lib/types'

type PageData = {
  contactImage: ImageType
  contact: Contact
}
export default async function Leistungen() {
  const result = await queryPageData<PageData>({
    query: 'page("leistungen")',
    select: {
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
        <Metadata pageMeta={result.pageData} slug='/leistungen' />
        <main>
          <LeistungenHeader />
          <WasUnsAusmacht />
          <GrowingDot />
          <AufDenPunkt />
        </main>
        <LeistungenContact
          contact={result.pageData.contact}
          image={result.pageData.contactImage}
        />
      </article>
      <Footer gridArea='footer' siteInfo={result.siteInfo} />
    </>
  )
}
