import { auth } from '@/firebase/config'
import Chatroom from '@/views/Chatroom.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'

const requireAuth = (_to: any, _from: any, next: (arg0?: { name: string } | undefined) => void) => {
  let user = auth.currentUser
  if (!user) {
    next({ name: 'welcome' })
  } else {
    next()
  }
}

const requireNoAuth = (to: any, from: any, next: (arg0?: { name: string } | undefined) => void) => {
  let user = auth.currentUser
  if (user) {
    next({ name: 'chatroom' })
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
      component: Welcome,
      beforeEnter: requireNoAuth
    },
    {
      path: '/chatroom',
      name: 'chatroom',
      component: Chatroom,
      beforeEnter: requireAuth
    }
  ]
})

export default router
