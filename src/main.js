import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import phoneVue from 'phone-pay-v'

Vue.config.productionTip = false
// 是否为测试环境
Vue.prototype.$istest = process.env.VUE_APP_CURRENTMODE === 'test'

// Vue.use(phoneVue)
console.log('当前NODE_ENV：' + process.env.NODE_ENV)
console.log('当前VUE_APP_CURRENTMODE：' + process.env.VUE_APP_CURRENTMODE)
console.log('是否为测试环境：' + Vue.prototype.$istest)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
