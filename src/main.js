import App from './App.vue';
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import store from './store'; // Import your Vuex store

import jQuery from 'jquery';

import ProductDetail from './components/product_detail/ProductDetail.vue'; // Assuming you have a component for ProductDetail
import HomeView from './components/HomeView'
import AboutUs from './components/AboutUs'

window.$ = window.jQuery = jQuery;

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/product/:id', component: ProductDetail, props: true },
        { path: '/', component: HomeView },
        { path: '/about', component: AboutUs }
    ]
});

const app = createApp(App)

app.use(router);
app.use(store)
app.mount('#app')
