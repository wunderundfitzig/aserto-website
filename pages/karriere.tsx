import { NextPage } from 'next'
import { PageProps } from './_app'
import KarriereHeader from 'components/karriere/karriere-header'
import KarriereContact from 'components/karriere/karriere-contact'

const KarrierePage: NextPage<PageProps> = (props) => {
  return (
    <article style={{ gridArea: props.gridArea }}>
      <main>
        <KarriereHeader />
      </main>
      <KarriereContact />
    </article>
  )
}

export default KarrierePage
