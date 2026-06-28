import { REQUEST_ERRORS } from '@project/shared'

export async function apiFetch<Response>(
  baseURL: string,
  endpoint: string,
  options?: RequestInit,
): Promise<Response> {

  const response = await fetch(
    `${baseURL}${endpoint}`,
    options,
  )

  if (!response.ok) {
    throw new Error(
      REQUEST_ERRORS.REQUEST_ERROR,
    )
  }

  return response.json()
}