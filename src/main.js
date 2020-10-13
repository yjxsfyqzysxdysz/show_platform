import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './api'
import lodash from 'lodash'
import moment from 'moment'
import echarts from 'echarts'
import 'moment/locale/zh-cn'
import './lib/iview'
import './lib/element'
import Notice from './lib/notice'
import { toRawType } from '@tools/utils'

Vue.config.productionTip = false
Vue.prototype.$lodash = Vue.lodash = lodash
Vue.prototype.$moment = Vue.moment = moment
Vue.prototype.$echarts = echarts
Vue.prototype.$Notice = Vue.$Notice = Notice
Vue.prototype.errorMsg = msg => Notice.error({ title: '错误', desc: msg })
Vue.prototype.warningMsg = msg => Notice.warning({ title: '警告', desc: msg })
Vue.prototype.successMsg = msg => Notice.success({ title: '成功', desc: msg, duration: 2 })
Vue.prototype.toRawType = toRawType // 数据类型判断
Object.isObject = function isObject(val) { // 判断是否为 Object
  return Object.prototype.toString.call(val) === '[object Object]'
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
