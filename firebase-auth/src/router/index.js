import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'
Vue.use(VueRouter)

  const routes = [
 
  {
    path: '/registro',
    name: 'registro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Registro.vue')
  },
  {
    path: '/',
    name: 'inicio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/ingreso',
    name: 'ingreso',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Ingreso.vue')
  }]

const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {
  const rutaprotegida = to.matched.some(record => record.meta.requiresAuth)
  var user = firebase.auth().currentUser;
  if(rutaprotegida === true && user === null ) {
    next({name:'inicio'})
  } else {
    next();
  }

})
export default router
