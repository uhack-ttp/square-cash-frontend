
<template>
  <div class="controls" :class="[size]">
    <span class="controls-price" :class="[size]">{{ number }}</span>
    <span class="controls-minus" @click="decrement">
      <i class="fa fa-minus" aria-hidden="true"></i>
    </span>
    <span class="controls-plus" @click="increment">
      <i class="fa fa-plus" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      size: {
        default: 'small'
      },
      number: {
        default: 0
      },
      max: {
        default: 99999
      },
      min: {
        default: 0
      }
    },
    methods: {
      decrement () {
        return this.number > this.min && this.$emit('num-change', this.number - 1)
      },
      increment () {
        return this.number <= this.max && this.$emit('num-change', this.number + 1)
      }
    }
  }
</script>

<style scoped>
  .controls {
    display: flex;
    align-items: center;
    width: 71px;
    height: 23px;
    border-radius: 4px;
    background-color: #ffffff;
    background-color: var(--white);
    border: solid 1px #c0ccda;
  }

  .controls.large {
    width: 125px;
    height: 36px;
  }

  .controls span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .controls span:nth-child(1) {
    width: 26px;
  }

  .controls.large span:nth-child(1) {
    width: 55px;
  }

  .controls span:nth-child(2) {
    border-left: 1px solid #c0ccda;
    border-right: 1px solid #c0ccda;
    width: 19px;
  }

  .controls.large span:nth-child(2) {
    width: 34px;
  }

  .controls span:nth-child(3) {
    width: 24px;
  }

  .controls.large span:nth-child(3) {
    width: 34px;
  }

  .controls-price {
    font-size: 10px;
    line-height: 1.4;
    text-align: center;
    color: #35343d;
  }

  .controls-price.large {
    font-size: 14px;
    line-height: 1;
    text-align: left;
    color: #35343d;
  }

  .fa-minus {
    font-size: 10px;
    color: #99a9bf;
  }

  .fa-plus {
    font-size: 10px;
    color: #99a9bf;
  }
</style>
