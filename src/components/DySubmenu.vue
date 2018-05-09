<template>
  <el-submenu v-if="isFolder" :index="model.id">
    <template slot="title">
      <span>{{model.name}}</span>
    </template>
    <dy-submenu :index="item.id" v-for="item in model.children" :model="item" :key="item.id">
      <template slot="title">
        <span>{{item.name}}</span>
      </template>
    </dy-submenu>
  </el-submenu>
  <el-menu-item :index="model.id" v-else>
     <span slot="title">{{model.name}}</span>
  </el-menu-item>
</template>

<script>
export default {
  name: 'dy-submenu',
  props: [
    'model'
  ],
  computed: {
    isFolder: function () {
      return this.model.children && this.model.children.length
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
