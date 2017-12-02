<template>
  <section class="container" v-if="cart">
    <div class="card">
      <div class="section">
        <h3 class="section-title">Merchant</h3>
        <div class="section-content">
          <small>Grocery store:</small>
          <small>The Great shopping</small>
        </div>
      </div>

      <div class="section">
        <h3 class="section-title">Products</h3>
        <div class="section-content" @click="showItems = !showItems">
          <small>Item Count:</small>
          <small>
            {{ items && items.length }}
            <i class="fa fa-angle-down" aria-hidden="true"></i>
          </small>
        </div>
        <div v-if="showItems" class="section-subcontent">
          <checkout-item v-for="item in items" :key="item.item.id" :data="item" />
        </div>
      </div>

      <div class="section">
        <h3 class="section-title">Account</h3>
        <div class="section-content">
          <small>Savings:</small>
          <small>2985 1278 9023</small>
        </div>
      </div>

      <div class="section">
        <h3 class="section-title">Total Amount</h3>
        <div class="section-content">
          <small>Balance:</small>
          <small>PHP {{ cart.total_price }}</small>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import CheckoutItem from '~/components/CheckoutItem.vue'

export default {
  components: { CheckoutItem },
  middleware: 'auth',
  data () {
    return {
      showItems: false
    }
  },
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
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
  }

  .card {
    width: 280px;
    border-radius: 2px;
    background-color: #ffffff;
    background-color: var(--white);
    box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 24px 16px;
  }

  .section {
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: solid 1px #e4e4e4;
  }

  .section:last-child {
    border: none;
    padding-bottom: 0;
  }

  .section-title {
    font-size: 12px;
    line-height: 1.17;
    text-align: left;
    color: rgba(53, 52, 61, 0.75);
    margin: 0 0 16px 0;
  }

  .section-content {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    font-weight: 300;
    line-height: 1.17;
    text-align: left;
    color: rgba(53, 52, 61, 0.75);
  }

  .section-subcontent {
    display: flex;
    flex-direction: column;
    font-size: 10px;
    font-weight: 300;
    line-height: 1.4;
    text-align: left;
    color: rgba(53, 52, 61, 0.75);
    margin-top: 19px;
  }

  .fa-angle-down {
    margin-left: 10px;
  }

  small {
    font-size: 95%;
  }
</style>
