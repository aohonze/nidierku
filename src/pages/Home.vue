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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { HomeOutlined, GoogleOutlined } from '@ant-design/icons-vue';
</script>

<style scoped lang="scss">
.home-page {
  display: flex;
  min-height: calc(100vh - 88px);
  margin: $mpmd;
  border-radius: 12px;
  background-color: $color-white;
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
