export const state = () => ({
  items: null,
  cart: null
})

export const mutations = {
  setItems (state, items) {
    state.items = items
  },
  setCart (state, cart) {
    state.cart = cart
  }
}

export const actions = {
  async create ({ rootState, commit }) {
    const cart = await this.$axios.post('carts', {
      cart: {
        customer_id: rootState.auth.user.id
      }
    })

    commit('setCart', cart.data)
  },

  async addToCart ({ state, commit }, { productCode, quantity }) {
    const cart = await this.$axios.post(`carts/${state.cart.id}/add_item/${productCode}`, {
      cart: {
        quantity: quantity
      }
    })

    commit('setCart', cart.data.cart)
    commit('setItems', cart.data.items)

    return Promise.resolve(cart)
  },

  async getItems ({ commit, state }) {
    const items = await this.$axios.get(`carts/${state.cart.id}/items`)

    commit('setItems', items.data.items)
  },

  async updateItem ({ commit, state }, { productCode, quantity }) {
    const cart = await this.$axios.post(`carts/${state.cart.id}/update_item/${productCode}`, {
      cart: {
        quantity: quantity
      }
    })

    commit('setCart', cart.data.cart)
    commit('setItems', cart.data.items)

    return Promise.resolve(cart)
  },

  async deleteItem ({ commit, state }, productCode) {
    const cart = await this.$axios.post(`carts/${state.cart.id}/delete_item/${productCode}`)

    commit('setCart', cart.data.cart)
    commit('setItems', cart.data.items)

    return Promise.resolve(cart)
  },

  async deleteCart ({ commit, state }) {
    const data = this.$axios.delete(`transactions/${state.cart.id}`)

    commit('setCart', null)
    commit('setItems', null)

    return Promise.resolve(data)
  },

  async checkoutCart ({ commit, state }) {
    const data = this.$axios.post(`transactions/${state.cart.code}/checkout`)

    commit('setCart', null)
    commit('setItems', null)

    return Promise.resolve(data)
  }
}
