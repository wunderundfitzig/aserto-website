import { privateConfig } from './config/private-config'
import { publicConfig } from './config/public-config'

export const getBasicAuthHeader = (
  user: string,
  password: string
): Record<'Authorization', string> => ({
  Authorization: `Basic ${btoa(`${user}:${password}`)}`,
})

export const queryBackend = async (query: unknown): Promise<unknown> => {
  const result = await fetch(`${publicConfig.backendURL}/api/query`, {
    method: 'POST',
    headers: {
      ...getBasicAuthHeader(
        privateConfig.backendUser,
        privateConfig.backendPassword
      ),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query),
  })
  const json = await result.json()
  return json.result
}
