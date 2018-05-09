<template>
  <el-container>
    <router-view></router-view>
    <el-footer class="copyright">
      Copyright © Qi Zhi Kitchen, All Rights Reserved.
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
