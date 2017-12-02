<template>
  <section class="container">
    <header class="header">
      <nuxt-link to="/ecashier">
        <img class="header-logo" src="/logo.png">
      </nuxt-link>
      <nuxt-link to="/merchant">
        <button class="header-button">Merchant Portal</button>
      </nuxt-link>
    </header>
    <section>
      <div class="section-inner">
        <h2>Transaction List</h2>
        <div class="cards">
          <div class="card">
            <div class="card-meta">
              <i class="fa fa-credit-card" aria-hidden="true"></i>
              <span>Total sales</span>
            </div>
            <div class="card-content">PHP {{ transactions.total_sales }}</div>
          </div>

          <div class="card">
            <div class="card-meta">
              <i class="fa fa-tag" aria-hidden="true"></i>
              <span>Total quantity sold</span>
            </div>
            <div class="card-content">{{ transactions.total_quantity }} item/s</div>
          </div>

        </div>

        <div class="table">
          <div class="table-meta">
            <span>Transaction ID</span>
            <span>Buyer Name</span>
            <span>Transaction Date</span>
            <span>Total Amount</span>
          </div>
          <div class="table-body">
          <nuxt-link :to="`/merchant/transaction/${item.id}`" v-for="item in transactions.transactions" :key="item.id">
            <div class="table-row" >
                <span>{{ item.id }}</span>
                <span>{{ item.customer_name }}</span>
                <span>{{ item.updated_at }}</span>
                <span>Php {{ item.total_price }}</span>
            </div>
          </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    layout: 'login',
    computed: {
      transactions () {
        return this.$store.state.merchant.transactions
      }
    },
    methods: {
      ...mapActions({
        getTransactions: 'merchant/getTransactions'
      }),
      loadTransactions: function (storeId) {
        this.getTransactions(storeId)
      }
    },
    mounted: function () {
      this.loadTransactions(1)
    }
  }
</script>

<style scoped>
  .header {
    position: fixed;
    height: 56px;
    top: 0;
    width: 100%;
    background-color: #f7f9fc;
    padding: 0 31px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-logo {
    width: 32px;
    height: 32px;
  }

  .header-button {
    border-radius: 2px;
    font-size: 16px;
    line-height: 0.88;
    color: #f7f9fc;
    background-color: #f5a559;
    padding: 12px 10px;
  }

  section {
    margin: auto;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .section-inner {
    max-width: 952px;
    width: 100%;
    padding: 0 16px;
  }

  h2 {
    font-size: 24px;
    text-align: left;
    color: #f5a559;
    margin: 88px 0 30px 0;
  }

  .qrcode-reader {
    width: 600px;
    height: auto;
  }

  .cards {
    display: flex;
  }

  .card {
    width: 280px;
    height: 94px;
    border-radius: 2px;
    background-color: #ffffff;
    box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 14px 16px;
    margin: 0 16px 24px 0;
    position: relative;
  }

  .card-meta {
    margin-bottom: 10px;
  }

  .card-meta i {
    width: 18px;
    height: 16px;
    font-size: 16px;
    text-align: left;
    color: #f5a559;
    margin-right: 9px;
  }

  .card span {
    font-size: 16px;
    font-weight: 300;
    text-align: left;
    color: #f5a559;
  }

  .card-content {
    font-size: 24px;
    text-align: left;
    color: rgba(53, 52, 61, 0.75);
    margin-bottom: 8px;
  }

  .card-button {
    position: absolute;
    width: 24px;
    border-radius: 2px;
    background-color: #f7f9fc;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-button i {
    font-size: 12px;
    color: #cccccc;
  }

  .table {
    max-width: 952px;
    width: 100%;
    border-radius: 2px;
    background-color: #ffffff;
    box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 100px;
  }

  .table-meta {
    background-color: rgba(51, 51, 51, 0.75);
    padding: 18px 16px;
    display: flex;
    justify-content: space-between;
  }

  .table-meta span {
    font-size: 16px;
    text-align: left;
    color: #ffffff;
  }

  .table-row {
    display: flex;
    justify-content: space-between;
    padding: 19px;
  }

  .table-body a {
    display: block;
    text-decoration: none;
    color: #35343d;
  }

  .table-body a:nth-child(2n) {
    background-color: #f7f9fc;
  }

  .table-meta span,
  .table-row span {
    width: 25%;
  }
</style>
