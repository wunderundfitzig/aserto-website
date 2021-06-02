import { NextPage } from 'next'
import { PageProps } from 'pages/_app'
import TeamHeader from 'components/team/team-header'
import UnserTeam from 'components/team/unser-team'

const LeistungenPage: NextPage<PageProps> = (props) => {
  return (
    <main style={{ gridArea: props.gridArea }}>
      <TeamHeader />
      <UnserTeam />
    </main>
  )
}

export default LeistungenPage
