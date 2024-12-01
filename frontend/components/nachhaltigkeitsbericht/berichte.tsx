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
            <a href={pdf.url} download={pdf.fileName}>
              {pdf.label || pdf.fileName}
            </a>
          </li>
        ))}
      </ul>
      <style jsx>{`
        p {
          max-width: 80ch;
        }
      `}</style>
    </section>
  )
}
