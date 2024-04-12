import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createMemoryHistory } from 'vue-router'

const routes: RouteRecordRaw[] | any[] = [
  { path: '/', redirect: { name: 'login' } },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/Login.vue'),
  },
  {
    path: '/home-page',
    name: 'home-page',
    component: () => import('@/pages/home/HomePage.vue'),
  },
]



const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })


export default router
