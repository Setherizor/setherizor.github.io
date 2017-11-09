import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import homepage from '../views/homepage'
import {Hello, projectsHolder, terminal} from '../components'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', component: homepage,
      children: [
        {
          path: '',
          name: 'Terminal',
          component: terminal
        },
        {
          path: '/p',
          name: 'Projects',
          component: projectsHolder
        },
      ]
    },
    {
      path: '/hi',
      name: 'Hello',
      component: Hello
    }
  ]
})
