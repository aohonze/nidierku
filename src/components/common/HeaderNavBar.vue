<template>
  <a-layout-header class="header-container">
    <ThemeSwitch />
    <a-avatar style="background-color: #f56a00">K</a-avatar>
  </a-layout-header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { UserOutlined } from '@ant-design/icons-vue';
import ThemeSwitch from './ThemeSwitch.vue';
</script>

<style lang="scss">
.header-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: $mpmd;
  margin: 0 $mpmd;
  border-radius: 0 0 $mpmd $mpmd;
  position: sticky;
  top: 0;

  &.ant-layout-header {
    padding: 16px 8px;
    background-color: transparent;
    background-color: $theme-bg-active;
  }

  @media (min-width: $md) {
    // margin: 10px 20px;
  }
  // }
}
</style>
