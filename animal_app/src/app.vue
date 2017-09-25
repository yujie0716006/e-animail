<template>
  <!--@touchmove.prevent-->
  <div id="app" >

    <!--头部和底部都已经映射好了，中间的内容就是路由触发时映射的内容-->
    <!--用来显示首页，分类，购物车和我的E宝等内容的-->
    <router-view></router-view>

    <eleFooter></eleFooter>
  </div>
</template>

<script>
  import eleFooter from "./components/footer/footer.vue";

export default {
  components:{
    eleFooter
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  position relative
  height 100%
  width 100%
</style>
