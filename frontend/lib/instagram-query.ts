import { publicConfig } from 'lib/config/public-config'
import { InstagramPost } from 'lib/types'

type RawPost = {
  id: string
  caption: string
  permalink: string
  media_url: string
}

export async function queryInstagramPosts(): Promise<InstagramPost[]> {
  const result = await fetch(`${publicConfig.backendURL}/instagram/feed`)
  const instagramPosts: RawPost[] = await result.json()

  return instagramPosts.slice(0, 3).map((post) => ({
    id: post.id,
    caption: post.caption,
    url: post.permalink,
    image: {
      src: `assets/instagram/media/${post.id}.jpg`,
      width: 1280,
      height: 1280,
    },
  }))
}
