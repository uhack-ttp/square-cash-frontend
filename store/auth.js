import { setUser } from '~/utils/auth'

export const state = () => ({
  user: null
})

export const mutations = {
  setUser (state, user) {
    state.user = user
  }
}

export const actions = {
  async login ({ commit }) {
    const user = await this.$axios.get('users/1')

    commit('setUser', user.data)
    setUser(user.data)
  }
}
