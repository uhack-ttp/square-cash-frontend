<template>
  <section class="container">
    <div class="main">
      <div v-if="items && !items.length" class="click-the-scan">
        <img src="/arrow.png">
        <p>Click the camera <br />icon to start scanning</p>
      </div>
      <div v-if="items && items.length">
        <div class="product-list">
          <cart-list-card v-for="item in items" :data="item" :key="item.id"/>
        </div>
        <total-price :value="cart.total_price"/>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ProductListCard from '~/components/ProductListCard.vue'
import CartListCard from '~/components/CartListCard.vue'
import TotalPrice from '~/components/TotalPrice.vue'

export default {
  components: { ProductListCard, CartListCard, TotalPrice },
  middleware: 'auth',
  methods: {
    ...mapActions({
      createCart: 'cart/create',
      getItems: 'cart/getItems'
    })
  },
  computed: {
    ...mapState({
      cart: state => state.cart.cart,
      items: state => state.cart.items
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
.main {
  margin-top: 56px;
}

.click-the-scan {
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 146px;
}

.click-the-scan img {
  width: 42px;
  height: 99px;
  object-fit: contain;
  margin-bottom: 12px;
  transform: translateX(50px);
}

.click-the-scan p {
  width: 264px;
  font-size: 24px;
  font-weight: 300;
  line-height: 1.4;
  text-align: center;
  color: rgba(53, 52, 61, 0.75);
}

.product-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0;
}
</style>
