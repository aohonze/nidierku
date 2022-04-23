<template>
  <a-layout-sider
    collapsible
    collapsed-width="70"
    class="sidebar-container"
    @collapse="onSidebarCollected"
  >
    <div class="sidebar-logo">{{ isSideBarCollapsed ? 'n' : 'nidierku' }}</div>
    <a-menu
      v-model="selectedKeys"
      mode="inline"
      class="sidebar-menu"
      @select="onSideBarItemClick"
    >
      <a-menu-item v-for="item of sideBarMenu" :key="item.key">
        <component :is="item.icon" />
        <span class="nav-text">{{ item.name }}</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import {
  HomeOutlined,
  RadarChartOutlined,
  UploadOutlined,
  NodeIndexOutlined,
} from '@ant-design/icons-vue';

import { useTheme } from '@/hooks/use-theme';
import $router from '@/route';

const { isSideBarCollapsed, onSidebarCollected } = useTheme();

const selectedKeys = ref<string[]>(['home']);

const sideBarMenu = [
  { key: 'home', link: '/home', name: 'Home', icon: HomeOutlined },
  { key: 'canvas', link: '/canvas', name: 'Canvas', icon: RadarChartOutlined },
  { key: 'js', link: '/js', name: 'JavaScript', icon: UploadOutlined },
  {
    key: 'setting',
    link: '/setting',
    name: 'Setting',
    icon: NodeIndexOutlined,
  },
];

const onSideBarItemClick = (item: string) => {
  $router.push(item?.key ?? '/');
};
</script>

<style lang="scss">
.sidebar-container {
  &.ant-layout-sider {
    padding: $mpmd;
    background-color: transparent;
    border-radius: 0 $mpmd $mpmd 0;
    transition: all 0.1s;
    &-collapsed {
      background-color: $theme-bg;
    }
    .ant-layout-sider-trigger {
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: $color-gray-4;
      color: $color-gray-8;
      border-radius: 0 0 $mpmd 0;
    }
  }
  .sidebar-logo {
    height: 50px;
    margin: $mpxxxl 0;
    font-weight: $fw-semibold;
    padding: $submenu-links-p;
    font-size: $mpxxxl;
    text-align: center;
    font-family: fantasy;
  }

  .sidebar-menu {
    background: transparent !important;
    border: none;
    .ant-menu-item {
      width: 100%;
      height: 48px;
      line-height: 48px;
      border-radius: $mpsm;
      font-weight: $fw-semibold;
      color: $theme-text;
      :hover {
        color: $theme-text-hover;
      }
      &-selected {
        box-shadow: $shadow-3;
        color: $theme-text-active;
        background-color: $theme-bg-active !important;
        &::after {
          content: none;
        }
      }
    }
  }
}
</style>
