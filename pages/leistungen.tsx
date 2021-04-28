import { categoryColors } from 'lib/colors'
import { NextPage } from 'next'
import { PageProps } from './_app'

const LeistungenPage: NextPage<PageProps> = (props) => {
  return (
    <main style={{ gridArea: props.gridArea }}>
      <h1>Leistungen</h1>
      <style jsx>{`
        h1 {
          color: ${categoryColors.leistungen};
        }
      `}</style>
    </main>
  )
}

export default LeistungenPage
