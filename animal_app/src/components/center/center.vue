<template>
  <div class="center">
    <div class="bg">
      <router-link to="/homePage" class="aback" >
      </router-link>
      <router-link to="/login" class="login">注册</router-link>
      <div class="login-bg">
        <img src="../image/logo.png" alt="0">
      </div>
      <div class="register">
        <router-link to="#" @click.native="changeRegister(1)">普通登录</router-link>
        <router-link to="#" @click.native="changeRegister(2)">手机动态密码登录</router-link>
        <i class="angle1" v-show="register==1 ? true : false"></i>
        <i class="angle2" v-show="register==2 ? true : false "></i>
      </div>
    </div>
    <ul class="centerLogin" v-show="register==1">
      <li class="name">
        <span class="nameImg"></span>
        <input type="text" placeholder="手机号/邮箱/用户名"/>
        <div class="centerLine"></div>
      </li>
      <li class="phone">
        <span class="phoneImg"></span>
        <input type="text"  placeholder="输入密码"/>
        <div class="centerLine"></div>
      </li>
    </ul>
    <ul class="centerLogin" v-show="register==2">
      <li class="name">
        <span class="nameImg"></span>
        <input type="number" placeholder="已注册的手机号"/>
        <div class="centerLine"></div>
      </li>
      <li class="phone">
        <span class="phoneImg"></span>
        <input type="text"  placeholder="请输入图片内容"/>
        <router-link to="#" class="center-change">
          <img src="../image/seccode.png" alt="0">
        </router-link>
        <div class="centerLine"></div>
      </li>
      <li class="pwd">
        <span class="pwdImg"></span>
        <input type="password" placeholder="动态密码"/>
        <mt-button type="danger" plain class="button">获取动态密码</mt-button>
        <div class="centerLine"></div>
      </li>
    </ul>
    <div class="forgetPwd">
      <router-link to="#">忘记密码？</router-link>
    </div>
    <mt-button type="primary" size="large" style="width:95%;margin:0 auto;
        background:#2EC975;font-size:15px">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</mt-button>
    <p style="font-size:12px;margin-top:10px;text-align: center;color:#666">
      <span>APP专享:E宠团5折包邮,首单满99送99</span>
      <router-link to="#" style="color:#0ca4ed">去下载</router-link>
    </p>
    <div class="partner">
      <p>合作网站登录</p>
      <div class="qq">
        <router-link to="#">
          <img src="../image/login_ico4.png" alt="2">
        </router-link>
        <router-link to="#">
          <img src="../image/login_ico2.png" alt="2">
        </router-link>
      </div>
    </div>
    <div style="position: absolute;bottom:0px;background:#F5F5F5;height:56px;width:100%;z-index:3"></div>

  </div>
</template>

<script>
  export default {
    data(){
      return {
        register:1,    // 1 表示普通登录，2 表示动态登录
      }
    },
    methods: {
      changeRegister(register){
        this.register=register;   //表示触发事件是传递的值赋值到状态上面
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.center
  width 100%
  height 100%
  .bg
    position relative
    width 100%
    height 178px
    background-image url('../image/login-bg.png')
    background-repeat no-repeat
    background-size 100% 178px
    .aback
      position absolute
      left 15px
      top 15px
      display inline-block
      width 22px
      height 20px
      background-image url("../image/personal-bico3.png")
      background-repeat no-repeat
      background-size 12px 17px
    .login
      position absolute
      right 10px
      top 15px
      color #fff
      font-size 20px
    .login-bg
      position absolute
      width 75px
      height 47px
      margin-top 60px
      padding-left 40%
      img
        width 100%
        height 100%


    .register
      position absolute
      bottom 0px
      width 100%
      height 44px
      text-align center
      background rgba(255,255,255,0.1)
      line-height 44px
      a
        float left
        display block
        width 50%
        height 100%
        color #FFF
        font-size 15px
        font-weight bold
      .angle1
        display block
        width 0
        height 0
        border-bottom 10px solid #fff
        border-left 10px solid transparent
        border-right 10px solid transparent
        border-top 0px solid transparent
        margin-left 22%
        margin-top 35px
      .angle2
        display block
        width 0
        height 0
        border-bottom 10px solid #fff
        border-left 10px solid transparent
        border-right 10px solid transparent
        border-top 0px solid transparent
        margin-left 73%
        margin-top 35px
  .centerLogin
    width 90%
    margin 13px auto
    li
      height 40px
      padding 2px 0
      width 100%
      input
        font-size 15px
        color #666
        outline none
        height 21px
        padding-left 5px
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
        background-image url("../image/ico4.png")
      .center-change
        img
          vertical-align middle
          margin-top -5px
          float right
    .pwd
      .pwdImg
        background-image url("../image/ico4.png")
      .button
        margin-top -5px
        width 100px
        font-size 12px
        height 30px
        float right


  .forgetPwd
    overflow hidden
    a
      float right
      font-size 14px
      color #898989
      margin-right 20px
      padding-bottom 8px
  .partner
    width 100%
    background: #fff
    position absolute
    bottom 70px
    z-index: 2
    p
      height 20px
      line-height 20px
      color #d7d7d7
      text-align center
      padding 15px
    .qq
      height 57px
      a
        display inline-block
        height 57px
        width 57px
        padding-left 85px
        img
          width 100%
          height 100%

</style>
