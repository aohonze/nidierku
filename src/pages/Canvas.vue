<template>
  <div class="canvas-page"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { HomeOutlined, GoogleOutlined } from '@ant-design/icons-vue';
</script>

<style scoped lang="scss">
.canvas-page {
  display: flex;
  margin: $mpmd;
  border-radius: 12px;
  min-height: calc(100vh - 88px);
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
