import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Terms from '../pages/Terms.vue'
import Privacy from '../pages/Privacy.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/terms',
      name: 'terms',
      component: Terms
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy
    }
  ]
})

export default router
