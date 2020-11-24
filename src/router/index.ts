import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import ExhibitionDetail from '../views/ExhibitionDetail.vue'
import Exhibition from '../views/Exhibition.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/the-project',
    name: 'TheProject',
    component: () => import(/* webpackChunkName: "about" */ '../views/Project.vue')
  },
  {
    path: '/about-minemark',
    name: 'about-minemark',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutMineMark.vue')
  },
  {
    path: '/exhibition/:id?',
    name: 'Exhibition',
    component: Exhibition,
    children: [{
      path: 'detail',
      name: 'ExhibitionDetail',
      component: ExhibitionDetail
    }]
  },
  {
    path: '/donate',
    name: 'donate',
    component: () => import(/* webpackChunkName: "about" */ '../views/Donate.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
