import { GetStaticProps, NextPage } from 'next'
import { PageProps } from 'pages/_app'
import { queryBackend } from 'lib/kirby-query'
import { TeamMember } from 'lib/types'
import TeamHeader from 'components/team/team-header'
import UnserTeam from 'components/team/unser-team'
import DasSindWir from 'components/team/das-sind-wir'
import FreieMitarbeiter from 'components/team/freie-mitarbeiter'
import Metadata from 'components/metadata'

type LeistungenPageProps = {
  title: string
  seotitle: string
  seodescription: string
  teamMembers: TeamMember[]
  freieMitarbeiterTitle: string
  freieMitarbeiter: string
}
const LeistungenPage: NextPage<PageProps & LeistungenPageProps> = (props) => {
  return (
    <article style={{ gridArea: props.gridArea }}>
      <Metadata
        title={props.seotitle}
        description={props.seodescription}
        slug='/team'
      />
      <main>
        <TeamHeader title={props.title} />
        <UnserTeam />
        <DasSindWir members={props.teamMembers} />
        <FreieMitarbeiter
          title={props.freieMitarbeiterTitle}
          names={props.freieMitarbeiter}
        />
      </main>
    </article>
  )
}

export const getStaticProps: GetStaticProps<LeistungenPageProps> = async () => {
  const result = await queryBackend({
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
  return { props: result as LeistungenPageProps }
}

export default LeistungenPage
