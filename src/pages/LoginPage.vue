<script lang="ts" setup="">
import ky from "ky";
import { computed, ref } from "vue";
import router from "@/config/router.ts";

const email = ref<string>("");
const password = ref<string>("");

const isDisabled = computed(() => !(email.value && password.value))

const login = () => {
  ky('/api/login', {
    method: "post",
    json: {
      email: email.value, //pshabanov.official@gmail.com
      password: password.value, //5??ZnWn2jf
    },
  }).then(() => {
    router.push({ name: "home" });
  })
}
</script>

<template>
  <div class="wrapper login-page">
    <form @submit.prevent="login">
      <h1>Login Form</h1>
      <input v-model="email" type="text" placeholder="Email"/>
      <input v-model="password" type="password" placeholder="Password"/>
      <button type="submit" :disabled="isDisabled">Login</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.login-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

input {
  width: 100%;
  padding: 12px;
  background-color: #fff;
  border-radius: 6px;
  outline: none;
  border: 1px solid var(--color-border);

  &:focus {
    border-color: var(--color-focus);
  }
}

form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

button {
  background-color: var(--color-btn);
  color: #fff;
  padding: 12px;
  border-radius: 6px;
  cursor: pointer;

  transition: background-color 0.3s ease-in-out;

  &:hover {
    transition: background-color 0.3s ease-in-out;
    background-color: var(--color-btn-hover);
  }

  &:disabled {
    background-color: var(--color-disabled);
    border: 1px transparent solid;
  }
}
</style>
