import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/pages/MainPage'
import CostsPage from '@/pages/CostsPage'
import LoginPage from '@/pages/LoginPage'
import RegistrationPage from '@/pages/RegistrationPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/costs',
      name: 'costsPage',
      component: CostsPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegistrationPage
    }
  ]
})
