<template>
  <div class="scale-1px">

  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .scale-1px
    position relative
    border none
    &:after
      content ' '
      position absolute
      bottom 0
      background #d7d7d7
      width 100%
      height 1px
      transform scaleY(0.5)
</style>
