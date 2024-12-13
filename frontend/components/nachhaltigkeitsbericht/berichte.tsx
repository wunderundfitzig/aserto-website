import * as colors from 'lib/colors'
import { breakpoint, minWidth } from 'lib/breakpoints'
import { MoreInfoIcon } from 'components/icons'

type Props = {
  title: string
  description: string
  pdfs: { url: string; fileName: string; label?: string }[]
}
export default function Berichte(props: Props) {
  return (
    <section className='berichte'>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <ul>
        {props.pdfs.map((pdf, idx) => (
          <li key={idx}>
            <a href={pdf.url} target='_blank' download={`${pdf.fileName}.pdf`}>
              <span>{pdf.label || pdf.fileName}</span>
              <MoreInfoIcon color={colors.grey} />
            </a>
          </li>
        ))}
      </ul>
      <style jsx>{`
        p {
          max-width: 80ch;
        }

        .berichte {
          padding-top: 4rem;
          padding-bottom: 4rem;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        a {
          display: grid;
          grid-template-columns: 1fr 30px;
          align-items: center;
          grid-gap: 0 1.5em;
          padding: 1em 0;
          border-bottom: 2px solid ${colors.grey};
          text-transform: uppercase;
        }

        li:last-child a {
          border-bottom: 0;
        }

        @media ${minWidth(breakpoint.l)} {
          .berichte {
            margin: 4rem 0;
          }
        }
      `}</style>
    </section>
  )
}
