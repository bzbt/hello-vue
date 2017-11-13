<template>
  <div id="app">
    <header>
      <img class="logo" src="./assets/logo.png">
      <basenav></basenav>
    </header>

    <router-view/>

  </div>
</template>

<script>
  import BaseNav from '@/components/Navigation.vue'

  export default {
    name: 'app',

    components: {
      'basenav': BaseNav
    }
  }
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    max-width: 1200px;
    margin: 0 auto;
    font-size: 1em;
  }

  h1, h2 {
    font-weight: normal;
  }
  a{
    color: #42b983;
    text-decoration: none;
  }
  header {
    display: block;
    width: 100%;
    height: 48px;
    margin-bottom: 15px;
  }

  .logo {
    max-height: 48px;
    float: left;
    display: inline-block;
    margin-right: 15px;;
  }
</style>
