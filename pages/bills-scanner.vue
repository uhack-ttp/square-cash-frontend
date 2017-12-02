<template>
  <qrcode-reader @decode="onDecode">
    <div class="scan-area-container">
      <div class="scan-area">
      </div>
    </div>
  </qrcode-reader>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'index',
  middleware: 'auth',
  methods: {
    ...mapActions({
      getTransaction: 'billing/getTransaction'
    }),
    onDecode (content) {
      if (!content) {
        return
      }

      this.getTransaction(content).then(() => {
        this.$router.push('bills-checkout')
      })
    }
  }
}
</script>

<style>
.qrcode-reader {
  height: 100vh;
}

.qrcode-reader__camera {
  height: 100%;
  width: 100%;
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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
}
</style>
