import { ImageLoader } from 'next/image'

export const imageLoader: ImageLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}
