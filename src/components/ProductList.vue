<template>
  <div class="home">
    <!-- Display products in a 4-column grid -->
    <div class="row">
      <div v-for="product in products" :key="product.id" class="col s12 m6 l3">
        <ProductItem :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue'; // Adjust the path as per your project structure

export default {
  name: 'ProductList',
  components: {
    ProductItem
  },
  data() {
    return {
      products: this.$store.state.products
    };
  }
}

</script>

<style>
/* Component-specific styles */
/* You may apply styles for grid layout here */
</style>
