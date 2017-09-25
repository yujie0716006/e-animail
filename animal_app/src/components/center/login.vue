<template>
  <div>
    <div class="loginPhone" >
      <li class="name">
        <span class="nameImg"></span>
        <input type="text" placeholder="请输入手机号"/>
        <div class="centerLine"></div>
      </li>
      <mt-button type="default" size="large" class="button">下一步</mt-button>
    </div>
    <div class="loginForm">
      <li class="name">
        <span class="nameImg"></span>
        <input type="number" placeholder="动态的手机号157138884"/>
        <div class="centerLine"></div>
      </li>
      <li class="phone">
        <span class="phoneImg"></span>
        <input type="number"  placeholder="图片验证码"/>
        <router-link to="#" class="center-change">
          <img src="../image/seccode.png" alt="0">
        </router-link>
        <div class="centerLine"></div>
      </li>
      <li class="yanzheng">
        <span class="yanzhengImg"></span>
        <input type="text" placeholder="验证码"/>
        <mt-button type="danger"  class="button" style="font-size:13px;width:120px;background: #FED171;border-radius: 30px; */">获取短信验证码</mt-button>
        <div class="centerLine"></div>
      </li>
      <li class="username">
        <span class="usernameImg"></span>
        <input type="number" placeholder="你的昵称/用户名"/>
        <div class="centerLine"></div>
      </li>
      <li class="pwd">
        <span class="pwdImg"></span>
        <input type="number" placeholder="请设置密码"/>
        <div class="centerLine"></div>
      </li>
      <li class="pwd">
        <span class="pwdImg"></span>
        <input type="number" placeholder="请确认密码"/>
        <div class="centerLine"></div>
      </li>
      <mt-button type="default" size="large" class="next">下一步</mt-button>
    </div>
  </div>


</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .loginPhone
    .name
      height 40px
      margin 20px 10px 0 10px
      width 100%
      input
        font-size 15px
        color #666
        outline none
        height 21px
        padding-left 5px
      .nameImg
        background-image url("../image/ico1.png")
        float left
        display inline-block
        width 17px
        height 17px
        background-size contain
        background-repeat no-repeat
        margin 0 0 0 10px
      .centerLine
        margin 10px 0px
        width 100%
        height 2px
        background #EAEAEA
    .button
      background #d7d7d7
      font-size 15px
      width 80%
      border-radius 30px
      margin 50px auto 0
      color #fff
      height 30px
  .loginForm
    width 90%
    margin 13px auto
    li
      height 50px
      padding 2px 0
      width 100%
      input
        font-size 13px
        color #666
        outline none
        height 21px
        padding-left 5px
        line-height 50px
      span
        float left
        display inline-block
        width 17px
        height 17px
        background-size contain
        background-repeat no-repeat
        margin 0 0 0 10px

      .centerLine
        margin 10px 0px
        width 100%
        height 2px
        background #EAEAEA
    .name
      .nameImg
        background-image url("../image/ico1.png")
    .phone
      .phoneImg
        background-image url("../image/ico5.png")
        background-position 0 3px
      .center-change
        img
          vertical-align middle
          margin-top -5px
          float right
    .pwd
      .pwdImg
        background-image url("../image/ico4.png")
    .yanzheng
      .yanzhengImg
        background-image url("../image/ico2.png")
        background-position 0 3px
      .button
        margin-top -5px
        width 100px
        font-size 12px
        height 30px
        float right
    .username
      .usernameImg
        background-image url("../image/ico3.png")
        background-position 0 3px
    .next
      background #d7d7d7
      font-size 15px
      width 80%
      border-radius 30px
      margin 20px auto 0
      color #fff
      height 30px


</style>
