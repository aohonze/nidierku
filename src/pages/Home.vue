<script setup lang="ts">
import { ref } from 'vue';
import { HomeOutlined, GoogleOutlined } from '@ant-design/icons-vue';
</script>

<template>
  <div class="home-page">
    <div class="title">nidierku</div>

    <div class="discription">
      This is a template, powered by vue3, ts, vite, antd-vue...
    </div>

    <div class="action">
      <a-button>
        <home-outlined />
        <router-link to="/home"></router-link>
      </a-button>
      <a-button>
        <router-link to="/about">
          <google-outlined />
        </router-link>
      </a-button>
    </div>
  </div>
</template>

<style scoped lang="less">
.home-page {
  .title {
    font-size: 68px;
    font-family: fantasy;
  }

  .discription {
    font-size: 24px;
    color: #aaaaaa;
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
