<template>
  <a-layout class="dashboard-layout">
    <SideBar class="dashboard-sidebar" />

    <a-layout class="dashboard-body">
      <HeaderNavBar />
      <a-layout-content>
        <slot />
      </a-layout-content>

      <!-- <a-layout-footer>Footer</a-layout-footer> -->
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import SideBar from '@/components/common/SideBar.vue';
import HeaderNavBar from '@/components/common/HeaderNavBar.vue';
</script>

<style lang="scss" scoped>
.dashboard-layout {
  .dashboard-body {
    height: 100vh;
    min-width: $md;
    overflow-y: auto;
  }
}
</style>
