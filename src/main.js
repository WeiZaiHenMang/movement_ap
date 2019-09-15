import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import '../src/style/index.less'
import chinese from '../node_modules/vee-validate/dist/locale/zh_CN'
import VeeValidate, { Validator } from 'vee-validate'
import { fmday } from './utilt/dayjs'
import 'amfe-flexible'

Vue.use(Vant)

Vue.use(VeeValidate, { events: '' })

Validator.localize('chinese', chinese)

// 全局时间过滤器
Vue.filter('fmday', fmday)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  Vant,
  render: h => h(App)
}).$mount('#app')
