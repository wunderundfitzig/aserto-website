import { FunctionComponent, useEffect, useState } from 'react'
import Image from 'next/image'
import { InstagramPost } from 'lib/types'
import { lightBlue } from 'lib/colors'
import { imageLoader } from 'lib/image-loader'
import { breakpoint, minWidth } from 'lib/breakpoints'
import { queryInstagramPosts } from 'lib/instagram-query'
import Button from 'components/button'

type Props = {
  instagramURL: string
}
const Instagram: FunctionComponent<Props> = (props) => {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await queryInstagramPosts()
      setPosts(posts)
    }
    fetchPosts()
  }, [])

  return (
    <section className='instagram'>
      <h2>Wir auf Instagram</h2>
      <p>
        Übrigens: Auf unserem Instagram-Account aserto-richtungsweisend erfährst
        Du noch mehr über unser Team und was uns aktuell noch so bewegt.
      </p>
      <div className='posts'>
        {posts.map((post) => (
          <a key={post.id} href={post.url} target='_blank' rel='noreferrer'>
            <Image
              loader={imageLoader}
              alt={post.caption}
              sizes={`(min-width: ${breakpoint.s}px) 33vw, 100vw`}
              {...post.image}
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

        h2 {
          text-align: right;
        }

        .posts {
          display: grid;
          grid-gap: 2em;
          margin-bottom: 2em;
          margin-top: 2em;
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
        }
      `}</style>
    </section>
  )
}
export default Instagram
