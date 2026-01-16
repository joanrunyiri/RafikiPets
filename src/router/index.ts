import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/AuthView.vue'),
    },
    {
      name: 'vet-setup',
      path: '/vet-setup',
      component: () => import('@/views/VetSetupView.vue'),
    },
  ],
})

export default router
