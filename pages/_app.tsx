import type { AppProps } from 'next/app'
import Link from 'next/link'
import { useRouter } from 'next/router'
import AsertoLogo from '../components/aserto-logo'
import Favicons from '../components/favicons'
import Navigation from '../components/navigation'

function App({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()

  return (
    <>
      <Favicons />
      <div className='page-container'>
        <Link href='/'>
          <a className='logo-link'>
            <AsertoLogo />
          </a>
        </Link>
        <Navigation onFrontpage={router.route === '/'} gridArea='navigation' />
        <Component {...pageProps} gridArea='main' />
      </div>
      <style jsx global>{`
        @font-face {
          font-family: 'Sinova';
          font-weight: normal;
          src: url('fonts/312FA8_0_0.woff2') format('woff2'),
            url('fonts/312FA8_0_0.woff') format('woff');
        }

        @font-face {
          font-family: 'Sinova';
          font-weight: bold;
          src: url('fonts/312FA8_1_0.woff2') format('woff2'),
            url('fonts/312FA8_1_0.woff') format('woff');
        }

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Sinova, sans-serif;
        }

        .page-container {
          display: grid;
          grid-template-columns: 1fr 20vw 90px;
          grid-template-rows: auto 1fr;
          grid-template-areas:
            'main main logo'
            'main main navigation';
          padding: 3em 3em 0 0;
          grid-gap: 2em 3em;
          min-height: 100vh;
        }

        .logo-link {
          grid-area: logo;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}

export default App
