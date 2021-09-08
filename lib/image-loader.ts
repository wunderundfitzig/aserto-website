import { ImageLoader } from 'next/image'

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

const imageResizeTargets = [320, 640, 768, 1024, 1280, 1536, 2048]
export const imageLoader: ImageLoader = ({ src, width }) => {
  const closestWidth = findClosestSize(width, imageResizeTargets)
  let newSrc = src.replace('/_next/static/image/public', '')
  newSrc = newSrc.replace(/\//g, '-')
  const splitted = newSrc.split('.')
  const file = splitted[0]
  const ext = splitted[splitted.length - 1]
  return `/resized-images/public${file}-${closestWidth}.${ext}`
}
