import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/create',
      component: () => import('@/views/Create.vue'),
    },
    {
      path: '/edit/:id',
      component: () => import('@/views/BookEdit.vue'),
    },
  ],
})

