import { createApp } from 'vue';
import App from './App.vue';
import router from './route';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import 'ant-design-vue/dist/antd.dark.css';

createApp(App).use(router).use(Antd).mount('#app');
