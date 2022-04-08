<script setup lang="ts">
import { SkinOutlined } from '@ant-design/icons-vue';
import { useDark, useToggle } from '@vueuse/core';

import dark from 'ant-design-vue/dist/antd.dark.css';
import light from 'ant-design-vue/dist/antd.css';

const changeTheme = (content: string) => {
  let head = document.getElementsByTagName('head')[0];
  const styleSheet = head.getElementsByTagName('style');
  // 删除现有样式
  if (styleSheet.length > 0) {
    for (let i = 0; i <= styleSheet.length; i++) {
      if (
        styleSheet[i] &&
        styleSheet[i].getAttribute('data-type') === 'theme'
      ) {
        styleSheet[i].remove();
      }
    }
  }

  // 新增主题样式
  let styleDom = document.createElement('style');
  styleDom.dataset.type = 'theme';
  styleDom.innerHTML = content;
  head.appendChild(styleDom);
};

const isDark = useDark({
  selector: '#app',
  valueDark: 'dark',
  valueLight: 'light',
  onChanged(isDark: boolean) {
    changeTheme(isDark ? dark : light);
  },
});
const toggleDark = useToggle(isDark);
</script>

<template>
  <a-button @click="toggleDark" :danger="isDark">
    <SkinOutlined />
  </a-button>
</template>
