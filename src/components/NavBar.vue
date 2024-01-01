<template>
  <div>
    <nav>
      <!-- Navbar -->
      <div class="nav-wrapper brown darken-4">
        <router-link :to="'/'" class="brand-logo"><i class="material-icons">shopping_cart</i></router-link>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <!-- Router Links -->
          <li>
            <router-link :to="'/'" @click="closeSideNav">Home</router-link>
          </li>
          <li>
            <router-link :to="'/'" @click="closeSideNav">Products</router-link>
          </li>
          <li>
            <router-link :to="'/about'" @click="closeSideNav">About</router-link>
          </li>
          <li>
            <MiniCart />
          </li>
        </ul>
      </div>
    </nav>

    <!-- Mobile Sidebar -->
    <ul class="sidenav" id="mobile-demo">
      <!-- Router Links -->
      <li>
        <router-link :to="'/'" @click="closeSideNav">Home</router-link>
      </li>
      <li>
        <router-link :to="'/'" @click="closeSideNav">Products</router-link>
      </li>
      <li>
        <router-link :to="'/about'" @click="closeSideNav">About</router-link>
      </li>
      <li style="margin-left: 40px">
        <MiniCart />
      </li>
    </ul>
  </div>
</template>

<script>
import MiniCart from './MiniCart.vue';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

export default {
  name: 'NavBar',
  components: {
    MiniCart
  },
  mounted() {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  },
  methods: {
    closeSideNav() {
      const sideNavInstances = M.Sidenav.getInstance(document.querySelector('.sidenav'));
      sideNavInstances.close();
    }
  }
};
</script>

<style scoped>
/* Your custom styles here */
@media (max-width: 992px) {
  .brand-logo {
    margin-left: 10px;
  }
}
</style>
