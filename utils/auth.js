import Cookie from 'js-cookie'

export const setUser = (user) => {
  if (process.SERVER_BUILD) return
  window.localStorage.setItem('user', JSON.stringify(user))
  Cookie.set('user', JSON.stringify(user))
}

export const unsetUser = () => {
  if (process.SERVER_BUILD) return
  window.localStorage.removeItem('user')
  Cookie.remove('user')
}

export const getUserFromCookie = (req) => {
  if (!req.headers.cookie) return
  const userCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('user='))
  if (!userCookie) return
  const user = userCookie.split('=')[1]
  return JSON.parse(decodeURIComponent(user))
}

export const getUserFromLocalStorage = () => {
  const json = window.localStorage.user
  return json ? JSON.parse(json) : undefined
}
