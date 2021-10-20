import { getErrorString, isFailure, object, string } from 'fefe'
const validateConfig = object({
  backendUser: string(),
  backendPassword: string(),
})

const result = validateConfig({
  backendUser: process.env.BACKEND_USER,
  backendPassword: process.env.BACKEND_PASSWORD,
})

if (isFailure(result)) {
  throw new Error(getErrorString(result.left))
}

export const privateConfig = result.right
