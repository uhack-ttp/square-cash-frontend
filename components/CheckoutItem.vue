<template>
  <div class="item">
    <small class="item-name">{{ data.product.name }}</small>
    <small class="item-price">x {{ data.item.quantity }}</small>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      required: true
    }
  }
}
</script>

<style scoped>
  .item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .item-price {
    margin-right: 24px;
  }
</style>
