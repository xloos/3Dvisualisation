import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '../components/LoginForm.vue';
import RegisterForm from '../components/RegisterForm.vue';
import MainPage from '../components/MainPage.vue';

const routes = [
  {
        path: '/',
        redirect: '/login', // Presmerovanie z koreňa na /login
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginForm,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterForm,
  },
  {
    path: '/mainpage',
    name: 'Mainpage',
    component: MainPage,
  },
  // Pridajte ďalšie cesty podľa potreby
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;