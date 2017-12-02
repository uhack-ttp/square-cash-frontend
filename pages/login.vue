<template>
  <section class="container">
    <form class="login-form">
      <img src="/logo.png" class="logo" />
      <h2 class="login-title">Square Cash</h2>
      <div class="login-form-item-control">
        <span class="login-input-affix-wrapper">
          <span class="login-input-prefix">
            <i class="fa fa-user" aria-hidden="true"></i>
          </span>
          <input type="name" class="login-input" placeholder="Username" />
        </span>
      </div>
      <div class="login-form-item-control">
        <span class="login-input-affix-wrapper">
          <span class="login-input-prefix">
            <i class="fa fa-lock" aria-hidden="true"></i>
          </span>
          <input type="password" class="login-input" placeholder="Password" />
        </span>
      </div>
      <button @click.prevent="onLogin" class="login-button">LOGIN</button>
    </form>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'login',
  methods: {
    ...mapActions({
      login: 'auth/login'
    }),
    onLogin () {
      this.login().then(() => {
        this.$router.push({name: 'index'})
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
    height: 100vh;
    width: 100vw;
  }

  .logo {
    width: 85px;
    height: 85px;
    margin: 0 auto 19px;
    object-fit: contain;
  }

  .login-form {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .login-title {
    font-size: 18px;
    letter-spacing: 0.3px;
    font-weight: 500;
    text-align: center;
    color: #5f5d70;
    margin-bottom: 93px;
  }

  .login-input {
    width: -webkit-fill-available;
    height: 56px;
    border-radius: 2px;
    background-color: #fbfaff;
    margin-bottom: 8px;
    border: none;
    padding-left: 53px;
    font-size: 16px;
    text-align: left;
    color: #5f5d70;
  }

  .login-input::placeholder {
    font-size: 16px;
    text-align: left;
    color: #ccc;
    font-weight: 300;
  }

  .login-input:focus {
    outline: none;
  }

  .login-input-affix-wrapper {
    position: relative;
  }

  .login-input-prefix {
    width: 13px;
    height: 14px;
    color: #dad9e2;
    position: absolute;
    top: 0;
    left: 21px;
  }

  .login-button {
    width: 268px;
    height: 48px;
    border-radius: 100px;
    background-color: #ff9c40;
    font-size: 12px;
    font-weight: bold;
    line-height: 0.92;
    letter-spacing: 1.2px;
    text-align: center;
    color: #ffffff;
    margin-top: 16px;
  }

  .login-button-text {

  }
</style>
