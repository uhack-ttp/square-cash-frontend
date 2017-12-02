<template>
  <section class="container">
    <header class="header">
      <nuxt-link to="/ecashier">
        <img class="header-logo" src="/logo.png">
      </nuxt-link>
      <nuxt-link to="/merchant">
        <button class="header-button">Merchant Portal</button>
      </nuxt-link>
    </header>
    <section>
      <i class="fa fa-check-circle" aria-hidden="true"></i>
      <h3>Thank you Juan!</h3>
      <h3>Transaction Successful!</h3>
    </section>
  </section>
</template>

<script>
  export default {
    layout: 'login',
    mounted () {
      if ('speechSynthesis' in window) {
        var msg = new SpeechSynthesisUtterance(`Thank you Juan! Transaction Successful!`)
        var voices = window.speechSynthesis.getVoices()
        msg.voice = voices[49]
        window.speechSynthesis.speak(msg)
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
    height: 100vh;
    width: 100vw;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  h3 {
    font-size: 32px;
    font-weight: 300;
    line-height: 1;
    text-align: center;
    color: rgba(53, 52, 61, 0.75);
    margin: 0 0 24px 0;
  }

  h3:last-child {
    margin-bottom: 0;
  }

  i {
    margin-bottom: 40px;
    font-size: 80px;
    color: #6fc186;
  }
</style>
