import Vue from 'vue'
import App from './App'
import router from './utils/router'
import store from './utils/store'
import 'vueify/lib/insert-css' // required for .vue file <style> tags

import Vuetify from 'vuetify'
Vue.use(Vuetify)

Vue.config.productionTip = true

const V = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})