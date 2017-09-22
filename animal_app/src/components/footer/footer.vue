<template>
  <div id="footer">
    <ul class="footer-room">
      <li>
        <router-link to="/#"><img src="../image/main_tab_1_sel.png" alt="1"></router-link>
      </li>
      <li>
        <router-link to="/#"><img src="../image/main_tab_2.png" alt="1"></router-link>
      </li>
      <li>
        <router-link to="/#"><img src="../image/main_tab_3.png" alt="1"></router-link>
      </li>
      <li>
        <router-link to="/#"><img src="../image/main_tab_4.png" alt="1"></router-link>
      </li>
    </ul>
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
    .footer-room
      display flex
      li
        flex 1
        a
          display block
          height 55px
          width 100%
          text-align center   //这个居中的方法设置在父元素上，作用在子元素上面，用于文字居中，图片，行内块元素
          img
            width 50px
            height 50px

</style>
