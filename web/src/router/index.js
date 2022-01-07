import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/posts/:id',
    name: 'userPostById',
    component: () => import(/* webpackChunkName: "userPostById" */ '../views/posts/_id.vue')
  },
  {
    path: '/tribes/:tribeId/',
    name: 'tribeById',
    component: () => import(/* webpackChunkName: "tribeById" */ '../views/tribes/_tribeId/Index')
  },
  {
    path: '/tribes/:tribeId/posts/:postId',
    name: 'postInTribe',
    component: () => import(/* webpackChunkName: "postInTribe" */ '../views/tribes/_tribeId/posts/_postId')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
