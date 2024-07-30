import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import ITPage from '../components/ITPage.vue';
import DronePage from '../components/DronePage.vue';
import PricingPage from '../components/PricingPage.vue';
import CompanyPage from '../components/CompanyPage.vue';
import ContactPage from '../components/ContactPage.vue';
import ITBlogList from '../components/ITBlogList.vue';
import ITBlogDetail from '../components/ITBlogDetail.vue';
import DroneBlogList from '../components/DroneBlogList.vue';
import DroneBlogDetail from '../components/DroneBlogDetail.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/it', name: 'IT', component: ITPage },
  { path: '/drone', name: 'Drone', component: DronePage },
  { path: '/pricing', name: 'Pricing', component: PricingPage },
  { path: '/company', name: 'Company', component: CompanyPage },
  { path: '/contact', name: 'Contact', component: ContactPage },
  { path: '/it-blog', name: 'ITBlogList', component: ITBlogList },
  { path: '/it-blog/:id', name: 'ITBlogDetail', component: ITBlogDetail, props: true },
  { path: '/drone-blog', name: 'DroneBlogList', component: DroneBlogList },
  { path: '/drone-blog/:id', name: 'DroneBlogDetail', component: DroneBlogDetail, props: true }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
