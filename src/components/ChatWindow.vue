<template>
  <div class="py-7 px-5 bg-slate-100 scrollBottom">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="max-h-96 overflow-auto" ref="messages">
      <div v-for="doc in formatedDocuments" :key="doc.id" class="my-4">
        <span class="block font-sm mb-1 text-gray-400">{{ doc.createdAt }}</span>
        <span class="font-bold mr-1">{{ doc.user}}: </span>
        <span>{{ doc.message}}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getCollection } from '@/composables/getCollection';
import { computed, ref } from '@vue/reactivity';
import { formatDistanceToNow } from 'date-fns';
import { onUpdated } from 'vue';

const { documents, error } = getCollection('messages')

const formatedDocuments = computed(() => {
  if (documents.value) {
    return documents.value.map((doc: { createdAt: { toDate: () => number | Date; }; }) => {
      const time = formatDistanceToNow(doc.createdAt.toDate())
      return { ...doc, createdAt: time }
    })
  }
});

const messages = ref()

onUpdated(() => { 
  messages.value.scrollTop = messages.value.scrollHeight
 })

</script>