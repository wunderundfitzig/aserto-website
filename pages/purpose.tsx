import { NextPage } from 'next'
import { PageProps } from './_app'
import PurposeHeader from 'components/purpose/purpose-header'
import MenschenUndDaten from 'components/purpose/menschen-und-daten'
import Quotes from 'components/purpose/quotes'
import AnimatedCurve from 'components/purpose/animated-curve'
import Metadata from 'components/metadata'
import SloganText from 'components/purpose/slogan-text'

const PurposePage: NextPage<PageProps> = (props) => {
  return (
    <article style={{ gridArea: props.gridArea }}>
      <Metadata
        title='aserto | Purpose'
        description='Beratung evidenzbasierter gestalten. Wissenschaft zu Wirksamkeit verhelfen. Ständig größere Datenmengen in kürzester Zeit greifbar machen.'
        slug='/purpose'
      />
      <main>
        <PurposeHeader />
        <Quotes />
        <MenschenUndDaten />
        <SloganText />
        <AnimatedCurve />
      </main>
    </article>
  )
}

export default PurposePage
