import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    name: 'random',
    path: '/',
    component: () => import('@/pages/random.vue'),
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('@/pages/about.vue'),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export { routes };
export default router;
