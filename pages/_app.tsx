import Head from 'next/head'
import type { AppProps } from 'next/app'
import AsertoLogo from '../components/aserto-logo'
import Navigation from '../components/navigation'

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicons/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicons/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicons/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicons/safari-pinned-tab.svg'
          color='#5f99d2'
        />
        <link rel='shortcut icon' href='/favicons/favicon.ico' />
        <meta name='msapplication-TileColor' content='#5f99d2' />
        <meta
          name='msapplication-config'
          content='/favicons/browserconfig.xml'
        />
        <meta name='theme-color' content='#a8c9e8' />
      </Head>
      <div className='page-container'>
        <AsertoLogo gridArea='logo' />
        <Navigation onFrontpage gridArea='navigation' />
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
