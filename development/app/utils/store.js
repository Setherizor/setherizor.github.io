import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const buttons = [
  { name: 'Projects', url: '/#/p' },
  { name: 'Who Am I', url: '/#/whoami' },
  { name: 'Hire Me', url: 'https://www.fiverr.com/sethparrish' },
  { name: 'Resume', url: '/#/resume' },
  { name: 'Fun Button', url: '/#/fun' }
]

const contacts = [
  { id: 1, name: 'John Doe', phone: '111-222-3333' },
  { id: 2, name: 'Jane Doe', phone: '111-222-4444' },
  { id: 3, name: 'Timmy Doe', phone: '111-222-5555' }
]

export default new Vuex.Store({
  state: {
    dark: true,
    funColors: false,
    author: 'Seth Parrish',
    contacts: contacts,
    buttons: buttons,
  },
  mutations: {
    toggleFun: (state) => {
      return state.funColors = !state.funColors;
    }
  }
})
