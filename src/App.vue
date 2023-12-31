<template>
  <nav-bar></nav-bar>
  <div class="custom-container">
    <router-view></router-view>
  </div>
</template>

<script>
  import navBar from './components/NavBar.vue'

  export default {
    name: 'App',

    components: {
      'nav-bar': navBar
    },

    methods: {
      welcome(){
        console.log("hello")
      }
    },

    created() {
      this.welcome();
      console.log(window.$)
    }
  }
</script>

<style>
  .custom-container{
    width: 85%;
    margin: 0 auto
  }
</style>
