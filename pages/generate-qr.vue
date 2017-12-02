<template>
  <section class="container" v-if="cart">
    <qriously class="card" :value="cart.code" :size="200" />
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  middleware: 'auth',
  methods: {
    ...mapActions({
      createCart: 'cart/create',
      getItems: 'cart/getItems'
    })
  },
  computed: {
    ...mapState({
      cart: state => state.cart.cart
    })
  },
  mounted () {
    if (!this.cart) {
      this.createCart().then(() => {
        this.getItems()
      })
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
  }

  .card {
    border-radius: 2px;
    background-color: #ffffff;
    background-color: var(--white);
    box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 24px 16px;
  }
</style>
