import Vue from 'vue'
import Router from 'vue-router'
import { homepage, whoami, resume } from '../views'
import { Hello, projectsHolder, terminal, funbutton } from '../components'

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
        {
          path: '/fun',
          name: 'FunButton',
          component: funbutton
        }
      ]
    },
    {
      path: '/whoami',
      name: 'WhoAmI',
      component: whoami
    },
    {
      path: '/resume',
      name: 'Resume',
      component: resume
    },
    {
      path: '/hi',
      name: 'Hello',
      component: Hello
    }
  ]
})
