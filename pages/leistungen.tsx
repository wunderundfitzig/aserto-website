import { NextPage } from 'next'
import { PageProps } from 'pages/_app'
import GrowingDot from 'components/leistungen/growing-dot'
import WasUnsAusmacht from 'components/leistungen/was-uns-ausmacht'
import LeistungenHeader from 'components/leistungen/leistungen-header'
import AufDenPunkt from 'components/leistungen/auf-den-punkt'
import LeistungenContact from 'components/leistungen/leistungen-contact'
import Metadata from 'components/metadata'

const LeistungenPage: NextPage<PageProps> = (props) => {
  return (
    <article style={{ gridArea: props.gridArea }}>
      <Metadata
        title='aserto | Leistungen'
        description='aserto begleitet Unternehmen und Institutionen bei richtungsweisenden Handlungen und eröffnet Möglichkeiten zur Veränderung.'
        slug='/leistungen'
      />
      <main>
        <LeistungenHeader />
        <WasUnsAusmacht />
        <GrowingDot />
        <AufDenPunkt />
      </main>
      <LeistungenContact />
    </article>
  )
}

export default LeistungenPage
