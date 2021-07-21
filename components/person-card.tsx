import { FunctionComponent } from 'react'
import Image from 'next/image'
import { Contact, ImageType } from 'lib/types'
import { LinkedInIcon } from './social-icons'
import * as colors from 'lib/colors'

type Props = {
  image: ImageType
  contact: Contact
}
const PersonCard: FunctionComponent<Props> = (props) => {
  return (
    <div className='person-card'>
      <Image {...props.image} alt={`portait of ${props.contact.name}`} />
      <div className='overlay'>
        <address>
          <h3>{props.contact.name}</h3>
          <p>{props.contact.role}</p>
          <p>{props.contact.phone}</p>
          <a href={`mailto:${props.contact.mail}`}>{props.contact.mail}</a>
        </address>
        <div className='social-links'>
          {props.contact.xing && (
            <a href={props.contact.xing}>
              <LinkedInIcon color='white' />
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
          position: relative;
          display: inline-block;
          font-size: 0.8em;
        }
        .overlay {
          display: none;
        }

        .person-card:hover .overlay {
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: ${colors.lightBlue};
          color: white;
          padding: 2em;
        }

        address {
          text-align: center;
          font-style: normal;
          font-weight: 200;
          margin-bottom: 2em;
        }
        address h3 {
          text-transform: uppercase;
          font-weight: 200;
          font-size: 1.5em;
        }

        address p {
          margin: 0.5em 0;
        }

        .social-links {
          display: grid;
          grid-auto-flow: column;
          justify-content: center;
          grid-gap: 2em;
        }

        .social-links a {
          width: 30px;
        }
      `}</style>
    </div>
  )
}

export default PersonCard
