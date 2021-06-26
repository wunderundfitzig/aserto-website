import Image from 'next/image'
import { FunctionComponent } from 'react'
import * as colors from 'lib/colors'
import Sloagan from 'components/sloagan'
import { TriangleLine } from 'components/curves'

const TeamHeader: FunctionComponent = () => {
  return (
    <header className='team-header'>
      <h1>Team</h1>
      <div className='sloagen-wrapper'>
        <Sloagan emphasisColor={colors.lightBlue}>
          {{
            sloagen: (
              <>
                Wir bei aserto sind über <em>20 feste Mitarbeiter*innen</em> und
                rund ein Dutzend <em>freier Projektmitarbeiter*innen.</em>
              </>
            ),
          }}
        </Sloagan>
      </div>
      <div className='image'>
        <Image
          priority
          src='/team-placeholder-image.jpg'
          width='1173 '
          height=' 684'
        />
      </div>
      <div className='key-visual'>
        <TriangleLine color='white' preserveAspectRatio='none' />
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }

          to {
            opacity: 0.5;
          }
        }

        .team-header {
          position: relative;
          margin-bottom: 50vh;
          display: inline-block;
        }

        .team-header:before {
          opacity: 0.5;
          content: '';
          position: absolute;
          top: -200px;
          left: -1000px;
          width: calc(100% + 1000px);
          height: calc(100% + 200px);
          background-color: ${colors.backgroundBlue};
          z-index: -1;
          animation: fade-in 1s;
        }

        h1 {
          color: ${colors.categoryColors.team};
        }

        .sloagen-wrapper {
          position: relative;
          width: 80%;
          max-width: 700px;
          z-index: 1;
        }

        .image {
          width: 80%;
          margin-top: 4em;
          margin-bottom: -35%;
        }

        .key-visual {
          position: absolute;
          top: 0.6em;
          left: 7em;
          width: calc(100% - 7em);
          height: 130%;
        }
      `}</style>
    </header>
  )
}

export default TeamHeader
