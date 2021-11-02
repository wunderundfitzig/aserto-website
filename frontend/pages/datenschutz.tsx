import { GetStaticProps, NextPage } from 'next'
import { PageProps, queryPageData, SiteQueryResult } from 'lib/kirby-query'
import DatenschutzHeader from 'components/datenschutz/datenschutz-header'
import DatenschutzText from 'components/datenschutz/datenschutz-text'
import Metadata from 'components/metadata'
import Footer from 'components/footer'

type DatenschutzPageProps = Record<string, never>
const Datenschutz: NextPage<PageProps<DatenschutzPageProps>> = (props) => {
  return (
    <>
      <article style={{ gridArea: props.gridArea }}>
        <Metadata
          title='aserto | Datenschutz'
          description='Datenschutz hat für aserto einen hohen Stellenwert'
          slug='/datenschutz'
        />
        <main>
          <DatenschutzHeader />
          <DatenschutzText />
        </main>
      </article>
      <Footer gridArea='footer' siteInfo={props.siteInfo} />
    </>
  )
}

export const getStaticProps: GetStaticProps<
  SiteQueryResult<DatenschutzPageProps>
> = async () => {
  const result = await queryPageData<DatenschutzPageProps>({
    query: 'page("datenschutz")',
  })
  return { props: result }
}

export default Datenschutz
