<script setup lang="ts">
import { ref } from 'vue';
</script>

<template>
  <h1>nidierku vue template</h1>

  <router-link to="/home">Go to Home</router-link>
  <router-link to="/about">Go to About</router-link>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
