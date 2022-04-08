<script setup lang="ts">
import { ref } from 'vue';
import {
  HomeOutlined,
  GoogleOutlined,
  SkinOutlined,
} from '@ant-design/icons-vue';
import { useDark, useToggle } from '@vueuse/core';
import ThemeSwitch from '../components/common/ThemeSwitch.vue';

const isDark = useDark({
  selector: '#app',
  valueDark: 'dark',
  valueLight: 'light',
  onChanged(dark: boolean) {
    // update the dom, call the API or something
    if (dark) {
    }
  },
});
const toggleDark = useToggle(isDark);
</script>

<template>
  <div class="home-page">
    <div class="side">
      <div class="title">nidierku</div>
    </div>
    <div class="content">
      <div class="discription">
        This is a template, powered by vue3, ts, vite, antd-vue...
      </div>

      <div class="action">
        <a-button target="/home">
          <HomeOutlined />
          Home
        </a-button>
        <a-button target="/about">
          <GoogleOutlined />
          About
        </a-button>
        <ThemeSwitch />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.home-page {
  display: flex;
  min-height: 100vh;
  .side {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32px;
    width: 500px;
  }
  .content {
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .title {
    font-size: 68px;
    font-family: fantasy;
  }

  .discription {
    font-size: 24px;
    text-align: center;
  }
  .action {
    margin-top: 32px;
    display: flex;
    justify-content: center;
    .ant-btn:not(:last-child) {
      margin-right: 16px;
    }
  }
}
</style>
