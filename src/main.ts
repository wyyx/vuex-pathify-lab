import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

console.log('store', store)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
