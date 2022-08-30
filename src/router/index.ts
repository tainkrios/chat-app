import Chatroom from '@/views/Chatroom.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/chatroom',
      name: 'chatroom',
      component: Chatroom
    },
  ]
})

export default router
