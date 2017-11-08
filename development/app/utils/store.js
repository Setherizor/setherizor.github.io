import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const buttons = [
  { name: 'Projects', url: '/#/p' },
  { name: 'Who Am I', url: 'WhoAmI' },
  { name: 'Hire Me', url: 'https://www.fiverr.com/sethparrish' },
  { name: 'Resume', url: './resume' }
]

const text = {
  favquote: 'The Only Day Wasted, Is One In Which You Make Nobody Smile',
  intro:
  'I’m one of those people that is obsessed with making things better. I see every failure as a chance to learn and grow. When I look outside, I see the world full of opportunities, technology, and beauty! I actively look for problems (but I am not a pessimist), this is because I’m a doer, a maker, and a helper! I was born in Knoxville Tennesee, on a brisk fall day (as my parents recall to me). After that, I was raised in Arkansas and Georgia, and am now loving North Carolina! I spent my youth biking with friends, walking on beaches, and adventuring. From a young age, I have been facinated by computers and their fantastical ability to enable and connect people. I have spent my time since, shooting pictures, designing websites, mocking up interfaces, taking on projects one after another, managing a website for a famiy business, gaming, and further exploring how I can enable and connect people in this amazing world.',
  quote1:
  'Born in Tennessee, raised in Arkansas and Georgia, and am now loving North Carolina!',
  quote2: "The Internet has given me the keys to the 'whole crazy world'",
  outro:
  'The Internet has connected me to people who share my passions and understand my missions. It has given me the keys to the whole crazy world and all I have needed is the desire to discover. At the core of everything I’ve done, and continue to do, is communication of all forms, technology, a will to help others, and diligence.'
}

const contacts = [
  { id: 1, name: 'John Doe', phone: '111-222-3333' },
  { id: 2, name: 'Jane Doe', phone: '111-222-4444' },
  { id: 3, name: 'Timmy Doe', phone: '111-222-5555' }
]

export default new Vuex.Store({
  state: {
    dark: true,
    author: 'Seth Parrish',
    contacts: contacts,
    buttons: buttons,
    text: text
  }
})
