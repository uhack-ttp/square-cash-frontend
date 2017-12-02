<template>
  <footer class="total">
    <h3 class="total-text">Your Total</h3>
    <h3 class="total-price">PHP {{ value }}</h3>
  </footer>
</template>

<script>
export default {
  props: {
    value: {
      required: true
    }
  }
}
</script>

<style scoped>
  .total {
    position: fixed;
    bottom: 47px;
    width: 100%;
    height: 48px;
    background-color: #ffffff;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 17px 20px 17px 21px;
  }

  .total-text {
    font-size: 12px;
    font-weight: 500;
    line-height: 1.17;
    text-align: left;
    color: #35343d;
  }

  .total-price {
    font-size: 12px;
    font-weight: 500;
    line-height: 1.17;
    text-align: right;
  }
</style>
