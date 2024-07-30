import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './components/HomePage.vue';
import ITPage from './components/ITPage.vue';
import DronePage from './components/DronePage.vue';
import PricingPage from './components/PricingPage.vue';
import CompanyPage from './components/CompanyPage.vue';
import ContactPage from './components/ContactPage.vue';
import ITBlog from './components/ITBlog.vue';
import DroneBlog from './components/DroneBlog.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/it', component: ITPage },
  { path: '/drone', component: DronePage },
  { path: '/pricing', component: PricingPage },
  { path: '/company', component: CompanyPage },
  { path: '/contact', component: ContactPage },
  { path: '/it-blog/:id', component: ITBlog },
  { path: '/drone-blog/:id', component: DroneBlog }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
