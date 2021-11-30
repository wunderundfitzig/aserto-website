import { GetStaticProps, NextPage } from 'next'
import { PageProps, queryPageData, SiteQueryResult } from 'lib/kirby-query'
import { ImageType, TeamMember } from 'lib/types'
import TeamHeader from 'components/team/team-header'
import UnserTeam from 'components/team/unser-team'
import DasSindWir from 'components/team/das-sind-wir'
import FreieMitarbeiter from 'components/team/freie-mitarbeiter'
import Metadata from 'components/metadata'
import Footer from 'components/footer'
import Instagram from 'components/team/instagram'
import { publicConfig } from 'lib/config/public-config'

type LeistungenPageProps = {
  teamMembers: TeamMember[]
  freieMitarbeiterTitle: string
  freieMitarbeiter: string
  instagramPosts: {
    id: string
    url: string
    caption: string
    image: ImageType
  }[]
}
const LeistungenPage: NextPage<PageProps<LeistungenPageProps>> = (props) => {
  return (
    <>
      <article style={{ gridArea: props.gridArea }}>
        <Metadata pageMeta={props.pageData} slug='/team' />
        <main>
          <TeamHeader title={props.pageData.title} />
          <UnserTeam />
          <DasSindWir members={props.pageData.teamMembers} />
          <FreieMitarbeiter
            title={props.pageData.freieMitarbeiterTitle}
            names={props.pageData.freieMitarbeiter}
          />
          <Instagram
            posts={props.pageData.instagramPosts}
            instagramURL={props.siteInfo.instagramUrl}
          />
        </main>
      </article>
      <Footer gridArea='footer' siteInfo={props.siteInfo} />
    </>
  )
}

export const getStaticProps: GetStaticProps<
  SiteQueryResult<LeistungenPageProps>
> = async () => {
  const result = await queryPageData<LeistungenPageProps>({
    query: "page('team')",
    select: {
      freieMitarbeiterTitle: true,
      freieMitarbeiter: true,
      teamMembers: {
        query: 'page.children',
        select: {
          image: {
            query: 'page.image',
            select: {
              src: 'file.id',
              width: true,
              height: true,
            },
          },
          contact: {
            query: 'page',
            select: {
              name: 'page.title',
              phone: 'page.phone',
              mail: 'page.email',
              role: 'page.position',
              linkedIn: 'page.linkedinurl',
              xing: 'page.xingurl',
            },
          },
        },
      },
    },
  })
  const instagramPostsRes = await fetch(
    `${publicConfig.backendURL}/instagram/feed`
  )
  const instagramPosts: {
    id: string
    caption: string
    permalink: string
    media_url: string
  }[] = await instagramPostsRes.json()
  const props = {
    ...result,
    pageData: {
      ...result.pageData,
      instagramPosts: instagramPosts.slice(0, 3).map((post) => ({
        id: post.id,
        caption: post.caption,
        url: post.permalink,
        image: {
          src: `assets/instagram/media/${post.id}.jpg`,
          width: 1280,
          height: 1280,
        },
      })),
    },
  }
  return { props }
}

export default LeistungenPage
