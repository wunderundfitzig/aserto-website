import { NextPage } from 'next'
import { PageProps } from 'pages/_app'
import TeamHeader from 'components/team/team-header'
import UnserTeam from 'components/team/unser-team'
import DasSindWir from 'components/team/das-sind-wir'
import FreieMitarbeiter from 'components/team/freie-mitarbeiter'

const LeistungenPage: NextPage<PageProps> = (props) => {
  return (
    <article style={{ gridArea: props.gridArea }}>
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
