import { GetStaticProps, NextPage } from 'next'
import { PageProps } from '../_app'
import KarriereHeader from 'components/karriere/karriere-header'
import KarriereContact from 'components/karriere/karriere-contact'
import JobList from 'components/karriere/job-list'
import JobAdd from 'components/karriere/job-add'
import Prinzipen from 'components/karriere/prinzipen'
import Metadata from 'components/metadata'
import { Contact, ImageType } from 'lib/types'
import { privateConfig } from 'lib/config/private-config'
import { getBasicAuthHeader } from 'lib/basic-auth'

type Job = {
  slug: string
  title: string
  content: string
  contactImage: ImageType
  contact: Contact
}

type Props = {
  title: string
  seotitle: string
  seodescription: string
  jobs: { slug: string; title: string }[]
  job?: Job
}
const KarrierePage: NextPage<PageProps & Props> = (props) => {
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const result = await fetch(`https://cms.aserto.de/api/query`, {
    method: 'POST',
    headers: {
      ...getBasicAuthHeader(
        privateConfig.backendUser,
        privateConfig.backendPassword
      ),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
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
    }),
  })
  const resultJson = await result.json()
  return { props: resultJson.result }
}

export default KarrierePage
