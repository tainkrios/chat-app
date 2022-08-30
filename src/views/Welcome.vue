<script setup lang="ts">
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { ref } from "vue";

const showLogin = ref(true)

const toggleShowLogin = () => {
  showLogin.value = !showLogin.value
}
</script>

<template>
  <div class="text-center py-5 w-[90%] max-w-[960px] mx-auto my-20 rounded-2xl shadow-md bg-white">
    <p>Welcome</p>
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm />
      <p>No account yet? <span class="hover:cursor-pointer underline font-bold" @click="toggleShowLogin">Signup</span></p>
    </div>
    <div v-else>
      <h2>Sign up</h2>
      <SignupForm />
      <p>Already have account? <span class="hover:cursor-pointer underline font-bold" @click="toggleShowLogin">Login</span></p>
    </div>
  </div>
</template>
