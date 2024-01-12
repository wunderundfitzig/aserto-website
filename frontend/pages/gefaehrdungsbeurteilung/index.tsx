import { GetStaticProps, NextPage } from 'next'
import { PageProps, queryPageData, SiteQueryResult } from 'lib/kirby-query'
import { Contact, ImageType } from 'lib/types'
import GrowingDot from 'components/leistungen/growing-dot'
import WasUnsAusmacht from 'components/leistungen/was-uns-ausmacht'
import LeistungenHeader from 'components/leistungen/leistungen-header'
import AufDenPunkt from 'components/leistungen/auf-den-punkt'
import LeistungenContact from 'components/leistungen/leistungen-contact'
import Metadata from 'components/metadata'
import Footer from 'components/footer'

type LeistungenPageProps = {
  contactImage: ImageType
  contact: Contact
}
const LeistungenPage: NextPage<PageProps<LeistungenPageProps>> = (props) => {
  return (
    <>
      <article style={{ gridArea: props.gridArea }}>
        <Metadata pageMeta={props.pageData} slug='/leistungen' />
        <main>
          <LeistungenHeader />
          <WasUnsAusmacht />
          <GrowingDot />
          <AufDenPunkt />
        </main>
        <LeistungenContact
          contact={props.pageData.contact}
          image={props.pageData.contactImage}
        />
      </article>
      <Footer gridArea='footer' siteInfo={props.siteInfo} />
    </>
  )
}

export const getStaticProps: GetStaticProps<
  SiteQueryResult<LeistungenPageProps>
> = async () => {
  const result = await queryPageData<LeistungenPageProps>({
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
  return { props: result }
}

export default LeistungenPage
