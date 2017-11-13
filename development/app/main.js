import Vue from 'vue'
import App from './App'
import { router, store } from './utils'
import 'vueify/lib/insert-css' // required for .vue file <style> tags
import TweenMax from 'gsap';
import Vuetify from 'vuetify'

Vue.use(Vuetify, {
  theme: {
    primary: '#1976D2',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

Vue.config.productionTip = true

const V = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
