import { FunctionComponent } from 'react'
import Image from 'next/image'
import { Contact, ImageType } from 'lib/types'
import * as colors from 'lib/colors'
import { breakpoint, minWidth } from 'lib/breakpoints'
import { LinkedInIcon, XingIcon } from 'components/social-icons'
import { MoreInfoIcon } from 'components/icons'
import { imageLoader } from 'lib/image-loader'

type Props = {
  image: ImageType
  contact: Contact
}
const PersonCard: FunctionComponent<Props> = (props) => {
  return (
    <div className='person-card'>
      <div className='image'>
        <Image
          loader={imageLoader}
          {...props.image}
          layout='responsive'
          alt={`portait of ${props.contact.name}`}
        />
      </div>
      <div className='more-info-icon'>
        <MoreInfoIcon color={colors.categoryColors.team} />
      </div>
      <div className='overlay'>
        <h3>{props.contact.name}</h3>
        <div className='contact'>
          <p className='role'>{props.contact.role}</p>
          <p>{props.contact.phone}</p>
          <a href={`mailto:${props.contact.mail}`}>{props.contact.mail}</a>
        </div>
        <div className='social-links'>
          {props.contact.xing && (
            <a href={props.contact.xing}>
              <XingIcon color='white' />
            </a>
          )}
          {props.contact.linkedIn && (
            <a href={props.contact.linkedIn}>
              <LinkedInIcon color='white' />
            </a>
          )}
        </div>
      </div>
      <style jsx>{`
        .person-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-areas: 'image overlay';
          width: 100%;
          position: relative;
          font-size: 0.8em;
        }

        .image {
          grid-area: image;
        }

        .more-info-icon {
          position: absolute;
          top: 0.9em;
          left: 1em;
          width: 30px;
        }
        .overlay {
          grid-area: overlay;
          display: grid;
          align-content: space-between;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: ${colors.lightBlue};
          color: white;
          padding: 2em 1em 1em;
        }

        h3 {
          text-transform: uppercase;
          font-weight: 200;
          font-size: 1.4em;
          margin: 0;
          text-align: center;
        }

        .contact {
          text-align: center;
          font-weight: 200;
          margin-bottom: 1em;
        }

        .contact .role {
          margin: 0.3em 0 0.6em;
        }

        .contact p {
          margin: 0.2em 0;
          line-height: 1.2em;
        }

        .social-links {
          display: grid;
          grid-auto-flow: column;
          justify-content: center;
          grid-gap: 1.5em;
        }

        .social-links a {
          width: 15px;
        }

        @media ${minWidth(breakpoint.xs)} {
          .person-card {
            grid-template-columns: 1fr;
            grid-template-areas: 'image';
            font-size: 0.9em;
          }
          .overlay {
            display: none;
            grid-area: image;
          }

          .person-card:hover .overlay {
            display: grid;
            padding: 2em 1em 2em;
          }

          .social-links a {
            width: 20px;
          }
        }
      `}</style>
    </div>
  )
}

export default PersonCard
