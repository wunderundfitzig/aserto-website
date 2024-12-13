'use client'

import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FunctionComponent,
} from 'react'

type Props =
  | (ButtonHTMLAttributes<HTMLButtonElement> & {
      color: string
      tag?: 'button'
    })
  | (AnchorHTMLAttributes<HTMLAnchorElement> & { color: string; tag: 'a' })

const Button: FunctionComponent<Props> = (props) => {
  return (
    <>
      {props.tag === 'a' ? (
        <a {...props} className='button'>
          {props.children}
        </a>
      ) : (
        <button {...props} className='button'>
          {props.children}
        </button>
      )}
      <style jsx>{`
        .button {
          font-size: 0.9em;
          background-color: ${props.color};
          color: white;
          border: 0;
          border-radius: 4px;
          padding: 0.6em 1.2em;
          box-shadow: none;
          font-family: 'Usherwood', serif;
          font-weight: bold;
          letter-spacing: 0.06em;
          text-align: center;
          cursor: pointer;
        }

        .button:disabled {
          opacity: 0.5;
        }
      `}</style>
    </>
  )
}

export default Button
