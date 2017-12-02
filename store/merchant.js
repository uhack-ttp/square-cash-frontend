export const state = () => ({
  products: [],
  transactions: [],
  activeTransaction: {}
})

export const mutations = {
  setProducts (state, products) {
    state.products = products
  },
  setTransactions (state, transactions) {
    state.transactions = transactions
  },
  setActiveTransaction (state, transaction) {
    state.activeTransaction = transaction
  }
}

export const actions = {
  async getProducts ({ commit }, storeId) {
    if (!storeId) {
      commit('products', [])
      return
    }

    const products = await this.$axios.get(`stores/${storeId}/products`)

    console.warn(products)

    commit('setProducts', products.data)
  },

  async getTransactions ({ commit }, storeId) {
    if (!storeId) {
      commit('transactions', [])
      return
    }

    const transactions = await this.$axios.get(`stores/${storeId}/transactions`)

    console.warn(transactions)

    commit('setTransactions', transactions.data)
  },

  async getTransaction ({ commit }, transactionId) {
    if (!transactionId) {
      commit('activeTransaction', {})
      return
    }

    const transaction = await this.$axios.get(`transactions/${transactionId}`)

    console.warn(transaction)

    commit('setActiveTransaction', transaction.data)
  }
}
