import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: () => import('../components/Landing.vue')
  }]

const router = new VueRouter({
  routes
})

export default router
