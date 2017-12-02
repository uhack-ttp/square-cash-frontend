<template>
  <footer class="footer">
    <h2 @click="onCancel" v-show="items && items.length && $route.name !== 'generate-qr'" class="footer-text">CANCEL</h2>
    <h2 @click="onCheckout" v-if="items && items.length && $route.name !== 'checkout' && $route.name !== 'generate-qr'" class="footer-text">CHECK OUT</h2>
    <h2 @click="generateQrCode" v-if="$route.name === 'checkout'" class="footer-text">CONFIRM</h2>
    <h2 @click="confirmCheckout" v-if="$route.name === 'generate-qr'" class="footer-text">DONE</h2>
    <h2 @click="checkoutBilling" v-if="$route.name === 'bills-checkout'" class="footer-text">DONE</h2>
  </footer>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      items: state => state.cart.items
    })
  },
  methods: {
    ...mapActions({
      cancelTransaction: 'cart/deleteCart',
      checkoutCart: 'cart/checkoutCart',
      checkoutTransaction: 'billing/checkoutTransaction'
    }),
    onCheckout () {
      this.$router.push({ name: 'checkout' })
    },
    onCancel () {
      this.cancelTransaction().then(() => {
        this.$router.push({ name: 'index' })
      })
    },
    generateQrCode () {
      this.$router.push({ name: 'generate-qr' })
    },
    confirmCheckout () {
      this.checkoutCart().then(() => {
        this.$router.push({ name: 'index' })
      })
    },
    checkoutBilling () {
      this.checkoutTransaction().then(() => {
        this.$router.push({ name: 'index' })
      })
    }
  }
}
</script>

<style scoped>
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 47px;
    background-color: #ff9c40;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer-text {
    font-size: 12px;
    font-weight: bold;
    line-height: 0.92;
    letter-spacing: 1.2px;
    text-align: center;
    color: #ffffff;
    background: red;
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer-text:nth-child(1) {
    background-color: #f6f6f6;
    color: rgba(53, 52, 61, 0.25);
  }

  .footer-text:nth-child(2) {
    background-color: #f5a559;
  }
</style>
