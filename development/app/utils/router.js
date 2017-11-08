import Vue from 'vue'
import Router from 'vue-router'
import {Hello, projectsHolder, terminal} from '../components'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Terminal',
      component: terminal
    },
    {
      path: '/p',
      name: 'Projects',
      component: projectsHolder
    },
    {
      path: '/hi',
      name: 'Hello',
      component: Hello
    }
  ]
})
