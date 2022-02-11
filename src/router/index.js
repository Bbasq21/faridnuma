import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Quien from '../views/Quien.vue'
import Ayudarte from '../views/Ayudarte.vue'
import Blog from '../views/Blog.vue'
import Detail from '../views/Detail.vue'
import Contacto from '../views/Contacto.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/quien-soy',
    component: Quien
  },
  {
    path: '/como-puedo-ayudarte',
    component: Ayudarte
  },
  {
    path: '/blog',
    component: Blog
  },
  {
    path: '/blog/:id?',
    name: 'blog',
    component: Detail
  },
  {
    path: '/contactanos',
    component: Contacto
  }
  // {
  //   path: '/quien-soy',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Quien.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
