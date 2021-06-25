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

export const ArrowIcon: FunctionComponent<IconProps & { rotate?: number }> = (
  props
) => {
  const { color = 'black', rotate = 0 } = props
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18.055 35.887'>
      <path
        fill={color}
        transform={`rotate(${rotate}, 9.0275, 17.9435)`}
        d='M15.493.005A2.557 2.557 0 0117.462 4.2L6.004 17.908l11.049 13.735a2.615 2.615 0 11-4.118 3.223L.582 19.52a2.558 2.558 0 010-3.248L13.371.925a2.558 2.558 0 012.122-.92z'
      />
    </svg>
  )
}
