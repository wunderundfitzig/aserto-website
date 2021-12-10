import { GetStaticProps, NextPage } from 'next'
import { PageProps, queryPageData, SiteQueryResult } from 'lib/kirby-query'
import { Case, Client } from 'lib/types'
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
}
const ReferenzenPage: NextPage<PageProps<ReferenzenPageProps>> = (props) => {
  return (
    <>
      <article style={{ gridArea: props.gridArea }}>
        <Metadata pageMeta={props.pageData} slug='/referenzen' />
        <main>
          <ReferenzenHeader />
          <LogoList clients={props.pageData.clients} />
          <ClientQuotes />
          <Cases cases={props.pageData.cases} />
        </main>
        <ReferenzenContact />
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
    },
  })
  return { props: result }
}

export default ReferenzenPage
