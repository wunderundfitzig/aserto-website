import { FunctionComponent } from 'react'
import Head from 'next/head'
import { MetaFields } from 'lib/kirby-query'

interface MetadataProps {
  pageMeta: MetaFields
  slug: string
  imageUrl?: string
}

const Metadata: FunctionComponent<MetadataProps> = (props) => {
  // remove trailing slash
  const normalizedUrl = `https://www.aserto.de${props.slug.replace(/\/$/, '')}`
  const imageUrl = props.imageUrl || 'https://www.aserto.de/aserto-logo.svg'

  return (
    <Head>
      <title>{props.pageMeta.seodescription}</title>
      <meta
        key='description'
        name='description'
        content={props.pageMeta.seodescription}
      />
      <meta key='og:url' property='og:url' content={normalizedUrl} />
      <meta key='og:type' property='og:type' content='website' />
      <meta key='og:title' property='og:title' content={props.pageMeta.title} />
      <meta
        key='og:description'
        property='og:description'
        content={props.pageMeta.seodescription}
      />
      <meta key='og:image' property='og:image' content={imageUrl} />
      <link key='canonical' rel='canonical' href={normalizedUrl} />
    </Head>
  )
}

export default Metadata
