import { FunctionComponent, ReactElement } from 'react'
import Image from 'next/image'
import { breakpoint, minWidth } from 'lib/breakpoints'

type Props = {
  image: { width: number; height: number; src: string }
  contact: { name: string; phone: string; mail: string }
  children: {
    title: ReactElement
    background: ReactElement
  }
}
const ContactBanner: FunctionComponent<Props> = (props) => {
  return (
    <aside className='contact-banner'>
      <h2>{props.children.title}</h2>
      <div className='image'>
        <Image {...props.image} />
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

        h2 {
          grid-area: title;
          text-align: center;
        }

        .image {
          grid-area: image;
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

        @media ${minWidth(breakpoint.m)} {
          .contact-banner {
            grid-template-areas:
              'title title'
              'address image';
            grid-template-columns: 1fr auto;
            grid-gap: 0 2em;
            justify-items: stretch;
            align-items: end;
          }

          h2 {
            text-align: left;
          }

          .image {
            margin-bottom: 3em;
          }

          address {
            text-align: right;
            padding-bottom: 2em;
          }

          .background {
            grid-area: address / address / image / image;
            padding-top: 10px;
          }
        }
      `}</style>
    </aside>
  )
}

export default ContactBanner
