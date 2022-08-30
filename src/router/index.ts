import { auth } from '@/firebase/config'
import Chatroom from '@/views/Chatroom.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'

const requireAuth = (to: string, from: string, next) => {
  let user = auth.currentUser
  if (!user) {
    next({ name: 'welcome' })
  } else {
    next()
  }
}

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
      component: Chatroom,
      beforeEnter: requireAuth
    },
  ]
})

export default router
