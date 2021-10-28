import { ImageLoader } from 'next/image'
import { publicConfig } from './config/public-config'

// find closest resized element
function findClosestSize(width: number, list: number[]): number {
  return list.reduce((a: number, b: number) => {
    const aDiff = Math.abs(a - width)
    const bDiff = Math.abs(b - width)

    if (aDiff == bDiff) {
      return a > b ? a : b
    } else {
      return bDiff < aDiff ? b : a
    }
  })
}

const imageResizeTargets = [
  16,
  32,
  48,
  64,
  96,
  128,
  256,
  384,
  640,
  750,
  828,
  1080,
  1200,
  1920,
  2048,
  3840,
]
export const imageLoader: ImageLoader = ({ src, width }) => {
  if (!src.startsWith('/_next/static/') && !src.startsWith('/images')) {
    return `${publicConfig.backendURL}/images/size/${width}/${src}`
  }
  const closestWidth = findClosestSize(width, imageResizeTargets)
  let newSrc = src.replace('/_next/static/image/public', '')
  newSrc = newSrc.replace(/\//g, '-')
  const splitted = newSrc.split('.')
  const file = splitted[0]
  const ext = splitted[splitted.length - 1]
  if (ext === 'svg') return `${src}#${width}`
  return `/resized-images/public${file}-${closestWidth}.${ext}#${width}`
}
