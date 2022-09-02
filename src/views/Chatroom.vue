<template>
  <div class="pt-5 w-[90%] max-w-[960px] mx-auto my-20 rounded-2xl shadow-md bg-white">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script setup lang="ts">
import { getUser } from "@/composables/getUser";
import { watch } from "vue";
import { useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";
import NewChatForm from "../components/NewChatForm.vue";
import ChatWindow from "../components/ChatWindow.vue";

const { user } = getUser()
const router = useRouter()

watch(user, () => {
  if (!user.value) {
    router.push('/welcome')
  }
})
</script>

<style scoped>

</style>