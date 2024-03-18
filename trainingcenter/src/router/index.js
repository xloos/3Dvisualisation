import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '../components/LoginForm.vue';
import RegisterForm from '../components/RegisterForm.vue';
import MainPage from '../components/MainPage.vue';
import TrainingPrograms from '../components/TrainingPrograms.vue'
import TrainingProgram1 from '../components/TrainingProgram1.vue'
import TrainingProgram2 from '../components/TrainingProgram2.vue'
import TrainingProgram3 from '../components/TrainingProgram3.vue'


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
    path: '/trainingprogram1',
    name: 'Trainingprogram1',
    component: TrainingProgram1,
  },

  {
    path: '/trainingprogram2',
    name: 'Trainingprogram2',
    component: TrainingProgram2,
  },

  {
    path: '/trainingprogram3',
    name: 'Trainingprogram3',
    component: TrainingProgram3,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;