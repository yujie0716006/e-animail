<template>
  <div>
  <div class="header">
    <router-link to="/homepage/home" class="aback"></router-link>
    选择收货地区
    <span class="menu" @click="handleMenu"></span>
  </div>
  <Split></Split>
  <div class="more" v-show="isOpen">
    <router-link to="#">
      <img src="../image/head_icon1.png" alt="0">
      <p>首页</p>
    </router-link>
    <router-link to="#">
      <img src="../image/head_icon2.png" alt="0">
      <p>商品分类</p>
    </router-link>
    <router-link to="#">
      <img src="../image/head_icon4.png" alt="0">
      <p>购物车</p>
    </router-link>
    <router-link to="#">
      <img src="../image/head_icon5.png" alt="0">
      <p>我的e宠</p>
    </router-link>
  </div>
  <div class="buttons">
    <mt-button type="default" class="cats button">猫猫站</mt-button>
    <mt-button type="default" class="dogs button">狗狗站</mt-button>
    <mt-button type="default" class="fishes button">水族站</mt-button>
  </div>
  <div class="choose">

  </div>
  </div>
</template>

<script>
  import Split from "../split.vue";
  export default {
    components:{
      Split
    },
    data(){
      return {
        isOpen:false
      }
    },
    methods:{
      handleMenu(){
      this.isOpen=!this.isOpen;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.header
  position relative
  text-align center
  font-size 18px
  height 50px
  line-height 50px
  .aback
    position absolute
    left 15px
    top 15px
    display inline-block
    width 22px
    height 20px
    background-image url("../image/personal-bico1.png")
    background-repeat no-repeat
    background-size 12px 17px
  .menu
    position absolute
    right 15px
    top 15px
    display inline-block
    width 22px
    height 20px
    background-image url("../image/imgtk-new.png")
    background-repeat no-repeat
    background-size 100% 100%


.more
  height 70px
  margin 2px 0
  display flex
  a
    color #666
    font-size 14px
    display block
    flex 1
    text-align center
    padding 10px
    img
      padding 4px
      width 30px
      height 30px

.buttons
  height 50px
  background #F5F5F5
  display flex
  padding-top 10px
  justify-content space-around
  .button
    width 100px
    height 35px
    background #b9b9b9
    color #666
    border-radius 5px
    font-size 15px
</style>
