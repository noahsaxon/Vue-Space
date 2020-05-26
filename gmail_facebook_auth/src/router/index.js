import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import {auth} from '@/firebase'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    meta: {requiresAuth:true} 
  },
  {
    path: '/',
    name: 'Ingreso',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ingreso.vue')
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  
  const user = auth.currentUser;

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (user) {
      next()
    } else {
      next({name:'Ingreso'})
    }
  } else {
    next() // make sure to always call next()!
  }
})
export default router
