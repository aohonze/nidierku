import { ref, computed } from 'vue';

import { useDark, useToggle } from '@vueuse/core';

import darkThemeCss from 'ant-design-vue/dist/antd.dark.css';
import lightThemeCss from 'ant-design-vue/dist/antd.css';

type AppTheme = 'light' | 'dark';

/** 更改主题 */
const changeTheme = (theme: AppTheme) => {
  const themeCss = theme === 'dark' ? darkThemeCss : lightThemeCss;
  let bodyElement = document.querySelector('body');
  bodyElement?.setAttribute('theme', theme);
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
  styleDom.innerHTML = themeCss;
  head.appendChild(styleDom);
};

export function useTheme() {
  const isDark = ref<boolean>(false);
  const isSideBarCollapsed = ref<boolean>(false);

  const appTheme = computed(() => (isDark.value ? 'dark' : 'light'));

  /** 切换暗黑主题 */
  const toggleDark = () => {
    isDark.value = !isDark.value;
    changeTheme(appTheme.value);
  };

  /** 切换sidebar收缩状态 */
  const onSidebarCollected = (collected: boolean) =>
    (isSideBarCollapsed.value = collected);

  return {
    isDark,
    isSideBarCollapsed,
    appTheme,

    toggleDark,
    onSidebarCollected,
  };
}
