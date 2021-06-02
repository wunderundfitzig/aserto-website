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
      <MainGrid>
        <Link href='/'>
          <a className='logo-link'>
            <AsertoLogo />
          </a>
        </Link>
        <Navigation onFrontpage={router.route === '/'} gridArea='navigation' />
        <Component {...pageProps} gridArea='main' />
        {!isIndexPage && <Footer gridArea='footer' />}
      </MainGrid>
      <GlobalStyles />
      <style jsx>{`
        .logo-link {
          position: relative;
          grid-area: logo;
          z-index: 2;
        }

        @media ${minWidth(breakpoint.xl)} {
          .logo-link {
            margin-top: 1em;
          }
        }
      `}</style>
    </>
  )
}

export default App
