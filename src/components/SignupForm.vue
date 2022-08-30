<template>
  <form @submit.prevent="handleSubmit" class=" w-72 my-5 mx-auto">
    <input class="w-full p-4 my-2.5 mx-auto focus:outline-none" type="text" required placeholder="display name"
      v-model="displayName">
    <input class="w-full p-4 my-2.5 mx-auto focus:outline-none" type="email" required placeholder="email"
      v-model="email">
    <input class="w-full p-4 my-2.5 mx-auto focus:outline-none" type="password" required placeholder="pawwsord"
      v-model="password">
    <div class="text-red-300 text-sm">{{ error }}</div>
    <button>Sign up</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useSignup } from '@/composables/useSignup';
import { useRouter } from 'vue-router';

const { error, signup } = useSignup()

const displayName = ref('')
const email = ref('')
const password = ref('')
const router = useRouter()

const handleSubmit = async () => {
  await signup(email.value, password.value, displayName.value)
  if (!error.value) {
    router.push('/chatroom')
  }
}
</script>