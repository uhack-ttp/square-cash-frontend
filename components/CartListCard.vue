
<template>
  <div class="card">
    <i class="fa fa-times" aria-hidden="true" @click="deleteItem(data.product.code)"></i>
    <img class="card-image" :src="data.product.picture" />
    <div class="card-meta">
      <h2 class="card-title">{{ data.product.name }}</h2>
      <small class="card-weight">{{ data.product.description }}</small>
      <small class="card-price">Php {{ data.product.price }}</small>
    </div>
    <div class="card-controls">
      <number-input :min="1" :max="data.product.quantity" :number="data.item.quantity" @num-change="onChange"/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import NumberInput from '~/components/NumberInput.vue'

export default {
  props: {
    data: {
      required: true
    }
  },
  components: { NumberInput },
  methods: {
    ...mapActions({
      updateItem: 'cart/updateItem',
      deleteItem: 'cart/deleteItem'
    }),
    onChange (quantity) {
      this.updateItem({
        productCode: this.data.product.code,
        quantity
      })
    }
  }
}
</script>

<style scoped>
  .card {
    display: flex;
    box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 26px;
    height: 94px;
    width: calc(100% - 40px);
    max-width: 480px;
    position: relative;
  }

  .card-image {
    width: 73px;
    height: 73px;
    object-fit: cover;
    margin: 10px 11px 11px 4px;
  }

  .card-meta {
    display: flex;
    flex-direction: column;
    margin-top: 12px;
  }

  .card-title {
    font-size: 12px;
    font-weight: 300;
    line-height: 1.4;
    text-align: left;
    color: #35343d;
    margin-bottom: 4px;
  }

  .card-weight {
    font-size: 10px;
    line-height: 1.38;
    letter-spacing: 0.8px;
    text-align: left;
    color: #b2b0c0;
    margin-bottom: 10px;
  }

  .card-price {
    font-size: 10px;
    font-weight: bold;
    line-height: 1.1;
    letter-spacing: 1px;
    text-align: left;
    color: #ff9c40;
  }

  .card-controls {
    bottom: 15px;
    right: 16px;
    position: absolute;
  }

  .fa-times {
    top: 6px;
    right: 8px;
    position: absolute;
    font-size: 10px;
    color: #cad4e0;
  }
</style>
