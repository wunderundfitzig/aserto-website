import { FunctionComponent } from 'react'
import Image from 'next/image'
import { InstagramPost } from 'lib/types'
import { lightBlue, backgroundBlue } from 'lib/colors'
import { imageLoader, backendImage } from 'lib/image-loader'
import { breakpoint, minWidth } from 'lib/breakpoints'
import Button from 'components/button'
import { TeamTriangleLine } from 'components/curves'

type Props = {
  instagramURL: string
  posts: InstagramPost[]
}
const Instagram: FunctionComponent<Props> = (props) => {
  return (
    <section className='instagram'>
      <TeamTriangleLine
        className='line'
        color={backgroundBlue}
        preserveAspectRatio='none'
      />
      <h2>Wir auf Instagram</h2>
      <p>
        Übrigens: Auf unserem Instagram-Account aserto-richtungsweisend erfährst
        Du noch mehr über unser Team und was uns aktuell noch so bewegt.
      </p>
      <div className='posts'>
        {props.posts.map((post) => (
          <a
            key={post.id}
            href={post.url}
            target='_blank'
            rel='noreferrer'
            className='post'
          >
            <Image
              loader={imageLoader}
              alt={''}
              sizes={`(min-width: ${breakpoint.s}px) 33vw, 100vw`}
              {...backendImage(post.image)}
            />
          </a>
        ))}
      </div>
      <div className='button'>
        <Button
          tag='a'
          href={props.instagramURL}
          target='_blank'
          rel='noreferrer'
          color={lightBlue}
        >
          zu Instagram
        </Button>
      </div>
      <style jsx>{`
        .instagram {
          display: grid;
          width: 100%;
          margin-bottom: 8rem;
        }

        .instagram :global(.line) {
          height: 150px;
          margin-top: -6rem;
          margin-bottom: 4rem;
        }

        h2 {
          text-align: right;
        }

        .posts {
          display: grid;
          grid-gap: 2em;
          margin-bottom: 2em;
          margin-top: 2em;
        }

        .post :global(img) {
          width: 100%;
          height: auto;
        }

        p {
          text-align: right;
          max-width: 35em;
          justify-self: self-end;
        }

        .button {
          justify-self: left;
        }

        @media ${minWidth(breakpoint.s)} {
          .posts {
            grid-template-columns: 1fr 1fr 1fr;
          }

          .instagram :global(.line) {
            height: 200px;
            margin-top: -6rem;
            margin-bottom: 4rem;
          }
        }

        @media ${minWidth(breakpoint.m)} {
          .instagram :global(.line) {
            display: block;
            margin-bottom: -1.5rem;
            height: 250px;
            margin-top: -6rem;
          }
        }

        @media ${minWidth(breakpoint.xl)} {
          .instagram :global(.line) {
            width: calc(100% - 12rem);
            height: 300px;
            margin-left: 12rem;
            margin-top: -4rem;
          }
        }
      `}</style>
    </section>
  )
}
export default Instagram
