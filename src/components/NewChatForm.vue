<template>
  <form class="m-3">
    <textarea 
      class="w-full max-w-full mb-2 p-3 outline-none box-border border-0 "
      placeholder="Type a message and hit enter to send..." v-model="message"
      @keydown.enter.prevent="handleSubmit"></textarea>
    <div class="text-red-300 text-sm">{{ error }}</div>
  </form>
</template>

<script setup lang="ts">
import { getUser } from '@/composables/getUser';
import { ref } from 'vue';
import { timestamp } from '@/firebase/config';
import { useCollection } from '@/composables/useCollection';

const message = ref('')
const { user } = getUser()
const { docRef, error } = useCollection('messages')


const handleSubmit = async () => {
  const chat = {
    message: message.value,
    user: user.value?.displayName,
    createdAt: timestamp
  }

  await docRef(chat)
  if(!error.value) {
    message.value = ''
  }
}
</script>

<style scoped>
</style>