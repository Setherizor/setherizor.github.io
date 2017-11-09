import Vue from 'vue'
import App from './App'
import { router, store } from './utils'
import 'vueify/lib/insert-css' // required for .vue file <style> tags

import TweenMax from 'gsap';

import Vuetify from 'vuetify'
Vue.use(Vuetify)

Vue.config.productionTip = true

const V = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
