import Head from 'next/head'
import { FunctionComponent } from 'react'
import { breakpoint, minWidth } from 'lib/breakpoints'

export const PreloadFont: FunctionComponent = () => (
  <Head>
    {/* preload Sinova front in weight 200 */}
    <link
      rel='preload'
      href='/fonts/312FA8_0_0.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
    />
  </Head>
)
const GlobalStyles: FunctionComponent = () => (
  <style jsx global>{`
    @font-face {
      font-family: 'Sinova';
      font-weight: 200;
      src: url('/fonts/312FA8_0_0.woff2') format('woff2'),
        url('/fonts/312FA8_0_0.woff') format('woff');
      font-display: swap;
    }

    @font-face {
      font-family: 'Sinova';
      font-weight: 400;
      src: url('/fonts/312FA8_1_0.woff2') format('woff2'),
        url('/fonts/312FA8_1_0.woff') format('woff');
      font-display: swap;
    }

    @font-face {
      font-family: 'Usherwood';
      font-weight: 600;
      src: url('/fonts/ee5e2d27-2565-4011-ab30-5723a1c3ecd2.woff2')
          format('woff2'),
        url('/fonts/e1438d26-2ed8-48ac-bb76-58de1a04d32c.woff') format('woff');
      font-display: swap;
    }

    html,
    body {
      font-size: 15px;
      padding: 0;
      margin: 0;
      font-family: Sinova, sans-serif;
      scroll-behavior: smooth;
      overflow-wrap: break-word;
    }

    h1 {
      font-weight: 200;
      font-size: 2rem;
      margin: 1em 0 2em;
    }

    h2 {
      font-weight: 200;
      font-size: 1.7em;
      line-height: 1.4em;
      margin: 0 0 1em;
    }

    h3 {
      font-weight: 400;
      font-size: 1.1em;
      margin: 0 0 1em;
    }

    a {
      color: inherit;
      text-decoration: none;
      word-break: break-word;
    }

    p {
      font-size: 1em;
      line-height: 1.9em;
      margin: 1em 0;
      font-weight: 200;
    }

    * {
      box-sizing: border-box;
    }

    @media ${minWidth(breakpoint.ml)} {
      html,
      body {
        font-size: 16px;
      }

      h1 {
        margin-top: 0;
      }
    }
  `}</style>
)

export default GlobalStyles
