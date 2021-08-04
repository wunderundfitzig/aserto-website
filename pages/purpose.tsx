import { NextPage } from 'next'
import { PageProps } from './_app'
import PurposeHeader from 'components/purpose/purpose-header'

const PurposePage: NextPage<PageProps> = (props) => {
  return (
    <article style={{ gridArea: props.gridArea }}>
      <main>
        <PurposeHeader />
      </main>
    </article>
  )
}

export default PurposePage
