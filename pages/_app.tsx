import type { AppProps } from 'next/app'
import Link from 'next/link'
import { useRouter } from 'next/router'
import AsertoLogo from 'components/aserto-logo'
import Favicons from 'components/favicons'
import MainGrid from 'components/main-grid'
import Navigation from 'components/navigation'
import GlobalStyles from 'components/global-styles'
import { breakpoint, minWidth } from 'lib/breakpoints'
import Footer from 'components/footer'

export type PageProps = {
  gridArea: string
}

function App({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()
  const isIndexPage = router.pathname === '/'

  return (
    <>
      <Favicons />
      <MainGrid onFrontpage={isIndexPage}>
        <Link href='/'>
          <a className='logo-link'>
            <AsertoLogo />
          </a>
        </Link>
        <Navigation onFrontpage={isIndexPage} gridArea='navigation' />
        <Component {...pageProps} gridArea='main' />
        {!isIndexPage && <Footer gridArea='footer' />}
      </MainGrid>
      <GlobalStyles />
      <style jsx>{`
        .logo-link {
          position: relative;
          grid-area: logo;
          z-index: 2;
          max-width: 100%;
          width: 90px;
          min-width: 80px;
          justify-self: flex-end;
        }

        @media ${minWidth(breakpoint.l)} {
          .logo-link {
            margin-top: 1em;
          }
        }
      `}</style>
    </>
  )
}

export default App
