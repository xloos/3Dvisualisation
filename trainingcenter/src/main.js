import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importujte router

import './assets/styles.css';

// Vytvorte Vue aplikáciu a použite router
createApp(App).use(router).mount('#app');
