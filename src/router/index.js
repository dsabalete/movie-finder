import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Results from '@/components/Results'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/results',
      name: 'Results',
      component: Results
    }
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})
