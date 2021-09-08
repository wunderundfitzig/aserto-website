import { NextPage } from 'next'
import { PageProps } from 'pages/_app'
import TeamHeader from 'components/team/team-header'
import UnserTeam from 'components/team/unser-team'
import DasSindWir from 'components/team/das-sind-wir'
import FreieMitarbeiter from 'components/team/freie-mitarbeiter'
import Metadata from 'components/metadata'

const LeistungenPage: NextPage<PageProps> = (props) => {
  return (
    <article style={{ gridArea: props.gridArea }}>
      <Metadata
        title='aserto | Team'
        description='Wir bei aserto sind über 20 feste Mitarbeiter*innen und rund ein Dutzend freier Projektmitarbeiter*innen.'
        slug='/team'
      />
      <main>
        <TeamHeader />
        <UnserTeam />
        <DasSindWir />
        <FreieMitarbeiter />
      </main>
    </article>
  )
}

export default LeistungenPage
