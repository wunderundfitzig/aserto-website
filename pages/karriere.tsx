import { NextPage } from 'next'
import { PageProps } from './_app'
import KarriereHeader from 'components/karriere/karriere-header'

const KarrierePage: NextPage<PageProps> = (props) => {
  return (
    <article style={{ gridArea: props.gridArea }}>
      <main>
        <KarriereHeader />
      </main>
    </article>
  )
}

export default KarrierePage
