import { FunctionComponent, ReactNode } from 'react'

type Props = {
  emphasisColor: string
  children: {
    roofline: ReactNode
    sloagen: ReactNode
  }
}
const Sloagen: FunctionComponent<Props> = (props) => {
  return (
    <div>
      <p className='roofline'>{props.children.roofline}</p>
      <p className='sloagen'>{props.children.sloagen}</p>
      <style jsx>{`
        .roofline {
          font-size: 0.8em;
        }
        .sloagen {
          font-family: 'Usherwood';
          font-size: 2.5em;
          font-weight: bold;
          margin: 0;
        }

        .sloagen :global(em) {
          color: ${props.emphasisColor};
          font-style: normal;
        }
      `}</style>
    </div>
  )
}

export default Sloagen
