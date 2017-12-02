import { getUserFromCookie, getUserFromLocalStorage } from '~/utils/auth'
export default function ({ isServer, store, req, redirect }) {
  const loggedUser = isServer ? getUserFromCookie(req) : getUserFromLocalStorage()

  store.commit('auth/setUser', loggedUser)

  // If the user is not authenticated
  if (!store.state.auth.user) {
    return redirect('/login')
  }
}
