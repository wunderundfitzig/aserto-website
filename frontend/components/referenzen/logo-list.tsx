import { FunctionComponent } from 'react'
import Image from 'next/dist/client/image'
import * as colors from 'lib/colors'
import { breakpoint, minWidth } from 'lib/breakpoints'
import { imageLoader } from 'lib/image-loader'
import { Client } from 'lib/types'
import { RoundZigZagCurve } from 'components/curves'

type Props = {
  clients: Client[]
}
const LogoList: FunctionComponent<Props> = (props) => {
  return (
    <section className='logo-list'>
      <h2>Unsere Kunden</h2>
      <ul>
        {props.clients.map((client, idx) => (
          <li key={idx}>
            <Image loader={imageLoader} {...client.logo} alt={client.name} />
          </li>
        ))}
      </ul>
      <div className='curve'>
        <RoundZigZagCurve
          color={colors.categoryColors.referenzen}
          preserveAspectRatio='none'
        />
      </div>
      <style jsx>{`
        .logo-list {
          position: relative;
          margin: 6rem 0;
        }

        ul {
          list-style: none;
          background-color: white;
          padding: 1em;
          margin: 4em 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 2rem 2.5rem;
          align-items: center;
          justify-items: center;
        }

        .curve {
          position: absolute;
          top: -220px;
          left: -139px;
          width: 400px;
          height: calc(100% + 220px);
          pointer-events: none;
          z-index: -1;
        }

        @media ${minWidth(breakpoint.xs)} {
          ul {
            grid-template-columns: repeat(4, 1fr);
          }
          .curve {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: calc(100% + 4rem);
          }
        }

        @media ${minWidth(breakpoint.s)} {
          ul {
            grid-gap: 2em 4em;
          }
        }

        @media ${minWidth(breakpoint.sm)} {
          ul {
            grid-template-columns: repeat(5, 1fr);
            grid-gap: 2em 3em;
          }
        }

        @media ${minWidth(breakpoint.ml)} {
          .logo-list {
            margin-top: 12rem;
            margin-bottom: 12rem;
          }

          ul {
            grid-gap: 2em 4em;
          }
          .curve {
            height: calc(100% + 6rem);
          }
        }

        @media ${minWidth(breakpoint.xxl)} {
          .logo-list {
            margin-top: 16rem;
            margin-bottom: 16rem;
          }

          ul {
            grid-gap: 2em 6em;
          }

          .curve {
            height: calc(100% + 8rem);
          }
        }
      `}</style>
    </section>
  )
}

export default LogoList
