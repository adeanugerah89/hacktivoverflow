import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login'
import Register from '@/components/Register'
import createThread from '@/components/CreateThread'
import Content from '@/components/Content'
import DetailThread from '@/components/DetailThread'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: '',
          component: Content
        },
        {
          path: 'detail/:id',
          component: DetailThread,
          props: true
        },
        {
          path: '/createThread',
          name: 'createThread',
          component: createThread
        }
      ]
    }
  ]
})
