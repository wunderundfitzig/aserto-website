import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { PageProps } from '../_app'
import KarriereHeader from 'components/karriere/karriere-header'
import KarriereContact from 'components/karriere/karriere-contact'
import JobList from 'components/karriere/job-list'
import JobAdd from 'components/karriere/job-add'

const jobs = [
  {
    id: 'job1',
    title: 'Senior consultant (w/M/D)',
  },
  {
    id: 'job2',
    title: 'Senior consultant (w/M/D)',
  },
  {
    id: 'job3',
    title: 'Senior consultant (w/M/D)',
  },
  {
    id: 'job4',
    title: 'Senior consultant (w/M/D)',
  },
]

const KarrierePage: NextPage<PageProps> = (props) => {
  const router = useRouter()
  const { jobid } = router.query as { jobid?: string }
  const job = jobs.find((job) => jobid !== undefined && job.id === jobid)

  return (
    <>
      <article style={{ gridArea: props.gridArea }}>
        <main>
          <KarriereHeader />
          <JobList jobs={jobs} />
        </main>
        <KarriereContact />
      </article>
      {job !== undefined && <JobAdd job={job} gridArea={props.gridArea} />}
    </>
  )
}

export default KarrierePage
