import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import { InstagramIcon, LinkedInIcon, XingIcon } from 'components/social-icons'

type IconLinkProps = {
  url: string
  title: string
}
const IconLink: FunctionComponent<IconLinkProps> = (props) => {
  return (
    <>
      <Link href={props.url}>
        <a title={props.title} target='_blank' rel='noreferrer'>
          {props.children}
        </a>
      </Link>
      <style jsx>{`
        a {
          display: block;
          width: 17px;
        }
      `}</style>
    </>
  )
}

type Props = {
  color: string
  align?: 'flex-start' | 'flex-end' | 'center'
  linkedinUrl: string
  xingUrl: string
  instagramUrl: string
}

const SocialLinks: FunctionComponent<Props> = (props) => {
  return (
    <div className='icons'>
      <IconLink title='aserto linkedin profile' url={props.linkedinUrl}>
        <LinkedInIcon color={props.color} />
      </IconLink>
      <IconLink title='aserto xing profile' url={props.xingUrl}>
        <XingIcon color={props.color} />
      </IconLink>
      <IconLink title='aserto instagram profile' url={props.instagramUrl}>
        <InstagramIcon color={props.color} />
      </IconLink>
      {/* <IconLink url='https://twitter.com/aserto_de'>
        <TwitterIcon color={props.color} />
      </IconLink>
      <IconLink url='https://www.facebook.com/aserto.de/'>
        <FacebookIcon color={props.color} />
      </IconLink> */}
      <style jsx>{`
        .icons {
          display: grid;
          grid-auto-flow: column;
          justify-content: flex-start;
          align-items: ${props.align || 'center'};
          grid-gap: 1.5em;
        }
      `}</style>
    </div>
  )
}

export default SocialLinks
