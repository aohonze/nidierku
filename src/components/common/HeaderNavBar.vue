<template>
  <a-layout-header class="header-container">
    <ThemeSwitch />
    <a-dropdown>
      <a-avatar style="background-color: #f56a00">K</a-avatar>
      <template #overlay>
        <a-menu @click="handleMenuClick">
          <a-menu-item key="1">
            <ProfileOutlined />
            User Info
          </a-menu-item>
          <a-menu-item key="2">
            <SettingOutlined />
            Setting
          </a-menu-item>
          <a-menu-item key="3">
            <UserOutlined />
            Log out
          </a-menu-item>
        </a-menu>
      </template>
      <template #icon><UserOutlined /></template>
    </a-dropdown>
  </a-layout-header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  UserOutlined,
  SettingOutlined,
  ProfileOutlined,
} from '@ant-design/icons-vue';
import ThemeSwitch from './ThemeSwitch.vue';

const handleMenuClick = (e) => {
  console.log(e);
};
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
