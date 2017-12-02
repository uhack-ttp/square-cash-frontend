export const state = () => ({
  transaction: null
})

export const mutations = {
  setTransaction (state, transaction) {
    state.transaction = transaction
  }
}

export const actions = {
  async getTransaction ({ commit }, transactionId) {
    const transaction = await this.$axios.get(`transactions/${transactionId}/bill`)

    commit('setTransaction', transaction.data)

    return Promise.resolve(transaction)
  },

  async checkoutTransaction ({ commit, state }) {
    const data = this.$axios.post(`transactions/${state.transaction.transaction.code}/checkout`)

    commit('setTransaction', null)

    return Promise.resolve(data)
  }
}
