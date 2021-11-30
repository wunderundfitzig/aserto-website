import { GetStaticProps, NextPage } from 'next'
import { Contact, ImageType } from 'lib/types'
import { PageProps, queryPageData, SiteQueryResult } from 'lib/kirby-query'
import KarriereHeader from 'components/karriere/karriere-header'
import KarriereContact from 'components/karriere/karriere-contact'
import JobList from 'components/karriere/job-list'
import JobAdd from 'components/karriere/job-add'
import Prinzipen from 'components/karriere/prinzipen'
import Metadata from 'components/metadata'
import Footer from 'components/footer'

type Job = {
  slug: string
  title: string
  content: string
  contactImage: ImageType
  contact: Contact
}

export type KarrierePageProps = {
  jobs: { slug: string; title: string }[]
  job?: Job
}
const KarrierePage: NextPage<PageProps<KarrierePageProps>> = (props) => {
  return (
    <>
      <Metadata
        pageMeta={props.pageData}
        slug={
          props.pageData.job === undefined
            ? '/karriere'
            : `/karriere/jobs/${props.pageData.job.slug}`
        }
      />

      <article
        hidden={props.pageData.job !== undefined}
        style={{ gridArea: props.gridArea, display: 'block' }}
        className='karriere-page'
      >
        <main>
          <KarriereHeader />
          <Prinzipen />
          <JobList jobs={props.pageData.jobs} />
        </main>
        <KarriereContact />
      </article>
      <Footer gridArea='footer' siteInfo={props.siteInfo} />
      {props.pageData.job !== undefined && (
        <JobAdd jobs={props.pageData.jobs} job={props.pageData.job} />
      )}
      <style jsx global>
        {`
          @media print {
            .karriere-page * {
              ${props.pageData.job !== undefined && 'display: none;'}
            }

            footer * {
              ${props.pageData.job !== undefined && 'display: none;'}
            }
          }
        `}
      </style>
    </>
  )
}

export const getStaticProps: GetStaticProps<
  SiteQueryResult<KarrierePageProps>
> = async () => {
  const result = await queryPageData<KarrierePageProps>({
    query: "page('karriere')",
    select: {
      jobs: {
        query: 'page.children',
        select: { title: true, slug: true },
      },
    },
  })
  return { props: result }
}

export default KarrierePage
