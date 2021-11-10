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
  const mailParts = props.contact.mail.split('@')

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
        <MoreInfoIcon color={colors.grey} borderWidth={4} borderColor='white' />
      </div>
      <h3 className='front-name'>{props.contact.name}</h3>
      <div className='overlay'>
        <div className='network-links'>
          {props.contact.xing && (
            <a href={props.contact.xing} target='_blank' rel='noreferrer'>
              <XingIcon color='white' />
            </a>
          )}
          {props.contact.linkedIn && (
            <a href={props.contact.linkedIn} target='_blank' rel='noreferrer'>
              <LinkedInIcon color='white' />
            </a>
          )}
        </div>
        <div className='contact'>
          <p className='role'>{props.contact.role}</p>
          <p>{props.contact.phone}</p>
          <a href={`mailto:${props.contact.mail}`}>
            {mailParts[0]}@<wbr />
            {mailParts[1]}
          </a>
        </div>
      </div>
      <style jsx>{`
        .person-card {
          display: grid;
          grid-template-columns: 1fr minmax(0, 1fr);
          grid-template-areas: 'image overlay';
          position: relative;
          margin-bottom: 3rem;
        }

        .image {
          grid-area: image;
        }

        .more-info-icon {
          display: none;
        }

        .front-name {
          position: absolute;
          width: 100%;
          text-transform: uppercase;
          font-weight: 200;
          margin: 0;
          text-align: center;
          font-size: 0.9rem;
          bottom: -1.7rem;
          text-align: left;
          padding-right: 0.5em;
        }

        .overlay {
          grid-area: overlay;
          display: grid;
          grid-template-rows: 1fr min-content;
          align-content: space-between;
          background-color: ${colors.lightBlue};
          color: white;
          padding: 1em;
        }

        .contact {
          text-align: right;
          font-weight: 200;
          margin-bottom: 0;
          font-size: 0.8em;
        }

        .contact .role {
          margin: 0 0 1.5em;
          font-weight: 400;
        }

        .contact p {
          margin: 0.5em 0;
          line-height: 1.3em;
          hyphens: manual;
        }

        .network-links {
          display: grid;
          grid-auto-flow: column;
          justify-content: start;
          grid-gap: 1.5em;
        }

        .network-links a {
          width: 15px;
        }

        @media ${minWidth(breakpoint.xs)} {
          .person-card {
            grid-template-columns: 1fr;
            grid-template-areas: 'image';
            font-size: 0.9em;
          }

          .image {
            overflow: hidden;
          }

          .image :global(img) {
            transition: filter 0.5s;
          }

          .person-card:hover .image :global(img) {
            filter: blur(5px);
            overflow: hidden;
          }

          .more-info-icon {
            display: block;
            position: absolute;
            top: 0.9em;
            left: 1em;
            width: 30px;
          }

          .person-card:hover .more-info-icon {
            display: none;
          }

          .front-name {
            text-align: right;
          }

          .overlay {
            position: absolute;
            display: grid;
            padding: 1.5em 1em 1.5em 1.5em;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            opacity: 0;
            transition: opacity 0.4s;
          }

          .person-card:hover .overlay {
            opacity: 0.9;
          }

          .contact {
            -moz-osx-font-smoothing: grayscale;
            font-size: 1em;
          }

          .network-links a {
            width: 20px;
          }
        }
      `}</style>
    </div>
  )
}

export default PersonCard
