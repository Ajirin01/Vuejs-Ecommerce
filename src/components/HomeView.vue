<template>
  <div>
    <product-list></product-list>
  </div>
</template>

<script>
import productList from './ProductList'
  export default {
    name: 'HomeView',
    props: {
      msg: String
    },
    components: {
      'product-list': productList
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
