export type Contact = {
  name: string
  phone: string
  mail: string
  role?: string
  linkedIn?: string
  xing?: string
}

export type ImageType = {
  src: string
  width: number
  height: number
}

export type TeamMember = {
  image: ImageType
  contact: Contact
}

export type InstagramPost = {
  id: string
  url: string
  caption: string
  image: ImageType
}

export type Case = {
  id: string
  title: string
  client: string
  clientShortName: string
  category: string
  task: string
  solution: string
  logo: ImageType
}

export type Client = {
  logo: ImageType
  name: string
}

export type ClientQuote = {
  author: string
  quote: string
}
