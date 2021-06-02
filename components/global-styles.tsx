import { FunctionComponent } from 'react'

const GlobalStyles: FunctionComponent = () => {
  return (
    <style jsx global>{`
      @font-face {
        font-family: 'Sinova';
        font-weight: 200;
        src: url('fonts/312FA8_0_0.woff2') format('woff2'),
          url('fonts/312FA8_0_0.woff') format('woff');
      }

      @font-face {
        font-family: 'Sinova';
        font-weight: 400;
        src: url('fonts/312FA8_1_0.woff2') format('woff2'),
          url('fonts/312FA8_1_0.woff') format('woff');
      }

      html,
      body {
        padding: 0;
        margin: 0;
        font-family: Sinova, sans-serif;
      }

      h1 {
        font-weight: 200;
        font-size: 2rem;
        margin: 0 0 2em;
      }

      h2 {
        font-weight: 200;
        font-size: 1.7rem;
        margin: 0 0 1em;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      p {
        font-size: 1em;
        line-height: 1.7em;
        margin: 1em 0;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  )
}

export default GlobalStyles
