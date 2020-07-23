import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Sign Up',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/signin',
    name: 'Sign In',
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/create',
    name: 'Create link',
    component: () => import('../views/Create.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
