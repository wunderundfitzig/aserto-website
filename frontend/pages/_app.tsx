import type { AppProps } from 'next/app'
import Link from 'next/link'
import { useRouter } from 'next/router'
import AsertoLogo from 'components/aserto-logo'
import Favicons from 'components/favicons'
import MainGrid from 'components/main-grid'
import Navigation from 'components/navigation'
import GlobalStyles, { PreloadFont } from 'components/global-styles'
import { breakpoint, minWidth } from 'lib/breakpoints'

export type LocalPageProps = {
  gridArea: string
}

function App({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()
  const isIndexPage = router.pathname === '/'

  return (
    <>
      <Favicons />
      <PreloadFont />
      <MainGrid onFrontpage={isIndexPage}>
        <Link href='/'>
          <a
            className={`logo-link ${isIndexPage ? 'on-frontpage' : undefined}`}
            title='aserto startpage'
          >
            <AsertoLogo />
          </a>
        </Link>
        <Navigation onFrontpage={isIndexPage} gridArea='navigation' />
        <Component {...pageProps} gridArea='main' />
      </MainGrid>
      <GlobalStyles />
      <style jsx>{`
        .logo-link {
          position: sticky;
          top: 1.5rem;
          grid-area: logo;
          max-width: 100%;
          width: 90px;
          min-width: 80px;
          justify-self: flex-end;
          z-index: 1100;
        }

        .logo-link.on-frontpage {
          position: static;
        }

        @media ${minWidth(breakpoint.l)} {
          .logo-link {
            position: static;
            z-index: 110;
            margin-top: 1em;
          }
        }
      `}</style>
    </>
  )
}

export default App
