import BlocksHtml from 'components/blocks-html'

type Props = { html: string }
export default function DatenschutzText(props: Props) {
  return (
    <section className='datenschutz-text'>
      <BlocksHtml html={props.html} />
      <style jsx>{`
        section {
          margin-top: 6rem;
          margin-bottom: 6rem;
          max-width: 40em;
        }
      `}</style>
    </section>
  )
}
