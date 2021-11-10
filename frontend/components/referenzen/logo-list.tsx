import { FunctionComponent } from 'react'
import Image from 'next/dist/client/image'
import * as colors from 'lib/colors'
import { EndlessLine } from 'components/curves'
import { breakpoint, minWidth } from 'lib/breakpoints'
import { imageLoader } from 'lib/image-loader'

const logos = [
  {
    client: 'Diakonie',
    src: '/images/referenzen/diakonie-logo.svg',
    width: 284,
    height: 93,
  },
  {
    client: 'ebay Kleinanzeigen',
    src: '/images/referenzen/ebay-kleinanzeigen-logo.svg',
    width: 728,
    height: 149,
  },
  {
    client: 'Evangelische Kirche in Hessen und Nassau',
    src: '/images/referenzen/ev-kirche-hessen-logo.svg',
    width: 850,
    height: 182,
  },

  {
    client: 'Evangelische Lutherische Landeskirche Hannovers',
    src: '/images/referenzen/ev-lu-kirche-logo.svg',
    width: 850,
    height: 113,
  },
  {
    client: 'Nordkirche',
    src: '/images/referenzen/logo-nordkirche.svg',
    width: 117,
    height: 82,
  },
  {
    client: 'HUK-Coburg',
    src: '/images/referenzen/huk-coburg-logo.svg',
    width: 117,
    height: 30,
  },

  {
    client: 'Kd Bank',
    src: '/images/referenzen/kd-bank-logo.svg',
    width: 1007,
    height: 288,
  },
  {
    client: 'Mini',
    src: '/images/referenzen/mini-logo.svg',
    width: 133,
    height: 59,
  },
  {
    client: 'Sparkasse Bremen',
    src: '/images/referenzen/sparkasse-bremen-logo.svg',
    width: 380,
    height: 76,
  },
  {
    client: 'Üstra',
    src: '/images/referenzen/uestra-logo.svg',
    width: 1006,
    height: 308,
  },
  {
    client: 'VGH',
    src: '/images/referenzen/vgh-logo.svg',
    width: 480,
    height: 113,
  },
  {
    client: 'VHV Gruppe',
    src: '/images/referenzen/vhv-logo.svg',
    width: 1016,
    height: 143,
  },
  {
    client: 'Welthungerhilfe',
    src: '/images/referenzen/welthungerhilfe.svg',
    width: 159,
    height: 101,
  },
  {
    client: 'Die ZEIT',
    src: '/images/referenzen/zeit-logo.svg',
    width: 346,
    height: 37,
  },
  {
    client: 'Zoo Berlin',
    src: '/images/referenzen/zoo-berlin-logo.png',
    width: 429,
    height: 296,
  },
]

const LogoList: FunctionComponent = () => {
  return (
    <section className='logo-list'>
      <h2>Unsere Kunden</h2>
      <ul>
        {logos.map((logo, idx) => (
          <li key={idx}>
            <Image loader={imageLoader} {...logo} alt={logo.client} />
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
