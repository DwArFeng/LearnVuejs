<template>
  <div>
    <h2>我是Profile组件</h2>
    <p>{{this.$route.query.name}} </p>
    <p>{{this.$route.query.age}} </p>
    <p>{{this.$route.query.height}} </p>
  </div>
</template>

<script>
  export default {
    name: "Profile"
  }
</script>

<style scoped>

</style>