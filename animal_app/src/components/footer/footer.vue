<template>
  <div>
    <div id="footer">
      <ul class="footer-room">
        <li>
          <router-link to="/homePage"><img src="../image/main_tab_1_sel.png" alt="1"></router-link>
        </li>
        <li>
          <router-link to="/variety"><img src="../image/main_tab_2.png" alt="1"></router-link>
        </li>
        <li>
          <router-link to="/shopCart"><img src="../image/main_tab_3.png" alt="1"></router-link>
        </li>
        <li>
          <router-link to="/center"><img src="../image/main_tab_4.png" alt="1"></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #footer
    position fixed
    right 0px
    bottom 0px
    background: #fff;
    width 100%
    border-top 1px solid #999
    .footer-room
      display flex
      li
        flex 1
        a
          display block
          height 55px
          width 100%
          text-align center   //这个居中的方法设置在父元素上，作用在子元素上面，用于文字居中，图片，行内块元素
          .active

          img
            width 50px
            height 50px

</style>
