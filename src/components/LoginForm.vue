<template>
  <form @submit.prevent="handleSubmit" class=" w-72 my-5 mx-auto">
    <input class="w-full p-4 my-2.5 mx-auto focus:outline-none" type="email" required placeholder="email"
      v-model="email">
    <input class="w-full p-4 my-2.5 mx-auto focus:outline-none" type="password" required placeholder="pawwsord"
      v-model="password">
    <div class="text-red-300 text-sm">{{ error }}</div>
    <button>Login</button>
  </form>
</template>

<script setup lang="ts">
import { useLogin } from '@/composables/useLogin';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const { error, login } = useLogin()

const email = ref('')
const password = ref('')
const router = useRouter()

const handleSubmit = async () => {
  await login(email.value, password.value)
  if (!error.value) {
    router.push('/chatroom')
  }
}
</script>