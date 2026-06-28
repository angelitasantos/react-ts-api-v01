const TOKEN_KEY = '@app:token'
const USER_KEY = '@app:user'

export function setAuthStorage(
  token: string,
  user: unknown,
) {
  localStorage.setItem(TOKEN_KEY, token)
  localStorage.setItem(USER_KEY, JSON.stringify(user))
}

export function getTokenStorage() {
  return localStorage.getItem(TOKEN_KEY)
}

export function getUserStorage<T>() {
  const user = localStorage.getItem(USER_KEY)

  return user
    ? (JSON.parse(user) as T)
    : null
}

export function clearAuthStorage() {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USER_KEY)
}