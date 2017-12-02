<template>
  <header class="header">
    <img @click="$router.push({name: 'index'})" class="logo" src="/logo.png">
    <h2 class="header-text">
      {{ headerText }}
    </h2>
    <nuxt-link to="/scanner" class="camera" v-if="!~['bills-scanner', 'scanner', 'index'].indexOf($route.name)">
      <i class="fa fa-camera" aria-hidden="true"></i>
    </nuxt-link>
  </header>
</template>

<script>

export default {
  computed: {
    headerText () {
      if (this.$route.name === 'main') {
        return 'Item list'
      }

      if (this.$route.name === 'checkout') {
        return 'Checkout'
      }

      return ''
    }
  }
}
</script>

<style scoped>
.logo {
  width: 32px;
  height: 32px;
}

.header {
  z-index: 99997;
  position: fixed;
  height: 56px;
  top: 0;
  width: 100%;
  background-color: #f7f9fc;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.camera  {
  width: 22px;
  height: 20px;
  font-size: 20px;
  color: #a8a7ab;
}

.header-text {
  width: 150px;
  height: 19px;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  color: rgba(53, 52, 61, 0.75);
}
</style>
