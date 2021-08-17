import { NextPage } from 'next'
import { PageProps } from './_app'
import PurposeHeader from 'components/purpose/purpose-header'
import MenschenUndDaten from 'components/purpose/menschen-und-daten'
import Quotes from 'components/purpose/quotes'
import AnimatedCurve from 'components/purpose/animated-curve'

const PurposePage: NextPage<PageProps> = (props) => {
  return (
    <article style={{ gridArea: props.gridArea }}>
      <main>
        <PurposeHeader />
        <Quotes />
        <MenschenUndDaten />
        <AnimatedCurve />
      </main>
    </article>
  )
}

export default PurposePage
