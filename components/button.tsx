import { ButtonHTMLAttributes, FunctionComponent } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonHTMLAttributes<HTMLAnchorElement> & {
    color: string
    tag?: 'button' | 'a'
  }
const Button: FunctionComponent<Props> = (props) => {
  const { color, tag = 'button', ...elemProps } = props
  return (
    <>
      {tag === 'button' ? (
        <button {...elemProps} className='button'>
          {props.children}
        </button>
      ) : (
        <a {...elemProps} className='button'>
          {props.children}
        </a>
      )}
      <style jsx>{`
        .button {
          font-size: 0.9em;
          background-color: ${color};
          color: white;
          border: 0;
          border-radius: 4px;
          padding: 0.5em 1em;
          box-shadow: none;
          font-family: Userwood serif;
          letter-spacing: 0.06em;
        }
      `}</style>
    </>
  )
}

export default Button
