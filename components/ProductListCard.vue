<template>
  <div class="card">
    <img class="card-image" src="/product-item.jpg" />
    <div class="card-body">
      <section>
        <h2 class="card-title">Chips Ahoy!</h2>
      </section>
      <section>
        <small class="card-weight">8.20 grams</small>
        <small class="card-price">Php 85.00</small>
      </section>
    </div>
  </div>
</template>s

<style scoped>
  .card {
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 26px;
    width: calc(100% - 40px);
    max-width: 480px;
  }

  .card-image {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }

  .card-body {
    width: 100%;
    border-radius: 2px;
    background-color: #fff;
    padding: 19px 16.9px 21px 18.1px;
  }

  .card-title {
    font-size: 16px;
    line-height: 1.06;
    text-align: left;
    color: #35343d;
  }

  .card-weight {
    font-size: 10px;
    line-height: 1.1;
    letter-spacing: 1px;
    text-align: left;
    color: #b2b0c0;
  }

  .card-price {
    font-size: 10px;
    font-weight: bold;
    line-height: 1.1;
    letter-spacing: 1px;
    text-align: right;
    color: #ff9c40;
  }

  section:first-child {
    margin-bottom: 12px;
  }

  section:last-child {
    display: flex;
    justify-content: space-between;
  }
</style>
