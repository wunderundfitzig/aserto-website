import { FunctionComponent } from 'react'

type IconProps = {
  color?: string
}

export const HamburgerIcon: FunctionComponent<IconProps> = (props) => {
  const { color = 'black' } = props

  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.421 16.953'>
      <g
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      >
        <path d='M1 8.477h18.421' />
        <path d='M1 1h18.421' />
        <path d='M1 15.953h18.421' />
      </g>
    </svg>
  )
}

export const CloseIcon: FunctionComponent<IconProps> = (props) => {
  const { color = 'black' } = props

  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 15.854 15.854'>
      <g
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      >
        <path d='M1.415 1.414L14.441 14.44' />
        <path d='M1.415 14.44L14.44 1.414' />
      </g>
    </svg>
  )
}
