import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  XingIcon,
} from 'components/social-icons'
import { breakpoint, minWidth } from 'lib/breakpoints'

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
          width: 17px;
        }
      `}</style>
    </>
  )
}

type Props = {
  color: string
}

const SocialLinks: FunctionComponent<Props> = (props) => {
  return (
    <div className='social-icons'>
      <IconLink url='https://www.linkedin.com/company/aserto'>
        <LinkedInIcon color={props.color} />
      </IconLink>
      <IconLink url='https://www.xing.com/pages/aserto'>
        <XingIcon color={props.color} />
      </IconLink>
      <IconLink url='https://www.instagram.com/aserto_richtungsweisend'>
        <InstagramIcon color={props.color} />
      </IconLink>
      {/* <IconLink url='https://twitter.com/aserto_de'>
        <TwitterIcon color={props.color} />
      </IconLink>
      <IconLink url='https://www.facebook.com/aserto.de/'>
        <FacebookIcon color={props.color} />
      </IconLink> */}
      <style jsx>{`
        .social-icons {
          display: grid;
          grid-auto-flow: column;
          justify-content: flex-end;
          align-items: center;
          grid-gap: 1.5em;
        }

        @media ${minWidth(breakpoint.l)} {
          .social-icons {
            justify-content: flex-start;
          }
        }
      `}</style>
    </div>
  )
}

export default SocialLinks
