import { GetStaticPaths, GetStaticProps } from 'next'
import { queryBackend, queryPageData, SiteQueryResult } from 'lib/kirby-query'
import { KarrierePageProps } from '..'

export { default } from '..'

export const getStaticProps: GetStaticProps<
  SiteQueryResult<KarrierePageProps>
> = async (ctx) => {
  const jobslug = ctx.params?.job as string
  const result = await queryPageData<KarrierePageProps>({
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
  return { props: result }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const jobSlugs = (await queryBackend({
    query: "page('karriere').children",
    select: {
      slug: true,
      blueprint: 'page.blueprint.name',
    },
  })) as { slug: string; blueprint: 'pages/job-add' | 'pages/personio-link' }[]

  return {
    paths: jobSlugs
      .filter((page) => page.blueprint == 'pages/job-add')
      .map(({ slug }) => ({ params: { job: slug } })),
    fallback: false,
  }
}
