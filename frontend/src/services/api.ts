import { REQUEST_ERROR_MESSAGE } from '../constants/index';

export const API_URL = import.meta.env.VITE_API_URL;

export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(
    `${API_URL}${endpoint}`,
    options
  );

  if (!response.ok) {
    throw new Error(REQUEST_ERROR_MESSAGE);
  }

  return response.json();
}