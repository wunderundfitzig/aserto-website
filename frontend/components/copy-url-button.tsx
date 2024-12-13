'use client'

import {
  ButtonHTMLAttributes,
  FunctionComponent,
  useEffect,
  useState,
} from 'react'
import Button from './button'

type Status = 'ready' | 'success' | 'failed'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  color: string
}
const CopyUrlButton: FunctionComponent<Props> = (props) => {
  const [status, setStaus] = useState<Status>('ready')

  async function copyUrlToclipboard() {
    const url = window.location.href
    try {
      await navigator.clipboard.writeText(url)
      setStaus('success')
    } catch {
      setStaus('failed')
    }
  }

  useEffect(() => {
    if (status === 'ready') return
    setTimeout(() => {
      setStaus('ready')
    }, 1500)
  }, [status])

  return (
    <div className='copy-url-button'>
      <Button
        {...props}
        disabled={status !== 'ready'}
        onClick={copyUrlToclipboard}
      >
        {props.children}
      </Button>
      {status === 'success' && <span>kopiert</span>}
      {status === 'failed' && <span>fehler</span>}

      <style jsx>{`
        .copy-url-button {
          position: relative;
          display: inline;
        }

        span {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          color: white;
          justify-content: center;
          align-items: center;
          background-color: ${props.color};
          font-size: 0.9em;
          border-radius: 4px;
          font-family: 'Usherwood', serif;
          font-weight: bold;
          letter-spacing: 0.06em;
          cursor: default;
        }
      `}</style>
    </div>
  )
}

export default CopyUrlButton
