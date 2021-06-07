import { NextPage } from 'next'
import { PageProps } from 'pages/_app'
import GrowingDot from 'components/leistungen/growing-dot'
import WasUnsAusmacht from 'components/leistungen/was-uns-ausmacht'
import LeistungenHeader from 'components/leistungen/leistungen-header'
import AufDenPunkt from 'components/leistungen/auf-den-punkt'

const LeistungenPage: NextPage<PageProps> = (props) => {
  return (
    <main style={{ gridArea: props.gridArea }}>
      <LeistungenHeader />
      <WasUnsAusmacht />
      {/* <GrowingDot /> */}
      <AufDenPunkt />
    </main>
  )
}

export default LeistungenPage
