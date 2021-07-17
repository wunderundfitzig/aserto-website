import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { PageProps } from '../_app'
import KarriereHeader from 'components/karriere/karriere-header'
import KarriereContact from 'components/karriere/karriere-contact'
import JobList from 'components/karriere/job-list'
import JobAdd from 'components/karriere/job-add'
import Prinzipen from 'components/karriere/prinzipen'
import { jobs } from 'content/jobs'

const KarrierePage: NextPage<PageProps> = (props) => {
  const router = useRouter()
  const { jobid } = router.query as { jobid?: string }
  const jobIndex = jobs.findIndex(
    (job) => jobid !== undefined && job.id === jobid
  )
  const job = jobs[jobIndex]

  return (
    <>
      <article
        hidden={job !== undefined}
        style={{ gridArea: props.gridArea, display: 'block' }}
        className='karriere-page'
      >
        <main>
          <KarriereHeader />
          <Prinzipen />
          <JobList jobs={jobs} />
        </main>
        <KarriereContact />
      </article>
      {job !== undefined && <JobAdd jobs={jobs} jobIndex={jobIndex} />}
      <style jsx>
        {`
          @media print {
            .karriere-page * {
              ${job !== undefined && 'display: none;'}
            }
          }
        `}
      </style>
    </>
  )
}

export default KarrierePage
