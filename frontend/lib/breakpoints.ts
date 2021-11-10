export const breakpoint = {
  xs: 400,
  s: 500,
  sm: 600,
  m: 675,
  ml: 750,
  l: 900,
  xl: 1000,
  xxl: 1200,
} as const

export type Breakpoint = keyof typeof breakpoint

export const minWidth = (width: number): string => {
  return `(min-width: ${width}px)`
}
