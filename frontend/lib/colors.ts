import { tint } from 'polished'

export const backgroundBlue = '#A8C9E8'
export const lightBlue = '#5F99D2'
export const blue = '#0066C2'

export const backgroundGreen = '#EDF1EE'
export const lightGreen = '#A8BDB0'
export const green = '#397964'

export const backgroundDenim = '#566F89'
export const lightDenim = '#566F89'
export const denim = '#1A3D61'

export const lightRed = '#BE6878'
export const backgroundRed = '#EEE3E5'
export const red = '#9D1830'

export const backgroundBeige = '#F9F2E4'
export const lightBeige = '#E4BA77'
export const beige = '#B67F30'

export const backgroundGrey = '#D8D8D7'
export const grey = '#626262'

export const categoryColors = {
  purpose: beige,
  team: blue,
  leistungen: green,
  referenzen: denim,
  karriere: red,
}

export const footerBackgroundColors = {
  purpose: tint(0.5, backgroundBeige),
  team: tint(0.5, backgroundBlue),
  leistungen: 'white',
  referenzen: 'white',
  karriere: 'white',
  kontakt: tint(0.5, backgroundGrey),
  datenschutz: tint(0.5, backgroundGrey),
  nachhaltigkeitsbericht: tint(0.5, backgroundGrey),
  gefaehrdungsbeurteilung: 'white',
}
