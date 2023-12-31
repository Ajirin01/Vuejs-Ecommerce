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
    margin: 0 auto;
  }

  .pt-2{
    padding-top: 2px
  }
  .pt-4{
    padding-top: 4px
  }
  .pt-6{
    padding-top: 6px
  }
  .pt-8{
    padding-top: 8px
  }
  .pt-10{
    padding-top: 10px
  }
  .pt-12{
    padding-top: 12px
  }

  .pb-2{
    padding-bottom: 2px
  }
  .pb-4{
    padding-bottom: 4px
  }
  .pb-6{
    padding-bottom: 6px
  }
  .pb-8{
    padding-bottom: 8px
  }
  .pb-10{
    padding-bottom: 10px
  }
  .pb-12{
    padding-bottom: 12px
  }

  .mt-2{
    margin-top: 2px
  }
  .mt-4{
    margin-top: 4px
  }
  .mt-6{
    margin-top: 6px
  }
  .mt-8{
    margin-top: 8px
  }
  .mt-10{
    margin-top: 10px
  }
  .mt-12{
    margin-top: 12px
  }

  .mb-2{
    margin-bottom: 2px
  }
  .mb-4{
    margin-bottom: 4px
  }
  .mb-6{
    margin-bottom: 6px
  }
  .mb-8{
    margin-bottom: 8px
  }
  .mb-10{
    margin-bottom: 10px
  }
  .mb-12{
    margin-bottom: 12px
  }

  .ml-2{
    margin-left: 2px
  }
  .ml-4{
    margin-left: 4px
  }
  .ml-6{
    margin-left: 6px
  }
  .ml-8{
    margin-left: 8px
  }
  .ml-10{
    margin-left: 10px
  }
  .ml-12{
    margin-left: 12px
  }
</style>
