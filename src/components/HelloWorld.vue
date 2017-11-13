<template>
  <div class="hello">
    <h1>
      {{ msg }}
    </h1>

    <custom-c></custom-c>

    <p>
      <button class="btn btn-primary" @click="seen = !seen">Toggle</button>
    </p>
    <div class="initial" v-if="seen">
      <h2>Essential Links</h2>
      <ul>
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
        <br>
        <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This
          Template</a></li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
        <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
        <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
      </ul>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import MyComponent from './MyComponent.vue'

  export default {
    name: 'HelloWorld',

    data: function () {
      return {
        msg: 'Welcome to Your Vue.js App',
        isActive: true,
        seen: false,
        hasWell: true,
        error: {
          type: 'fatal'
        }
      }
    },

    components: {
      'custom-c': MyComponent
    },

    methods: {
      myFilter: function () {
        console.log(this)
        this.senn = !this.seen
        // some code to filter users
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  .hello{
    text-align: center;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .active {
    color: #f0ad4e;
  }

  .active.text-danger {
    border-bottom: double 3px #fc8c84;
  }
</style>
