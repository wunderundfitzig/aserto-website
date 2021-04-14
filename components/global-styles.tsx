import { FunctionComponent } from 'react'

const GlobalStyles: FunctionComponent = () => {
  return (
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

      a {
        color: inherit;
        text-decoration: none;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  )
}

export default GlobalStyles
