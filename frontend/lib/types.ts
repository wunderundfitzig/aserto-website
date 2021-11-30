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
