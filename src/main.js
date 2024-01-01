import App from './App.vue';
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import store from './store'; // Import your Vuex store

import jQuery from 'jquery';
// import Flutterwave from  'flutterwave-vue-v3'

import ProductDetail from './components/product_detail/ProductDetail.vue'; // Assuming you have a component for ProductDetail
import HomeView from './components/HomeView'
import AboutUs from './components/AboutUs'
import ManageCart from './components/ManageCart'
import CheckOut from './components/CheckOut'

window.$ = window.jQuery = jQuery;

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/product/:id', component: ProductDetail, props: true },
        { path: '/', component: HomeView },
        { path: '/about', component: AboutUs },
        { path: '/cart', component: ManageCart },
        { path: '/checkout', component: CheckOut }
    ]
});

const app = createApp(App)

app.use(router);
app.use(store)
// app.use(Flutterwave, { publicKey: 'FLWPUBK_TEST-fac2c00f396fddbc07310db113fd17c2-X' } )
app.mount('#app')

// Load FlutterwaveCheckout globally
const flutterwaveScript = document.createElement('script');
flutterwaveScript.src = 'https://checkout.flutterwave.com/v3.js';
flutterwaveScript.async = true;

flutterwaveScript.onload = () => {
  // Now that the script is loaded, FlutterwaveCheckout function should be available globally
  console.log('Flutterwave script loaded successfully.');
};

document.head.appendChild(flutterwaveScript);
