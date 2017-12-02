<template>
  <section class="container" v-if="transaction">
    <div class="card">
      <div class="section">
        <h3 class="section-title">Merchant</h3>
        <div class="section-content">
          <small>Provider:</small>
          <small>{{ transaction.store.name }}</small>
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
          <small>PHP {{ transaction.transaction.total_price }}</small>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  middleware: 'auth',
  computed: {
    ...mapState({
      transaction: state => state.billing.transaction
    })
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

