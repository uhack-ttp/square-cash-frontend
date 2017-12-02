<template>
  <div>
    <div class="modal" v-if="product">
      <div class="modal-body">
        <img class="product-image" :src="product.picture" />
        <h2 class="product-title">{{ product.name }}</h2>
        <small class="product-weight">{{ product.description }}</small>
        <small class="product-price">Php {{ product.price }}</small>
        <div class="product-controls">
          <number-input size="large" :max="product.quantity" :number="quantity" @num-change="onChange" />
        </div>
        <button class="product-button" @click.prevent="onAddToCart">ADD TO CART</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import NumberInput from '~/components/NumberInput.vue'

export default {
  components: { NumberInput },
  data () {
    return {
      quantity: 1
    }
  },
  methods: {
    ...mapActions({
      setProduct: 'product/setProduct',
      addToCart: 'cart/addToCart'
    }),
    onAddToCart () {
      this.addToCart({ productCode: this.product.code, quantity: this.quantity })
        .then(() => {
          this.setProduct(null)
          this.$router.push({ name: 'main' })
        })
    },
    onChange (number) {
      this.quantity = number
    }
  },
  computed: {
    ...mapState({
      product: state => state.product.product
    })
  }
}
</script>

<style scoped>
  .modal {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,.8);
    z-index: 1040;
    display: flex;
  }

  .modal.isHidden {
    display: none;
  }

  .modal-body {
    z-index: 99999;
    width: 280px;
    height: 478px;
    border-radius: 2px;
    background-color: #ffffff;
    box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: auto;
  }

  .product-image {
    width: 215px;
    height: 215px;
    object-fit: contain;
  }

  .product-title {
    font-size: 16px;
    font-weight: 300;
    line-height: 1.49;
    text-align: center;
    color: #35343d;
    margin-bottom: 8px;
  }

  .product-weight {
    font-size: 10px;
    line-height: 1.1;
    letter-spacing: 1px;
    text-align: left;
    color: #b2b0c0;
    margin-bottom: 15px;
  }

  .product-price {
    font-size: 14px;
    font-weight: bold;
    line-height: 0.79;
    letter-spacing: 1.4px;
    text-align: right;
    color: #ff9c40;
    margin-bottom: 24px;
  }

  .product-controls {
    margin-bottom: 24px;
  }

  .product-button {
    width: 189px;
    height: 36px;
    border-radius: 100px;
    background-color: #ff9c40;
    font-size: 10px;
    font-weight: bold;
    line-height: 1.1;
    letter-spacing: 1px;
    text-align: center;
    color: #ffffff;
  }
</style>
