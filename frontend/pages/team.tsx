import { GetStaticProps, NextPage } from 'next'
import { PageProps, queryPageData, SiteQueryResult } from 'lib/kirby-query'
import { TeamMember } from 'lib/types'
import TeamHeader from 'components/team/team-header'
import UnserTeam from 'components/team/unser-team'
import DasSindWir from 'components/team/das-sind-wir'
import FreieMitarbeiter from 'components/team/freie-mitarbeiter'
import Metadata from 'components/metadata'
import Footer from 'components/footer'

type LeistungenPageProps = {
  teamMembers: TeamMember[]
  freieMitarbeiterTitle: string
  freieMitarbeiter: string
}
const LeistungenPage: NextPage<PageProps<LeistungenPageProps>> = (props) => {
  return (
    <>
      <article style={{ gridArea: props.gridArea }}>
        <Metadata
          title={props.pageData.seotitle}
          description={props.pageData.seodescription}
          slug='/team'
        />
        <main>
          <TeamHeader title={props.pageData.title} />
          <UnserTeam />
          <DasSindWir members={props.pageData.teamMembers} />
          <FreieMitarbeiter
            title={props.pageData.freieMitarbeiterTitle}
            names={props.pageData.freieMitarbeiter}
          />
        </main>
      </article>
      <Footer gridArea='footer' siteInfo={props.siteInfo} />
    </>
  )
}

export const getStaticProps: GetStaticProps<
  SiteQueryResult<LeistungenPageProps>
> = async () => {
  const result = await queryPageData<LeistungenPageProps>({
    query: "page('team')",
    select: {
      title: true,
      seotitle: 'page.seotitle.or(page.title)',
      seodescription: true,
      freieMitarbeiterTitle: true,
      freieMitarbeiter: true,
      teamMembers: {
        query: 'page.children',
        select: {
          image: {
            query: 'page.image',
            select: {
              src: 'file.id',
              width: true,
              height: true,
            },
          },
          contact: {
            query: 'page',
            select: {
              name: 'page.title',
              phone: 'page.phone',
              mail: 'page.email',
              role: 'page.position',
              linkedIn: 'page.linkedinurl',
              xing: 'page.xingurl',
            },
          },
        },
      },
    },
  })
  return { props: result }
}

export default LeistungenPage
