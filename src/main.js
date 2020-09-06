import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import lodash form 'lodash'
// import moment form 'moment'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
