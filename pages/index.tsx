import { breakpoint, minWidth } from 'lib/breakpoints'
import { NextPage } from 'next'
import Image from 'next/image'

const Index: NextPage = () => {
  return (
    <>
      <h1>Wir begleiten bei Richtungsweisenden Entscheidungen</h1>
      <div className='image-wrapper'>
        <Image
          className='image'
          src='/frontpage-banner.jpg'
          layout='fill'
          objectFit='cover'
          objectPosition='right'
        />
      </div>
      <style jsx>{`
        h1 {
          font-weight: normal;
          text-align: right;
          justify-self: end;
          grid-column: 1 / 3;
          grid-row: 2 / 3;
          max-width: 10em;
          font-size: 1.5em;
          margin: 0 0 1em 0;
        }

        .image-wrapper {
          position: relative;
          grid-column: 1 / 3;
          grid-row: 3 / 4;
          width: 100%;
          height: 100%;
        }

        .image-wrapper:after {
          content: '';
          position: absolute;
          right: 0;
          width: 250px;
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.4) 50%,
            rgba(0, 0, 0, 0.6)
          );
        }

        @media ${minWidth(breakpoint.xl)} {
          h1 {
            font-weight: normal;
            text-align: right;
            justify-self: end;
            grid-column: 2 / 4;
            grid-row: 2 / 3;
            max-width: 300px;
            font-size: 2em;
          }
          .image-wrapper {
            position: relative;
            grid-column: 1 / 2;
            grid-row: 1 / 3;
            width: 100%;
            height: 100%;
          }
        }
      `}</style>
    </>
  )
}

export default Index
