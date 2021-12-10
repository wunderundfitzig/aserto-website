import { FunctionComponent } from 'react'
import * as colors from 'lib/colors'
import ContactBanner from 'components/contact-banner'
import { formatAlignment } from 'components/curves'
import { Contact, ImageType } from 'lib/types'

const Background: FunctionComponent = () => {
  return (
    <svg
      className='background'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='100 0 200 50'
      preserveAspectRatio={formatAlignment({
        alignY: 'Min',
        alignX: 'Mid',
        fit: 'slice',
      })}
    >
      <path d='M0 100Q300 -120 400 100z' fill={colors.backgroundDenim} />

      <style jsx>{`
        .background {
          width: 100%;
          height: 100%;
          overflow: visible;
          opacity: 0.5;
        }
        svg {
          overflow: visible;
        }
      `}</style>
    </svg>
  )
}

type Props = {
  contact: Contact
  image: ImageType
}
const ReferenzenContact: FunctionComponent<Props> = (props) => {
  return (
    <ContactBanner image={props.image} contact={props.contact}>
      {{
        title: <>Haben Sie Fragen zu unseren Referenzen?</>,
        background: <Background />,
      }}
    </ContactBanner>
  )
}
export default ReferenzenContact
