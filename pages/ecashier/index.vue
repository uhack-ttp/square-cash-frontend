<template>
  <section class="container">
    <header class="header">
      <img class="header-logo" src="/logo.png">
      <nuxt-link to="/merchant">
        <button class="header-button">Merchant Portal</button>
      </nuxt-link>
    </header>
    <section>
      <h2>Display you QR code to start scanning</h2>
      <qrcode-reader @decode="onDecode">
      </qrcode-reader>
      <div class="scan-area-container">
        <div class="scan-area">
        </div>
      </div>
    </section>
  </section>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    layout: 'login',
    middleware: 'auth',
    methods: {
      ...mapActions({
        getTotalPrice: 'cashier/getTotalPrice'
      }),
      onDecode (content) {
        this.getTotalPrice(content)
          .then(() => {
            this.$router.push({ name: 'ecashier-balance' })
          })
      }
    }
  }
</script>

<style scoped>
  .header {
    position: fixed;
    height: 56px;
    top: 0;
    width: 100%;
    background-color: #f7f9fc;
    padding: 0 31px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-logo {
    width: 32px;
    height: 32px;
  }

  .header-button {
    border-radius: 2px;
    font-size: 16px;
    line-height: 0.88;
    color: #f7f9fc;
    background-color: #f5a559;
    padding: 12px 10px;
  }

  section {
    margin: auto;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  h2 {
    margin: 0 0 64px 0;
    font-size: 24px;
    font-weight: 300;
    line-height: 1;
    text-align: center;
    color: rgba(53, 52, 61, 0.75);
  }

  .qrcode-reader {
    width: 600px;
    height: auto;
  }

  .scan-area {
    border: 1px solid orange;
    width: 300px;
    height: 300px;
  }

  .scan-area-container {
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    position: fixed;
  }
</style>
