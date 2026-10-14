import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  // Implements smooth scrolling to hashed sections or restores scroll position[cite: 4, 5]
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { 
        el: to.hash, 
        behavior: 'smooth',
        top: 70 // Offset for sticky navbar
      }
    }
    return savedPosition || { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router