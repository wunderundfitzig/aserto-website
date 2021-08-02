import { FunctionComponent, ReactElement } from 'react'
import Image from 'next/image'
import { breakpoint, minWidth } from 'lib/breakpoints'
import { Contact, ImageType } from 'lib/types'

type Props = {
  image: ImageType
  contact: Contact
  children: {
    title: ReactElement
    text?: ReactElement
    background: ReactElement
  }
}
const ContactBanner: FunctionComponent<Props> = (props) => {
  return (
    <aside className='contact-banner'>
      <div className='title-wrapper'>
        <h2>{props.children.title}</h2>
        {props.children.text && <p>{props.children.text}</p>}
      </div>
      <div className='image'>
        <Image
          {...props.image}
          layout='responsive'
          alt={`Portait von ${props.contact.name}`}
        />
      </div>
      <address>
        <h3>Ihr Kontakt</h3>
        <p>{props.contact.name}</p>
        <p>{props.contact.phone}</p>
        <a href={`mailto:${props.contact.mail}`}>{props.contact.mail}</a>
      </address>
      <div className='background'>{props.children.background}</div>
      <style jsx>{`
        .contact-banner {
          display: grid;
          grid-template-areas:
            'title'
            'image'
            'address';
          justify-items: center;
        }

        .title-wrapper {
          grid-area: title;
          margin-top: 2em;
          margin-bottom: 2.5rem;
          max-width: 28rem;
        }

        .title-wrapper p {
          max-width: 28rem;
        }

        .image {
          grid-area: image;
          width: 200px;
        }

        address {
          grid-area: address;
          text-align: center;
          font-style: normal;
          font-weight: 200;
          margin: 2em 0 3em;
        }

        address p {
          margin: 0;
        }

        .background {
          grid-area: image / image / address / address;
          pointer-events: none;
          height: 100%;
          padding-top: 100px;
          z-index: -1;
        }

        @media ${minWidth(breakpoint.sm)} {
          .contact-banner {
            grid-template-areas:
              'title title'
              'address image';
            grid-template-columns: minmax(70%, 1fr) minmax(auto, 250px);
            grid-gap: 0 2em;
            justify-items: stretch;
            align-items: end;
          }

          .title-wrapper {
            text-align: left;
            max-width: none;
          }

          .image {
            width: 100%;
          }

          address {
            text-align: right;
            padding-bottom: 0;
            margin-bottom: 0;
          }

          .background {
            grid-area: address / address / image / image;
            padding-top: 50px;
          }
        }

        @media ${minWidth(breakpoint.ml)} {
          .title-wrapper {
            text-align: left;
          }

          .background {
            padding-top: 100px;
          }
        }

        @media ${minWidth(breakpoint.xxl)} {
          .title-wrapper {
            margin: 4em 0 -0.05em;
          }
        }
      `}</style>
    </aside>
  )
}

export default ContactBanner
