import { NextPage } from 'next'
import Image from 'next/image'
import * as colors from 'lib/colors'
import { PageProps } from 'pages/_app'
import Sloagan from 'components/sloagan'

const LeistungenPage: NextPage<PageProps> = (props) => {
  return (
    <main style={{ gridArea: props.gridArea }}>
      <header>
        <h1>Team</h1>
        <div className='sloagen-wrapper'>
          <Sloagan emphasisColor={colors.blue}>
            {{
              sloagen: (
                <>
                  Wir bei aserto sind über <em>20 feste Mitarbeiter*innen</em>{' '}
                  und rund ein Dutzend <em>freier Projektmitarbeiter*innen.</em>
                </>
              ),
            }}
          </Sloagan>
        </div>
        <div className='image'>
          <Image
            src='/team-placeholder-image.jpg'
            width='1173 '
            height=' 684'
          />
        </div>
      </header>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        header {
          position: relative;
          margin-bottom: 50vh;
          display: inline-block;
        }

        header:before {
          content: '';
          position: absolute;
          top: -200px;
          left: -4em;
          width: calc(100% + 4em);
          height: calc(100% + 200px);
          background-color: ${colors.backgroundBlue};
          z-index: -1;
          animation: fade-in 1s;
        }

        h1 {
          color: ${colors.categoryColors.team};
        }

        .sloagen-wrapper {
          width: 80%;
          max-width: 700px;
        }

        .image {
          width: 80%;
          margin-top: 4em;
          margin-bottom: -35%;
        }
      `}</style>
    </main>
  )
}

export default LeistungenPage