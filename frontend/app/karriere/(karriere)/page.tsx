import { queryPageData } from 'lib/kirby-query'
import { Contact, ImageType } from 'lib/types'

import Footer from 'components/footer'
import Collage from 'components/karriere/collage'
import JobAdd from 'components/karriere/job-add'
import JobList from 'components/karriere/job-list'
import KarriereContact from 'components/karriere/karriere-contact'
import KarriereHeader from 'components/karriere/karriere-header'
import Vorteile from 'components/karriere/vorteile'
import WasUnsWichtigIst from 'components/karriere/was-uns-wichtig-ist'
import Metadata from 'components/metadata'

type Job = {
  slug: string
  title: string
  content: string
  contactImage: ImageType
  contact: Contact
}
export type PageData = {
  jobs: (
    | {
        slug: string
        title: string
        blueprint: 'pages/job-add'
      }
    | {
        slug: string
        title: string
        externalURL: string
        blueprint: 'pages/personio-link'
      }
  )[]
  job?: Job
  contactImage: ImageType
  contact: Contact
}

export default async function Karriere() {
  const result = await queryPageData<PageData>({
    query: "page('karriere')",
    select: {
      jobs: {
        query: 'page.children',
        select: {
          title: true,
          slug: true,
          externalURL: true,
          blueprint: 'page.blueprint.name',
        },
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

  return (
    <>
      <Metadata
        pageMeta={result.pageData}
        slug={
          result.pageData.job === undefined
            ? '/karriere'
            : `/karriere/jobs/${result.pageData.job.slug}`
        }
      />

      <article
        hidden={result.pageData.job !== undefined}
        style={{ gridArea: 'main', display: 'block' }}
        className='karriere-page'
      >
        <main>
          <KarriereHeader />
          <WasUnsWichtigIst />
          <Vorteile />
          <JobList jobs={result.pageData.jobs} />
          <Collage />
        </main>
        <KarriereContact
          contact={result.pageData.contact}
          image={result.pageData.contactImage}
        />
      </article>
      <Footer gridArea='footer' siteInfo={result.siteInfo} />
      {result.pageData.job !== undefined && (
        <JobAdd jobs={result.pageData.jobs} job={result.pageData.job} />
      )}
      <style>
        {`
          @media print {
            .karriere-page * {
              ${result.pageData.job !== undefined && 'display: none;'}
            }

            footer * {
              ${result.pageData.job !== undefined && 'display: none;'}
            }
          }
        `}
      </style>
    </>
  )
}
