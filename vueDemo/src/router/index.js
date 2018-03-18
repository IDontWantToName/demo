import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage'
import loginPage from '@/components/loginPage'
import blog from '@/components/blog'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    },
    {
      path: '/loginPage/:login',
      name: 'loginPage',
      component: loginPage
    }
  ]
})
