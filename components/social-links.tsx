import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from 'components/social-icons'

type IconLinkProps = {
  url: string
}
const IconLink: FunctionComponent<IconLinkProps> = (props) => {
  return (
    <>
      <Link href={props.url}>
        <a target='_blank'>{props.children}</a>
      </Link>
      <style jsx>{`
        a {
          display: block;
          width: 20px;
        }
      `}</style>
    </>
  )
}

const SocialLinks: FunctionComponent = () => {
  return (
    <div className='social-icons'>
      <IconLink url='https://www.linkedin.com/company/aserto'>
        <LinkedInIcon />
      </IconLink>
      <IconLink url='https://www.instagram.com/aserto_richtungsweisend'>
        <InstagramIcon />
      </IconLink>
      <IconLink url='https://twitter.com/aserto_de'>
        <TwitterIcon />
      </IconLink>
      <IconLink url='https://www.facebook.com/aserto.de/'>
        <FacebookIcon />
      </IconLink>
      <style jsx>{`
        .social-icons {
          display: grid;
          grid-auto-flow: column;
          justify-content: start;
          align-items: center;
          grid-gap: 1.5em;
        }
      `}</style>
    </div>
  )
}

export default SocialLinks
