import { PageData as KarrierePageData } from 'app/karriere/(karriere)/page'
import Footer from 'components/footer'
import Collage from 'components/karriere/collage'
import JobAdd from 'components/karriere/job-add'
import JobList from 'components/karriere/job-list'
import KarriereContact from 'components/karriere/karriere-contact'
import KarriereHeader from 'components/karriere/karriere-header'
import Vorteile from 'components/karriere/vorteile'
import WasUnsWichtigIst from 'components/karriere/was-uns-wichtig-ist'
import Metadata from 'components/metadata'
import { queryBackend, queryPageData } from 'lib/kirby-query'
import { notFound } from 'next/navigation'

type Params = { job: string }

export const dynamicParams = false
export async function generateStaticParams(): Promise<Params[]> {
  const jobSlugs = await queryBackend<
    { slug: string; blueprint: 'pages/job-add' | 'pages/personio-link' }[]
  >({
    query: "page('karriere').children",
    select: {
      slug: true,
      blueprint: 'page.blueprint.name',
    },
  })

  const pages = jobSlugs
    .filter((page) => page.blueprint == 'pages/job-add')
    .map(({ slug }) => ({ job: slug }))

  return pages.length > 0 ? pages : [{ job: 'not-found' }]
}

type Props = {
  params: Promise<Params>
}
export default async function Job(props: Props) {
  const params = await props.params
  const jobslug = params.job

  if (jobslug === 'not-found') return notFound()

  const result = await queryPageData<KarrierePageData>({
    query: "page('karriere')",
    select: {
      title: true,
      seotitle: `page.find('${jobslug}').seotitle.or(page.find('${jobslug}').title)`,
      seodescription: `page.find('${jobslug}').seodescription`,
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
      job: {
        query: `page.find('${jobslug}')`,
        select: {
          slug: true,
          title: true,
          content: 'page.body.toBlocks.toHtml',
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
