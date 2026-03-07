import Metadata from 'components/metadata'
import StrategyHero from 'components/strategy/hero'

export default function Leistungen() {
  return (
    <>
      <article style={{ gridArea: 'main' }}>
        <Metadata
          pageMeta={{
            title: 'Media Concept & Strategy',
            seotitle: '',
            seodescription: '',
          }}
          slug='/strategy'
        />
        <StrategyHero />
      </article>
    </>
  )
}
