import { ImageLoader } from 'next/image'
import { publicConfig } from './config/public-config'
import { ImageType } from './types'

export const backendImage = (image: ImageType): ImageType => {
  if (!image.src.endsWith('.svg')) return image

  return {
    ...image,
    src: `${publicConfig.backendURL}/images/size/0/${image.src}`,
  }
}

export const imageLoader: ImageLoader = ({ src, width }) => {
  return `${publicConfig.backendURL}/images/size/${width}/${src}`
}
