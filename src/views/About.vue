<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div @click="showPayPanel">支付</div>
    <!-- <vue-pay-pops :payPanelOptions="payPanelOptions" @inputOk="inputOk"></vue-pay-pops> -->
    <input type="text" v-model="pwd">
    <!-- <mt-switch v-model="value" @change="change"></mt-switch> -->
    <phone-pay :payPanelOptions="payPanelOptions" @inputOk="inputOk"></phone-pay>
  </div>
</template>
<script>
import axios from 'axios'
import { vuePayPops } from 'phone-pay-v'

export default {
  name: 'about',
  components: {
    PhonePay: vuePayPops
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      pwd: '',
      value: false,
      payPanelOptions: {
        isShow: false,
        pressKeyBackgorund: 'pink',
        pwdLength: 6
      }
    }
  },
  methods: {
    showPayPanel () {
      this.payPanelOptions.isShow = true
    },
    inputOk (res) {
      this.pwd = res
      axios.get(`http://94.191.49.231:3000/pwdtest?pwd=${res}`).then(res => {
        this.payPanelOptions.isShow = false
        if (res.data.result.msg === 'success') {
          // ok
          alert('验证通过')
        } else {
          // false
          alert('验证失败')
        }
      })
    }
  }
}
</script>
