import Document, { Html, Head, Main, NextScript } from 'next/document'
import { JSX } from 'react'

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang='de'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
