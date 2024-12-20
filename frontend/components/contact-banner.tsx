import { FunctionComponent, ReactElement } from 'react'
import Image from 'next/image'
import { breakpoint, minWidth } from 'lib/breakpoints'
import { Contact, ImageType } from 'lib/types'
import { imageLoader } from 'lib/image-loader'

type Props = {
  anchor?: string
  image: ImageType
  contact: Contact
  contactCardTitle?: string
  children: {
    title: ReactElement
    text?: ReactElement
    background: ReactElement
  }
}
const ContactBanner: FunctionComponent<Props> = (props) => {
  return (
    <aside
      className={`contact-banner ${props.children.text ? 'with-text' : ''}`}
    >
      <div className='title-wrapper'>
        <h2 id={props.anchor}>{props.children.title}</h2>
        {props.children.text && <p>{props.children.text}</p>}
      </div>
      <div className='image'>
        <Image
          loader={imageLoader}
          style={{ width: '100%', height: 'auto' }}
          {...props.image}
          alt={`Portait von ${props.contact.name}`}
        />
      </div>
      <address>
        <h3>{props.contactCardTitle || 'Ihr Kontakt'}</h3>
        <p>{props.contact.name}</p>
        <p>{props.contact.phone}</p>
        <a href={`mailto:${props.contact.mail}`}>{props.contact.mail}</a>
      </address>
      <div className='background'>{props.children.background}</div>
      <style jsx>{`
        .contact-banner {
          position: relative;
          display: grid;
          grid-template-areas:
            'title'
            'image'
            'address';
          justify-items: center;
          margin-bottom: 2rem;
          z-index: 110;
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
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          grid-area: image / image / address / address;
          pointer-events: none;
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
            margin: 4em 0 2em;
          }

          .with-text .title-wrapper {
            margin-bottom: 0;
          }
        }
      `}</style>
    </aside>
  )
}

export default ContactBanner
