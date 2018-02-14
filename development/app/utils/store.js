import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dark: true,
    funColors: false,
    author: 'Seth Parrish',
    buttons: [
      { name: 'Projects', url: '/#/p' },
      { name: 'Who Am I', url: '/#/whoami' },
      { name: 'Hire Me', url: 'https://www.fiverr.com/sethparrish' },
      { name: 'Resume', url: '/#/resume' },
      { name: 'Fun Button', url: '/#/fun' }
    ]
  },
  mutations: {
    toggleFun: (state) => {
      return state.funColors = !state.funColors;
    }
  }
})
