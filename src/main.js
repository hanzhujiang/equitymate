import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import './assets/css/common.scss'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import enLocale from 'element-ui/lib/locale/lang/en';
// import enLocale from 'element-ui/lib/locale/lang/en'




import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale'
// 设置语言
locale.use(lang)

import axios from 'axios'

Vue.prototype.$environment = 'staging'; // market, enterprice, staging, localhost

if (Vue.prototype.$environment == 'market' || Vue.prototype.$environment == 'enterprice') {
  axios.defaults.baseURL = 'https://service.arcnet.com.au/arc-client-end/'
  Vue.prototype.webURL = 'https://survey.arcnet.com.au/#/'
} else if (Vue.prototype.$environment == 'staging') {
  axios.defaults.baseURL = 'https://staging.arcnet.com.au/arc-client-end/'
  Vue.prototype.webURL = 'https://survey-staging.arcnet.com.au/#/'
} else {
  axios.defaults.baseURL = 'https://staging.arcnet.com.au/arc-client-end/'
  Vue.prototype.webURL = 'https://survey-staging.arcnet.com.au/#/'
}

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
