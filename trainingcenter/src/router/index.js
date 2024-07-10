import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '../components/LoginForm.vue';
import RegisterForm from '../components/RegisterForm.vue';
import MainPage from '../components/MainPage.vue';
import TrainingPrograms from '../components/TrainingPrograms.vue'

import ResultsAndStats from '../components/ResultsAndStats.vue'


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
  {
    path: '/trainingprograms',
    name: 'Trainingprograms',
    component: TrainingPrograms,
  },
  {
    path: '/resultsandstats',
    name: 'ResultsAndStats',
    component: ResultsAndStats,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;