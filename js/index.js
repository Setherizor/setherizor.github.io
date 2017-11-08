const buttons = [
  { name: 'Projects', url: '/#/p' },
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
  { name: 'hero', template: 'hero' },
  { name: 's-footer', template: 'footer' },
  {
    name: 'info', template: 'info', methods: { text: (param) => { return store.state.text[param] } }
  },
  {
    name: 'projects', template: 'projects', computed: { cards: () => { return store.state.cards } }, methods: {
      randColor: () => {
        const colors = ["blue-grey darken-2", "cyan darken-2", "purple", "pink", "red lighten-1", "deep-purple lighten-2", "light-blue lighten-2", "green accent-3", "brown lighten-2"]
        return colors[Math.floor(Math.random() * colors.length)]
      }
    }
  }
]

const doubleGetId = (x) => {
  return document.getElementById(x).import.getElementById(x)
}

comps.map(e => {
  Vue.component(e.name, {
    template: doubleGetId(e.template),
    methods: e.methods || {},
    computed: e.computed || {}
  })
})

Vue.component('s-cards', {
  template: `
 <v-layout row wrap>
  <v-flex xs12 v-for="c in this.$store.state.cards" :key="c.id">
    <v-card :color="randColor()" class="white--text">
        <v-card-title primary-title>
            <div class="headline" style="width: 100%;" v-html="c.name"></div>
            <span v-html="c.desc"></span>
        </v-card-title>
        <v-card-actions>
          <v-layout row wrap>
            <v-flex xs12>
              <v-btn v-for="(url, index) in c.urls" :key="c.id" color="primary" :href="url">
                  {{url.substr(url.lastIndexOf("/") + 1) || "Project"}}
              </v-btn>
            </v-flex>
          </v-layout>
        </v-card-actions>
      </v-card>
  </v-flex>
</v-layout>`,
  methods: {
    randColor: () => {
      const colors = ["blue-grey darken-2", "cyan darken-2", "purple", "pink", "red lighten-1", "deep-purple lighten-2", "light-blue lighten-2", "green accent-3", "brown lighten-2"]
      return colors[Math.floor(Math.random() * colors.length)]
    }
  }
})

const store = new Vuex.Store({
  state: {
    dark: true,
    author: 'Seth Parrish',
    pic: 'https://secure.gravatar.com/avatar/f51d027fb674bba15df8fbe8451d7d23',
    contacts: contacts,
    buttons: buttons,
    text: text,
    cards: bucket
  }
})

const Contacts = {
  computed: {
    contacts() {
      return this.$store.state.contacts
    }
  },
  template: doubleGetId('contacts')
}

const Contact = {
  computed: {
    contact() {
      const id = parseInt(this.$route.params.id)
      return this.$store.state.contacts.filter(function (c) {
        return c.id === id
      })[0]
    }
  },
  template: doubleGetId('contact')
}

const routes = [
  {
    path: '/',
    component: { name: 'Terminal', template: doubleGetId('terminal') }
  },
  {
    path: '/fun',
    component: { template: `<v-btn color="primary" dark round large href="/funbutton" target="_self" rel="noopener"> Want Some Fun </v-btn>` }
  },
  {
    path: '/p',
    component: { name: 'Projects', template: doubleGetId('projects') }
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

const TheApp = { name: 'TheApp', template: doubleGetId('TheApp') }

const router = new VueRouter({ routes })
const V = new Vue({
  el: '#app',
  store,
  router,
  components: { TheApp },
  render: (createElement) => { return createElement(TheApp) }
})
