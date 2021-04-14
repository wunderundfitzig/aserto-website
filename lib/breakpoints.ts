export const breakpoint = {
  xs: 400,
  s: 500,
  m: 600,
  l: 750,
  xl: 900,
  xxl: 1200,
}

export type Breakpoint = keyof typeof breakpoint

export const minWidth = (width: number): string => {
  return `(min-width: ${width}px)`
}
