import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Details from '@/components/Details'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/details/:id',
      component: Details,
      props: true
    }
  ]
})
