import Image from 'next/image'
import { FunctionComponent } from 'react'
import * as colors from 'lib/colors'
import Sloagan from 'components/sloagan'
import { TriangleLine } from 'components/curves'
import { breakpoint, minWidth } from 'lib/breakpoints'
import HeaderBackground from 'components/header-background'

const TeamHeader: FunctionComponent = () => {
  return (
    <header className='team-header'>
      <HeaderBackground
        color={colors.backgroundBlue}
        opacity={0.5}
        gridArea='title / title / image-1 / image-1'
      />
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
          width='1200'
          height='857'
          alt=''
        />
      </div>
      <div className='key-visual'>
        <TriangleLine color='white' preserveAspectRatio='none' />
      </div>
      <style jsx>{`
        .team-header {
          position: relative;
          display: grid;
          grid-template-areas:
            'title'
            'slogan'
            'image-1'
            'image-2';
        }

        h1 {
          color: ${colors.categoryColors.team};
          grid-area: title;
        }

        .sloagen-wrapper {
          grid-area: slogan;
          width: 80%;
          max-width: 700px;
          z-index: 1;
        }

        .image {
          grid-area: image-1 / image-1 / image-2 / image-2;
          width: 100%;
          margin-top: 2em;
        }

        .key-visual {
          grid-area: title / title / slogan / slogan;
          position: absolute;
          transform: translateX(6em) translateY(3em);
          width: calc(100% - 4em);
          height: 120%;
        }

        @media ${minWidth(breakpoint.xs)} {
          .key-visual {
            height: 150%;
          }
        }

        @media ${minWidth(breakpoint.s)} {
          .image {
            width: 80%;
          }
          .key-visual {
            height: 170%;
          }
        }

        @media ${minWidth(breakpoint.m)} {
          .key-visual {
            height: 200%;
          }
        }

        @media ${minWidth(breakpoint.l)} {
          .image {
            margin-top: 4em;
          }
        }
      `}</style>
    </header>
  )
}

export default TeamHeader
