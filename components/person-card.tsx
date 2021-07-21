import { FunctionComponent } from 'react'
import { Contact, ImageType } from 'lib/types'
import { LinkedInIcon } from './social-icons'

type Props = {
  image: ImageType
  contact: Contact
}
const PersonCard: FunctionComponent<Props> = (props) => {
  return (
    <div>
      <address>
        <h3>{props.contact.name}</h3>
        <p>{props.contact.role}</p>
        <p>{props.contact.phone}</p>
        <a href={`mailto:${props.contact.mail}`}>{props.contact.mail}</a>
      </address>
      <div className='social-links'>
        <a href={props.contact.xing}>
          <LinkedInIcon color='white' />
        </a>
        <a href={props.contact.xing}>
          <LinkedInIcon color='white' />
        </a>
      </div>
    </div>
  )
}

export default PersonCard
