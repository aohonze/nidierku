<template>
  <DashBoard>
    <!-- <router-view /> -->

    <router-view v-slot="{ Component }">
      <transition name="route">
        <component :is="Component" />
      </transition>
    </router-view>
  </DashBoard>
</template>

<script setup lang="ts">
import DashBoard from './layout/DashBoard.vue';
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.route-enter-active,
.route-leave-active {
  transition: opacity 0.3s ease;
}

.route-enter-from,
.route-leave-to {
  opacity: 0.3;
}
</style>
