import { FunctionComponent } from 'react'
import Image from 'next/image'
import { Contact, ImageType } from 'lib/types'
import { ReactElement } from 'react-markdown'
import { imageLoader } from 'lib/image-loader'

type Props = {
  image: ImageType
  reverse?: boolean
  contact: Contact
  children?: {
    title: ReactElement
  }
}
const ContactCard: FunctionComponent<Props> = (props) => {
  return (
    <div className='contact-card'>
      <div className='image'>
        <Image
          loader={imageLoader}
          {...props.image}
          alt={`Portait von ${props.contact.name}`}
        />
      </div>
      <address>
        {props.children?.title ?? <h3>Ihr Kontakt</h3>}
        <p>{props.contact.name}</p>
        <p>{props.contact.phone}</p>
        <a href={`mailto:${props.contact.mail}`}>{props.contact.mail}</a>
      </address>
      <style jsx>{`
        .contact-card {
          display: grid;
          grid-template-columns: ${props.reverse ? '1fr auto' : 'auto 1fr'};
          grid-template-areas: ${props.reverse
            ? '"address image"'
            : '"image address"'};
          grid-gap: 2em;
          align-items: flex-end;
        }

        .image {
          grid-area: image;
        }

        address {
          grid-area: address;
          font-style: normal;
          font-weight: 200;
          margin: 2em 0 0;
          text-align: ${props.reverse ? 'right' : 'left'};
        }

        address p {
          margin: 0;
        }

        @media print {
          .contact-card {
            display: block;
          }
          .image {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
export default ContactCard
