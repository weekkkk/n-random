import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    name: 'random',
    path: '/',
    meta: { Title: 'Random' },
    component: () => import('@/pages/random.vue'),
  },
  {
    name: 'about',
    path: '/about',
    meta: { Title: 'About' },
    component: () => import('@/pages/about.vue'),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export { routes };
export default router;

router.beforeEach(async (to, from, next) => {
  const { Title } = to.meta;
  const brand = '@n-';
  document.title = `${brand}${(Title as string)
    .replace(' ', '-')
    .toLowerCase()}`;
  next();
});
