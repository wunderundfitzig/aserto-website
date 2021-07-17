import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { PageProps } from '../_app'
import KarriereHeader from 'components/karriere/karriere-header'
import KarriereContact from 'components/karriere/karriere-contact'
import JobList from 'components/karriere/job-list'
import JobAdd from 'components/karriere/job-add'
import Prinzipen from 'components/karriere/prinzipen'

const jobs = [
  {
    id: 'job1',
    title: 'Senior consultant (w/M/D)',
  },
  {
    id: 'job2',
    title: 'Executive analist (w/M/D)',
  },
  {
    id: 'job3',
    title: 'Head of strategy (w/M/D)',
  },
  {
    id: 'job4',
    title: 'Creative lead (w/M/D)',
  },
]

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
      >
        <main>
          <KarriereHeader />
          <Prinzipen />
          <JobList jobs={jobs} />
        </main>
        <KarriereContact />
      </article>
      {job !== undefined && <JobAdd jobs={jobs} jobIndex={jobIndex} />}
    </>
  )
}

export default KarrierePage
