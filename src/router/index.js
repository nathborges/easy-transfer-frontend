import { createRouter } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateAnAccount from '../views/CreateAnAccount.vue'
import MyAccount from '../views/MyAccount.vue'
import NewTransfer from '../views/NewTransfer.vue'
import LoginView from '../views/LoginView.vue'
import DepositView from '../views/DepositView.vue'

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create-account',
      name: 'createAnAccount',
      component: CreateAnAccount
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/my-account',
      name: 'myAccount',
      component: MyAccount,
    },
    {
      path: '/new-transfer',
      name: 'newTransfer',
      component: NewTransfer
    },
    {
      path: '/deposit',
      name: 'deposit',
      component: DepositView
    }
  ]
})

export default router
