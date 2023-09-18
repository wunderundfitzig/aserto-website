import { GetStaticProps, NextPage } from 'next'
import { Contact, ImageType } from 'lib/types'
import { PageProps, queryPageData, SiteQueryResult } from 'lib/kirby-query'
import KarriereHeader from 'components/karriere/karriere-header'
import KarriereContact from 'components/karriere/karriere-contact'
import JobList from 'components/karriere/job-list'
import JobAdd from 'components/karriere/job-add'
import WasUnsWichtigIst from 'components/karriere/was-uns-wichtig-ist'
import Metadata from 'components/metadata'
import Footer from 'components/footer'
import Vorteile from 'components/karriere/vorteile'
import Collage from 'components/karriere/collage'

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
  contactImage: ImageType
  contact: Contact
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
          <WasUnsWichtigIst />
          <Vorteile />
          <JobList jobs={props.pageData.jobs} />
          <Collage />
        </main>
        <KarriereContact
          contact={props.pageData.contact}
          image={props.pageData.contactImage}
        />
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

export default KarrierePage
