import type { AppProps } from 'next/app'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import AsertoLogo from 'components/aserto-logo'
import Favicons from 'components/favicons'
import MainGrid from 'components/main-grid'
import Navigation from 'components/navigation'
import GlobalStyles from 'components/global-styles'
import { breakpoint, minWidth } from 'lib/breakpoints'

const FontTrackingScript = dynamic(
  () => import('components/font-tracking-script'),
  { ssr: false }
)

export type LocalPageProps = {
  gridArea: string
}

function App({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()
  const isIndexPage = router.pathname === '/'

  return (
    <>
      <Favicons />
      <FontTrackingScript />
      <MainGrid onFrontpage={isIndexPage}>
        <Link href='/'>
          <a className='logo-link' title='aserto startpage'>
            <AsertoLogo />
          </a>
        </Link>
        <Navigation onFrontpage={isIndexPage} gridArea='navigation' />
        <Component {...pageProps} gridArea='main' />
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
          z-index: 110;
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