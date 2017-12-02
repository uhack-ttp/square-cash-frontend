export const state = () => ({
  transactionId: null,
  totalPrice: null
})

export const mutations = {
  setTransactionId (state, transactionId) {
    state.transactionId = transactionId
  },
  setTotalPrice (state, totalPrice) {
    state.totalPrice = totalPrice
  }
}

export const actions = {
  async getTotalPrice ({ commit }, transactionId) {
    if (!transactionId) {
      commit('setTransactionId', null)
      commit('setTotalPrice', null)
      return
    }

    const product = await this.$axios.get(`carts/${transactionId}`)

    commit('setTransactionId', product.data.id)
    commit('setTotalPrice', product.data.total_price)
  },

  async getTransactionDetails ({ commit }, transactionId) {
    const product = await this.$axios.get(`transactions/${transactionId}`)

    return product
  }
}
