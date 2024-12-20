import { queryPageData } from 'lib/kirby-query'
import { InstagramPost, TeamMember } from 'lib/types'

import Footer from 'components/footer'
import Metadata from 'components/metadata'
import DasSindWir from 'components/team/das-sind-wir'
import FreieMitarbeiter from 'components/team/freie-mitarbeiter'
import Instagram from 'components/team/instagram'
import TeamHeader from 'components/team/team-header'
import UnserTeam from 'components/team/unser-team'

type PageData = {
  teamMembers: TeamMember[]
  freieMitarbeiterTitle: string
  freieMitarbeiter: string
  instagramPosts: InstagramPost[]
}
export default async function Team() {
  const result = await queryPageData<PageData>({
    query: "page('team')",
    select: {
      freieMitarbeiterTitle: true,
      freieMitarbeiter: true,
      teamMembers: {
        query: 'page.children.listed',
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
      instagramPosts: {
        query: 'page.instagramPosts.toStructure',
        select: {
          url: true,
          image: {
            query: 'structureItem.image.toFile',
            select: {
              src: 'file.id',
              width: true,
              height: true,
            },
          },
        },
      },
    },
  })

  return (
    <>
      <article style={{ gridArea: 'main' }}>
        <Metadata pageMeta={result.pageData} slug='/team' />
        <main>
          <TeamHeader title={result.pageData.title} />
          <UnserTeam />
          <DasSindWir members={result.pageData.teamMembers} />
          <FreieMitarbeiter
            title={result.pageData.freieMitarbeiterTitle}
            names={result.pageData.freieMitarbeiter}
          />
          <Instagram
            instagramURL={result.siteInfo.instagramUrl}
            posts={result.pageData.instagramPosts}
          />
        </main>
      </article>
      <Footer gridArea='footer' siteInfo={result.siteInfo} />
    </>
  )
}
