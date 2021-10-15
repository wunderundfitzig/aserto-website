// this is from https://bl.ocks.org/1wheel/ac027026e8e73bab7b65cfe17e257140
export function curvedPath(data: [number, number][], p: number): string {
  return (
    'M' +
    data
      .map((d, i) => {
        if (!i) return d.join(' ')
        if (i == data.length - 1) return 'L ' + d.join(' ')

        const [x0, y0] = data[i - 1]
        const [x1, y1] = data[i + 0]
        const [x2, y2] = data[i + 1]

        return [
          'L',
          lerp(x1, x0, p),
          lerp(y1, y0, p),
          'C',
          d.join(' '),
          d.join(' '),
          lerp(x1, x2, p),
          lerp(y1, y2, p),
        ].join(' ')
      })
      .join(' ')
  )
}

function lerp(a: number, b: number, t: number) {
  return a + t * (b - a)
}
