<template>
  <div class="py-7 px-5 bg-slate-100">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="max-h-96 overflow-auto">
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
import { computed } from '@vue/reactivity';
import { formatDistanceToNow } from 'date-fns'

const { documents, error } = getCollection('messages')

const formatedDocuments = computed(() => {
  if (documents.value) {
    return documents.value.map((doc: { createdAt: { toDate: () => number | Date; }; }) => {
      const time = formatDistanceToNow(doc.createdAt.toDate())
      return { ...doc, createdAt: time }
    })
  }
})
</script>