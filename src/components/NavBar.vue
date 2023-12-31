<template>
  <div>
    <nav>
      <div class="nav-wrapper brown darken-4">
        <a href="#" class="brand-logo"><i class="material-icons">shopping_cart</i></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <router-link :to="'/'">
            </router-link>
            <li>
                <router-link :to="'/'">Home</router-link>
            </li>
            <li>
                <router-link :to="'/'">Products</router-link>
            </li>
            <li>
                <router-link :to="'/about'">About</router-link>
            </li>
          <!-- Add other menu items -->
        </ul>
      </div>
    </nav>
    <!-- Other content using Materialize CSS classes -->
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @media (min-width: 400px){
        .brand-logo{
            margin-left: 20px
        }
    }
</style>
