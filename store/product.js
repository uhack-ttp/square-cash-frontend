export const state = () => ({
  product: null
})

export const mutations = {
  setProduct (state, product) {
    state.product = product
  }
}

export const actions = {
  async setProduct ({ commit }, productId) {
    if (!productId) {
      commit('setProduct', null)
      return
    }

    const product = await this.$axios.get(`products/${productId}`)

    commit('setProduct', product.data)
  }
}
