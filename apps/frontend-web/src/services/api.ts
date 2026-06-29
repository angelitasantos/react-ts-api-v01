import {
  createApiClient,
  apiFetch as fetchRequest,
} from '@project/frontend-core'

const API_URL = import.meta.env.VITE_API_URL

export const api = createApiClient(API_URL)

export function apiFetch<T>(
  endpoint: string,
  options?: RequestInit,
) {
  return fetchRequest<T>(
    API_URL,
    endpoint,
    options,
  )
}

export async function apiPost<TResponse, TBody>(
  endpoint: string,
  body: TBody,
): Promise<TResponse> {
  const response = await fetch(
    `${API_URL}${endpoint}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  )

  if (!response.ok) {
    throw new Error()
  }

  return response.json()
}