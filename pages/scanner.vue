<template>
  <qrcode-reader @decode="onDecode">
    <modal />
    <div class="scan-area-container">
      <div class="scan-area">
      </div>
    </div>
  </qrcode-reader>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Modal from '~/components/Modal.vue'

export default {
  layout: 'index',
  middleware: 'auth',
  components: { Modal },
  methods: {
    ...mapActions({
      setProduct: 'product/setProduct',
      createCart: 'cart/create'
    }),
    onDecode (content) {
      if (!content) {
        return
      }

      this.setProduct(content)
    }
  },
  computed: {
    ...mapState({
      cart: state => state.cart.cart
    })
  },
  mounted () {
    if (!this.cart) {
      this.createCart()
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
