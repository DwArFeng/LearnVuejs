<template>
  <div>
    <h2>我是用户</h2>
    <p>我是用户的内容</p>
    <h2>{{userId}}</h2>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed: {
      userId() {
        return this.$route.params.userId;
      }
    }
  }
</script>

<style scoped>

</style>