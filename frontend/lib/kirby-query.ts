import { privateConfig } from 'lib/config/private-config'
import { publicConfig } from 'lib/config/public-config'

export const getBasicAuthHeader = (
  user: string,
  password: string,
): Record<'Authorization', string> => {
  const credentials = Buffer.from(`${user}:${password}`).toString('base64')
  return {
    Authorization: `Basic ${credentials}`,
  }
}

const siteInfoSelect = {
  address: true,
  mapsUrl: true,
  phoneNumber: true,
  infoMail: true,
  jobMail: true,
  linkedinUrl: true,
  xingUrl: true,
  instagramUrl: true,
}

const metaFieldsSelect = {
  title: true,
  seotitle: 'page.seotitle.or(page.title)',
  seodescription: true,
}

export type MetaFields = {
  title: string
  seotitle: string
  seodescription: string
}

export type SiteInfo = {
  address: string
  mapsUrl: string
  phoneNumber: string
  infoMail: string
  jobMail: string
  linkedinUrl: string
  xingUrl: string
  instagramUrl: string
}

export type SiteQueryResult<PageQueryResult> = {
  siteInfo: SiteInfo
  pageData: MetaFields & PageQueryResult
}

export type PageProps<PageData> = SiteQueryResult<PageData>

export async function queryBackend<T>(query: {
  query: string
  select?: Record<string, unknown>
}): Promise<T> {
  const result = await fetch(`${publicConfig.backendURL}/api/query`, {
    method: 'POST',
    headers: {
      ...getBasicAuthHeader(
        privateConfig.backendUser,
        privateConfig.backendPassword,
      ),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query),
  })
  if (result.status >= 300) {
    console.error(result)
    throw new Error(result.statusText)
  }
  const json = await result.json()
  return json.result
}

export async function queryPageData<PageQueryResult>(pageQuery: {
  query: string
  select?: Record<string, unknown>
}): Promise<SiteQueryResult<PageQueryResult>> {
  const siteQuery = {
    query: 'site',
    select: {
      ...siteInfoSelect,
      pageData: {
        query: pageQuery.query,
        select: { ...metaFieldsSelect, ...(pageQuery.select ?? {}) },
      },
    },
  }
  type QueryResult = SiteInfo & {
    pageData: PageQueryResult & MetaFields
  }
  const result = await queryBackend<QueryResult>(siteQuery)
  const { pageData, ...siteInfo } = result

  return { pageData, siteInfo }
}
