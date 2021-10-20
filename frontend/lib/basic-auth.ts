export const getBasicAuthHeader = (
  user: string,
  password: string
): Record<'Authorization', string> => ({
  Authorization: `Basic ${btoa(`${user}:${password}`)}`,
})
