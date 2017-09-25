<template>
  <div class="tabs" ref="tabs">
    <ul class="tabs-ul">
      <li>
        <router-link to="/homepage/home">首页</router-link>
      </li>
      <li>
        <router-link to="/homepage/zhuliang">主粮</router-link>
      </li>
      <li>
        <router-link to="/homepage/yiliao">医疗保健</router-link>
      </li>
      <li>
        <router-link to="/homepage/lingshi">零食玩具</router-link>
      </li>
      <li>
        <router-link to="/homepage/richu">日出外用</router-link>
      </li>
      <li>
        <router-link to="/homepage/meirong">美容香波</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import BScroll from "better-scroll"
  export default {
    mounted(){
      this.$nextTick(()=>{
        //        这是创建的tabs的滚动条实例
        new BScroll(this.$refs.tabs,{
          scrollX:true,
          click:true,
          scrollY:false
        });
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tabs
    width 100%
    height 36px
    .tabs-ul
      width 120%
      display flex
      li
        flex 1
        text-align center
        height 100%
        line-height 36px
        a
          display inline-block
          width 100%
          height 100%
          &.active
            color green
            font-size 17px
            &.active:after
              display block
              content ""
              width 90%
              height 2px
              background: green;
              margin 0 auto
</style>
