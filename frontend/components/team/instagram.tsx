import { FunctionComponent } from 'react'
import Image from 'next/image'
import { ImageType } from 'lib/types'
import { lightBlue } from 'lib/colors'
import { imageLoader } from 'lib/image-loader'
import Button from 'components/button'

type Props = {
  posts: { id: string; url: string; caption: string; image: ImageType }[]
}
const Instagram: FunctionComponent<Props> = (props) => {
  return (
    <section className='instagram'>
      <h2>Wir auf Instagram</h2>
      <p>
        Übrigens: Auf unserem Instagram-Account aserto-richtungsweisend erfährst
        Du noch mehr über unser Team und was uns aktuell noch so bewegt.
      </p>
      {props.posts.map((post) => (
        <Image
          loader={imageLoader}
          alt={post.caption}
          key={post.id}
          {...post.image}
        />
      ))}
      <Button color={lightBlue}>zu Instagram</Button>
      <style jsx>{`
        .instagram {
          display: grid;
          width: 100%;
        }

        h2 {
          text-align: right;
        }

        p {
          text-align: right;
          max-width: 35em;
          justify-self: self-end;
        }

        .instagram :global(button) {
          justify-self: left;
        }
      `}</style>
    </section>
  )
}
export default Instagram
