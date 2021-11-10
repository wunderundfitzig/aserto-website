import { getErrorString, isFailure, object, string } from 'fefe'

const validateConfig = object({
  backendURL: string(),
})

const result = validateConfig({
  backendURL: process.env.NEXT_PUBLIC_BACKEND_URL,
})

if (isFailure(result)) {
  throw new Error(getErrorString(result.left))
}

export const publicConfig = result.right
