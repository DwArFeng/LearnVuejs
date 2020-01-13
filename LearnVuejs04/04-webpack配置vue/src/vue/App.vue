<template>
  <div>
    <h2>{{message}}</h2>
    <button v-on:click="btnClick">按钮</button>
    <h2>{{name}}</h2>
    <Cpn/>
  </div>
</template>

<script>
  import Cpn from './Cpn.vue'

  export default {
    name: 'App',
    data() {
      return {
        message: 'Hello Webpack',
        name: 'DwArFeng',
      }
    },
    methods: {
      btnClick: function () {

      }
    },
    components: {
      Cpn
    }
  }
</script>

<style scoped>

</style>