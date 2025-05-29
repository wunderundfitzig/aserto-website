import { ImageLoader } from 'next/image'
import { publicConfig } from './config/public-config'

export const imageLoader: ImageLoader = ({ src, width }) => {
  if (src.endsWith('.svg')) {
    return `${publicConfig.backendURL}/images/size/0/${src}`
  }
  return `${publicConfig.backendURL}/images/size/${width}/${src}`
}
