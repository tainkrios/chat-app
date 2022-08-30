<template>
  <nav v-if="user" class="flex justify-between items-center p-5">
    <div>
      <p class="my-1 mx-auto text-base text-gray-600"> Hey there {{ user?.displayName }}</p>
      <p class="my-1 mx-auto text-sm text-gray-400">Currently logged in as {{ user?.email }}</p>
    </div>
    <button @click="handleLogout">Logout</button>
  </nav>
</template>

<script setup lang="ts">
import { getUser } from '@/composables/getUser';
import { auth } from '@/firebase/config'
import { signOut } from '@firebase/auth'
import { useRouter } from 'vue-router';

const router = useRouter()
const { user } = getUser()

const handleLogout = async () => {
  await signOut(auth)
  router.push('/')
}
</script>

<style scoped>
</style>