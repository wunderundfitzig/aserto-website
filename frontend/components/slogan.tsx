import { CSSProperties, ReactNode } from 'react'

type Props = {
  emphasisColor: string
  rightAligned?: boolean
  backgroundHighlight?: boolean
  small?: boolean
  children: {
    roofline?: ReactNode
    sloagen: ReactNode
  }
}
export default function Slogan(props: Props) {
  return (
    <div
      style={{ '--emphasis-color': props.emphasisColor } as CSSProperties}
      className={
        [
          props.rightAligned ? 'text-right' : undefined,
          props.backgroundHighlight ? 'bg-white/80' : undefined,
        ]
          .filter(Boolean)
          .join(' ') || undefined
      }
    >
      {props.children.roofline && (
        <p className='text-[1em] uppercase mt-0 mb-[0.2em] l:text-[0.8em]'>
          {props.children.roofline}
        </p>
      )}
      <p
        className={`font-['Usherwood'] leading-[1.4em] font-bold m-0 [&_em]:text-(--emphasis-color) [&_em]:not-italic ${
          props.small
            ? 'text-[1.2em] s:text-[1.4em] ml:text-[1.7em] l:text-[2em]'
            : 'text-[1.6em] s:text-[1.8em] ml:text-[2.2em] l:text-[2.5em]'
        }`}
      >
        {props.children.sloagen}
      </p>
    </div>
  )
}
