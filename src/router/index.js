import Vue from 'vue'
import Router from 'vue-router'
import add from '@/views/add'
import index from '@/views/index'
import login from '@/views/login'
import member from '@/views/member'
import information from '@/views/information'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/add',
      name: 'add',
      component: add,
      meta: { requiresAuth: true }
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/member',
      name: 'member',
      component: member,
      meta: { requiresAuth: true }
    },
    {
      path: '/information',
      name: 'information',
      component: information,
    }

  ]
})
