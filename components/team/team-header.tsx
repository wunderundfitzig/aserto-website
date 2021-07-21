import Image from 'next/image'
import { FunctionComponent } from 'react'
import * as colors from 'lib/colors'
import Sloagan from 'components/sloagan'
import { TriangleLine } from 'components/curves'
import { breakpoint, minWidth } from 'lib/breakpoints'

const TeamHeader: FunctionComponent = () => {
  return (
    <header className='team-header'>
      <svg
        className='background'
        viewBox='0 0 100 100'
        preserveAspectRatio='none'
      >
        <rect
          fill={colors.backgroundBlue}
          x={0}
          y={0}
          width={100}
          height={100}
        />
      </svg>
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
          alt=''
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
          display: grid;
          grid-template-areas:
            'title'
            'slogan'
            'image-1'
            'image-2';
        }

        .background {
          opacity: 0.5;
          position: absolute;
          grid-area: title / title / image-1 / image-1;
          width: 100%;
          height: 100%;
          z-index: -1;
          animation: fade-in 2.5s ease-in;
          overflow: visible;
        }

        .background rect {
          transform: scaleX(2) scaleY(2);
          transform-origin: center bottom;
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
          .background rect {
            transform-origin: bottom right;
          }

          .image {
            margin-top: 4em;
          }
        }
      `}</style>
    </header>
  )
}

export default TeamHeader
