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
        <div class="main">
          <div class="question">
            <h2>Welcome to your shop!</h2>
            <h2>What would you like to do?</h2>
          </div>
          <nuxt-link class="link" v-for="link in links" :key="link.title" :to="link.to">
            <div class="option">
              <div class = "option-desc">
                <div class="title">
                  {{ link.title }}
                </div>
                <div class="subtitle">
                  {{ link.subTitle }}
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  layout: 'login',
  data () {
    return {
      links: [
        {
          title: 'Add Products',
          subTitle: 'Add a new product to your shop',
          to: '/main'
        },
        {
          title: 'View Inventory',
          subTitle: 'View or edit inventory stock',
          to: '/merchant/inventory'
        },
        {
          title: 'View Sales',
          subTitle: 'View sales and earnings',
          to: '/merchant/transactions'
        }
      ]
    }
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

  .link {
    text-decoration: none;
    margin: 0 0 16px 0;
  }

  .question {
    margin-bottom: 32px;
  }

  .question h2 {
    font-size: 24px;
    font-weight: 300;
    line-height: 1.4;
    text-align: center;
    color: rgba(53, 52, 61, 0.75);
    margin: 0 0 10px 0;
  }

  .question h2:last-child {
    margin: 0;
  }

  .option {
    width: 333px;
    height: 149px;
    border-radius: 2px;
    background-color: #f6f6f9;
  }

  .option-desc {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .option .title {
    margin-top: 38.7px;
    font-size: 24px;
    text-align: center;
    color: #35343d;
  }

  .option .subtitle {
    margin-top: 13.3px;
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    color: rgba(53, 52, 61, 0.75);
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px 0;
  }
</style>
