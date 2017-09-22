<template>
  <div id="app">
    <eleHeader></eleHeader>
    <home-page></home-page>
    <eleFooter></eleFooter>

    <router-view></router-view>
  </div>
</template>

<script>
  import eleHeader from "./components/header/header.vue";
  import homePage from "./components/home-page/home-page.vue";
  import eleFooter from "./components/footer/footer.vue";

export default {
  components:{
    eleHeader,eleFooter,homePage
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  position relative
  height 100%
  width 100%
</style>
