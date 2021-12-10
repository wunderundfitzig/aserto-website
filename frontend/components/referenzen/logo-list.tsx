import { FunctionComponent } from 'react'
import Image from 'next/dist/client/image'
import * as colors from 'lib/colors'
import { EndlessLine } from 'components/curves'
import { breakpoint, minWidth } from 'lib/breakpoints'
import { imageLoader } from 'lib/image-loader'
import { Client } from 'lib/types'

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
      <div className='line-1'>
        <EndlessLine color={colors.categoryColors.referenzen} rotate={60} />
      </div>
      <div className='line-2'>
        <EndlessLine color={colors.categoryColors.referenzen} rotate={-35} />
      </div>
      <div className='line-3'>
        <EndlessLine color={colors.categoryColors.referenzen} rotate={40} />
      </div>
      <style jsx>{`
        .logo-list {
          position: relative;
          margin: 6em 0;
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

        .line-1 {
          position: absolute;
          top: 100%;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .line-2 {
          position: absolute;
          top: 50%;
          width: 100%;
          height: 50%;
          z-index: -1;
        }

        .line-3 {
          position: absolute;
          display: none;
          z-index: -1;
        }

        @media ${minWidth(breakpoint.xs)} {
          ul {
            grid-template-columns: repeat(4, 1fr);
          }
          .line-1 {
            height: 200%;
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

          .line-1,
          .line-2 {
            display: none;
          }

          .line-3 {
            display: block;
            top: 100%;
            width: 40%;
            height: 10px;
          }
        }

        @media ${minWidth(breakpoint.ml)} {
          .logo-list {
            margin-top: 12rem;
          }

          ul {
            grid-gap: 2em 4em;
          }

          .line-3 {
            top: 80%;
          }
        }

        @media ${minWidth(breakpoint.ml)} {
          .line-3 {
            top: 100%;
          }
        }

        @media ${minWidth(breakpoint.xxl)} {
          .logo-list {
            margin-top: 12rem;
          }

          ul {
            grid-gap: 2em 6em;
          }

          .line-3 {
            top: 150%;
          }
        }
      `}</style>
    </section>
  )
}

export default LogoList
