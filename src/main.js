import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';
import { store } from './store/index'

// import { store } from './components/store/index.js';

const app = createApp(App);

// Gunakan store VueX
app.use(store);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Gunakan router Vue
app.use(router);

// Pasang aplikasi ke elemen dengan id "app"
app.mount('#app');

// app.use(store)

import 'bootstrap/dist/js/bootstrap.js';