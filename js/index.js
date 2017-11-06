const buttons = [
  { name: 'Projects', url: './projects' },
  { name: 'Who Am I', url: 'WhoAmI' },
  { name: 'Hire Me', url: 'https://www.fiverr.com/sethparrish' },
  { name: 'Resume', url: './resume' }
]

const text = {
  name: 'Seth Parrish',
  handle: '@setherizor',
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

const comps = [
  { name: 'hero', template: '#hero' },
  { name: 's-footer', template: '#footer' },
  {
    name: 'info', template: '#info', methods: { text: (param) => { return store.state.text[param] } }
  }
]

comps.map(e => {
  Vue.component(e.name, {
    template: e.template,
    methods: e.methods || {}
  })
})

// use an import: <link id="terminal" rel="import" href="./s.html
// document.getElementById(e.template.sub).import.getElementById(e.template),

const store = new Vuex.Store({
  state: {
    debug: true,
    author: 'Seth Parrish',
    pic: 'https://secure.gravatar.com/avatar/f51d027fb674bba15df8fbe8451d7d23',
    contacts: contacts,
    buttons: buttons,
    text: text
  }
})

const Contacts = {
  computed: {
    contacts () {
      return this.$store.state.contacts
    }
  },
  template: '#contacts'
}

const Contact = {
  computed: {
    contact () {
      const id = parseInt(this.$route.params.id)
      return this.$store.state.contacts.filter(function (c) {
        return c.id === id
      })[0]
    }
  },
  template: '#contact'
}

const routes = [
  {
    path: '/',
    component: { template: '#terminal' }
  },
  {
    path: '/fun',
    component: { template: `<v-btn color="primary" dark round large href="/funbutton" target="_self" rel="noopener"> Want Some Fun </v-btn>` }
  },
  {
    path: '/c',
    component: Contacts
  },
  {
    path: '/contacts/:id',
    component: Contact
  }
]

const router = new VueRouter({ routes })
const V = new Vue({ store, router }).$mount('#app')
