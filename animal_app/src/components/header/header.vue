<template>
  <header id="header" v-show="isShow">
    <span class="close_ico">
      <img src="../image/closebtn.png" alt="1" @click="handleClose">
    </span>
    <router-link to="/#" class="header-download">
      <img src="../image/header_download.png" alt="头部下载的图片">
    </router-link>
  </header>
</template>

<script>
  export default {
    data(){
      return {
        isShow:true
      }
    },
    methods:{
      handleClose(){
        this.isShow=false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #header
    position fixed
    top 0
    z-index 1
    width 100%
    height 55px
    .close_ico
      position absolute
      line-height 55px
      padding-left 10px
      img
        width 22px
        height 22px
    .header-download
      display block
      height 100%
      img
        width 100%
        height 100%

</style>
