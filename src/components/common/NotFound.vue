<template>
  <div class="not-found">Not Found</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { HomeOutlined, GoogleOutlined } from '@ant-design/icons-vue';
</script>

<style scoped lang="scss">
.not-found {
  display: flex;
  margin: $mpmd;
  border-radius: 12px;
  min-height: calc(100vh - 88px);
  align-items: center;
  justify-content: center;
  font-size: 68px;
  font-family: fantasy;
}
</style>
