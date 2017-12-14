import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import App from './App'
import { router, store } from './utils'
import 'vueify/lib/insert-css' // required for .vue file <style> tags
import TweenMax from 'gsap';
import Vuetify from 'vuetify'

Vue.use(Vuetify, {
  theme: {
    primary: '#1976D2',
    secondary: '#4eebfc'
  }
})

Vue.use(VueAnalytics, {
  id: 'UA-75268536-3',
  checkDuplicatedScript: true,
  router,
  autoTracking: {
    skipSamePath: true
  },
  linkers: ['https://www.fiverr.com/sethparrish']
})

Vue.config.productionTip = false

const V = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
