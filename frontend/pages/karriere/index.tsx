import { GetStaticProps, NextPage } from 'next'
import { PageProps } from '../_app'
import { Contact, ImageType } from 'lib/types'
import { queryBackend } from 'lib/kirby-query'
import KarriereHeader from 'components/karriere/karriere-header'
import KarriereContact from 'components/karriere/karriere-contact'
import JobList from 'components/karriere/job-list'
import JobAdd from 'components/karriere/job-add'
import Prinzipen from 'components/karriere/prinzipen'
import Metadata from 'components/metadata'

type Job = {
  slug: string
  title: string
  content: string
  contactImage: ImageType
  contact: Contact
}

export type KarrierePageProps = {
  title: string
  seotitle: string
  seodescription: string
  jobs: { slug: string; title: string }[]
  job?: Job
}
const KarrierePage: NextPage<PageProps & KarrierePageProps> = (props) => {
  return (
    <>
      {props.job === undefined ? (
        <Metadata
          title='aserto | Karriere'
          description='Wir sind menschlich, verbindlich und relevant.'
          slug='/karriere'
        />
      ) : (
        <Metadata
          title='aserto | Karriere | Stellenausschreibung'
          description={props.job.title}
          slug={`/karriere/${props.job.slug}`}
        />
      )}
      <article
        hidden={props.job !== undefined}
        style={{ gridArea: props.gridArea, display: 'block' }}
        className='karriere-page'
      >
        <main>
          <KarriereHeader />
          <Prinzipen />
          <JobList jobs={props.jobs} />
        </main>
        <KarriereContact />
      </article>
      {props.job !== undefined && <JobAdd jobs={props.jobs} job={props.job} />}
      <style jsx global>
        {`
          @media print {
            .karriere-page * {
              ${props.job !== undefined && 'display: none;'}
            }

            footer * {
              ${props.job !== undefined && 'display: none;'}
            }
          }
        `}
      </style>
    </>
  )
}

export const getStaticProps: GetStaticProps<KarrierePageProps> = async () => {
  const result = await queryBackend({
    query: "page('karriere')",
    select: {
      title: true,
      seotitle: true,
      seodescription: true,
      jobs: {
        query: 'page.children',
        select: { title: true, slug: true },
      },
    },
  })
  return { props: result as KarrierePageProps }
}

export default KarrierePage
