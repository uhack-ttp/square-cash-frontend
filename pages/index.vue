<template>
  <section class="container">
    <div class="main">
      <div class="question">
        How would you like to use Square cash:
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
  </section>
</template>

<script>
export default {
  layout: 'index',
  middleware: 'auth',
  data () {
    return {
      links: [
        {
          title: 'Shopping',
          subTitle: 'Use for purchasing products',
          to: '/main'
        },
        {
          title: 'Bills Payment',
          subTitle: 'Pay electricity bills, water bill, etc.',
          to: '/bills-scanner'
        },
        {
          title: 'Ticket Buying',
          subTitle: 'Cinema, amusements tickets, etc.',
          to: '/bills-scanner'
        }
      ]
    }
  }
}
</script>

<style scoped>
.link {
  text-decoration: none;
}

.question {
  width: 183px;
  height: 45px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.4;
  text-align: center;
  color: rgba(53, 52, 61, 0.75);
  margin-bottom: 32px;
}

.option {
  width: 232px;
  height: 104px;
  border-radius: 2px;
  background-color: #f6f6f9;
  margin: 0 0 8px 0;
}

.option-desc {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.option .title {
  margin-top: 30px;
  width: 100%;
  height: 17px;
  font-family: Montserrat;
  font-size: 14px;
  text-align: center;
  color: #35343d;
  margin-bottom: 8px
}

.option .subtitle {
  width: 100%;
  height: 21px;
  font-family: Montserrat;
  font-size: 12px;
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
