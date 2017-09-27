<template>
  <div>
    <eleHeader></eleHeader>
    <div id="header-bottom">
      <div class="search">
        <router-link to="/carordog">
          <span>狗狗站</span>
        </router-link>
        <span>|</span>
        <router-link to="/carordog" class="citys">
          <span>重庆</span>
          <span>^</span>
        </router-link>
        <router-link to="/#" class="searchA">
          <input type="search" placeholder="搜索商品和品牌" class="inputSearch">
          <span class="search-ico"></span>
        </router-link>
        <router-link to="/center">
          <span class="mydope">
             <img src="../image/mydope.png" alt="0">
          </span>
        </router-link>
      </div>
      <Tabs></Tabs>
    </div>
    <!--用来显示狗狗站的一些路由显示的-->
    <router-view></router-view>
  </div>
</template>

<script>
  import eleHeader from "../header/header.vue";
  import Tabs from "./tabs.vue";
  export default {
    components: {
      Tabs,eleHeader
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#header-bottom
  width 100%
  position fixed
  z-index 1
  background: #fff;
  top 55px
  font-size 14px
  line-height 14px
  padding-top 5px
  .search
    padding 10px 10px
    position relative
    .searchA
      position relative
      display inline-block
      width 60%
      height 25px
      vertical-align middle
      .inputSearch
        width 100%
        height 25px
        background #e9e9e9
        border-radius 4px
        color #bcbcbc
        text-indent 10px
        font-size 13px
        outline none
      .search-ico
        position absolute
        top 7px
        right 8px
        display inline-block
        background-image url("../image/search.png")
        background-size 100% 100%
        background-repeat no-repeat
        width 11px
        height 11px
    .mydope
      display inline-block
      width 25px
      height 25px
      position absolute
      right 10px
      img
        width 100%
        height 100%
        /*内容区的宽度要大于包裹器的宽度，这样better-scroll才会有效*/

</style>
