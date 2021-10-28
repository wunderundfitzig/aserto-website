import { GetStaticPaths, GetStaticProps } from 'next'
import { queryBackend } from 'lib/kirby-query'
import { KarrierePageProps } from '..'

export { default } from '..'

export const getStaticProps: GetStaticProps<KarrierePageProps> = async (
  ctx
) => {
  const jobslug = ctx.params?.job as string
  const result = await queryBackend({
    query: "page('karriere')",
    select: {
      title: true,
      seotitle: `page.find('${jobslug}').seotitle.or(page.find('${jobslug}').title)`,
      seodescription: `page.find('${jobslug}').seodescription`,
      jobs: {
        query: 'page.children',
        select: { title: true, slug: true },
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
  return { props: result as KarrierePageProps }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const jobSlugs = (await queryBackend({
    query: "page('karriere').children",
    select: {
      slug: true,
    },
  })) as { data: { slug: string }[] }
  return {
    paths: jobSlugs.data.map(({ slug }) => ({ params: { job: slug } })),
    fallback: false,
  }
}
