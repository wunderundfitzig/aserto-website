'use client'

import { FunctionComponent } from 'react'

const Favicons: FunctionComponent = () => {
  return (
    <>
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
      <meta name='msapplication-config' content='/favicons/browserconfig.xml' />
      <meta name='theme-color' content='#a8c9e8' />
    </>
  )
}

export default Favicons
