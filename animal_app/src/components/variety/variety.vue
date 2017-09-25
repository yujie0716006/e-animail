<template>
  <div class="bgVariety">
   <div class="searchHeader">
    <div class="inner">
      <router-link to="">分类</router-link>
      <router-link to="">品牌</router-link>
    </div>
     <router-link to="" class="searchPng">
       <img src="../image/search.png" alt="4">
     </router-link>
   </div>
   <div class="content">
      <div class='content-left' ref="list">
        <ul class="contentUl">
          <li>
            <router-link to="#">为您服务</router-link>
          </li>
          <div class="innerLine"></div>
          <li>
            <router-link to="#">为您服务</router-link>
          </li>
          <div class="innerLine"></div>
          <li>
            <router-link to="#">为您服务</router-link>
          </li>
          <div class="innerLine"></div>
          <li>
            <router-link to="#">为您服务</router-link>
          </li>
          <div class="innerLine"></div>
          <li>
            <router-link to="#">为您服务</router-link>
          </li>
          <div class="innerLine"></div>
          <li>
            <router-link to="#">为您服务</router-link>
          </li>
          <div class="innerLine"></div>
          <li>
            <router-link to="#">为您服务</router-link>
          </li>
          <div class="innerLine"></div>
          <li>
            <router-link to="#">为您服务</router-link>
          </li>
          <div class="innerLine"></div>
          <li>
            <router-link to="#">为您服务</router-link>
          </li>
          <div class="innerLine"></div>
          <li>
            <router-link to="#">为您服务</router-link>
          </li>
          <div class="innerLine"></div>
          <li>
            <router-link to="#">为您服务</router-link>
          </li>
          <div class="innerLine"></div>
          <li>
            <router-link to="#">为您服务</router-link>
          </li>
          <div class="innerLine"></div>
          <li>
            <router-link to="#">为您服务</router-link>
          </li>
          <div class="innerLine"></div>
          <li>
            <router-link to="#">为您服务</router-link>
          </li>
          <div class="innerLine"></div>
          <li>
            <router-link to="#">为您服务</router-link>
          </li>
          <div class="innerLine"></div>

        </ul>
      </div>
      <div class='content-right'></div>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"
  export default {
    mounted(){
      this.$nextTick(()=>{
        new BScroll(this.$refs.list,{
          scrollY:true
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .bgVariety
      width 100%
      height 100%
      background #F3F4F5
      .searchHeader
        position relative
        widht 100%
        height 40px
        font-size 13px
        text-align center
        background #FFF
        line-height 40px
        z-index 1
        .inner
          margin 0 auto
          a
            padding 20px
            &.active
              color red
        .searchPng
          position absolute
          right 10px
          top 0px
          display block
          width 14px
          height 14px
          img
            width 100%
            height 100%
      .content
        width 100%
        height 100%
        .content-left
          font-size 13px
          float left
          height 100px
          width 19%
          .contentUl
            height 262px
            li
              height 50px
              background: #FFF;
              line-height 50px
              text-align center
              a
                color #000
                display block
                widht 100%
                height 100%
            .innerLine
              width 100%
              height 2px
              background: #F3F4F5;


</style>
