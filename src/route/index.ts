import { createRouter, createWebHashHistory } from 'vue-router';

const Home = () => import('@/pages/Home.vue');
const NotFound = () => import('@/components/common/NotFound.vue');

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
