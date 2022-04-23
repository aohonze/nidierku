<script setup lang="ts">
import { SkinOutlined, SwapOutlined } from '@ant-design/icons-vue';
import { useTheme } from '@/hooks/use-theme';

const { toggleDark, isDark } = useTheme();
</script>

<template>
  <a-button @click="toggleDark" :danger="isDark" type="text" shape="circle">
    <template #icon>
      <skin-outlined />
    </template>
  </a-button>
</template>
