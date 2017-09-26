<template>
  <div>
    <div class="loginPhone" v-show="isHide">
      <form action="/#" method="get">
        <li class="name">
          <span class="nameImg"></span>
          <input type="text" name="phoneNumber" placeholder="请输入手机号" v-model="phoneNumber"
          />
          <div class="centerLine"></div>
        </li>
      </form>
      <mt-button type="default" size="large" :disabled="isUse" class="button" v-model="hasNumber"
               :class="{color:!isUse}"   @click="usersReg">下一步</mt-button>
    </div>
    <transition name="trans">
      <div class="loginForm" v-show="!isHide">
        <form action="/#" method="get">
          <li class="name">
            <span class="nameImg"></span>
            <input type="number" name="phoneNumber" :placeholder=phoneNumber />
            <div class="centerLine"></div>
          </li>
          <li class="phone">
            <span class="phoneImg"></span>
            <input type="number" name="imageReg"  placeholder="图片验证码"/>
            <router-link to="#" class="center-change">
              <img src="../image/seccode.png" alt="0">
            </router-link>
            <div class="centerLine"></div>
          </li>
          <li class="yanzheng">
            <span class="yanzhengImg"></span>
            <input type="text" name="duanReg" placeholder="验证码"/>
            <mt-button type="danger"  class="button" style="font-size:13px;width:120px;background: #FED171;border-radius: 30px; /">获取短信验证码</mt-button>
            <div class="centerLine"></div>
          </li>
          <li class="username">
            <span class="usernameImg"></span>
            <input type="number" name="username" placeholder="你的昵称/用户名"/>
            <div class="centerLine"></div>
          </li>
          <li class="pwd">
            <span class="pwdImg"></span>
            <input type="number" name="password" placeholder="请设置密码"/>
            <div class="centerLine"></div>
          </li>
          <li class="pwd">
            <span class="pwdImg"></span>
            <input type="number" name="repwd" placeholder="请确认密码"/>
            <div class="centerLine"></div>
          </li>
        </form>
        <mt-button type="default" size="large" class="next">下一步</mt-button>
      </div>
    </transition>

  </div>

</template>

<script>
//  <!--表单的验证信息-->
  const phoneReg=/^1[3|4|5|7|8][0-9]{9}$/;
  const pwdReg=/^[a-zA-Z]\w{5,17}$/;
  const duanReg=/^[0-9]{6}$/;
  import { MessageBox } from 'mint-ui';
export default {
  data(){
    return {
      phoneNumber: "",  //表示输入的手机号
      isErr: false,  //信息错误的标识
      isUse: true,  //初始状态是按钮是禁用的
      isHide:true,  //表示这个注册的表单是显示的
    }
  },
  methods: {
//      用来判断用户的信息是否正确
    usersReg(){
//      定义一个对象用来存放错误的信息
      const error = {};
// 获取到这个用户填的信息然后正则判断
      const {phoneNumber} = this;
      if (!phoneReg.test(Number.parseInt(phoneNumber))) {
        MessageBox.confirm('', {
          message: '请输入正确的手机号',
          confirmButtonText: '确定',
        })
      }else{
         this.isHide=false;
      }

    }
  },
  computed: {
    hasNumber(){
     return   this.isUse = this.phoneNumber ? false : true;
    }
  }
}
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
    .color
      background: #F03131;
  .loginForm
    width 90%
    margin 13px auto
    li
      height 50px
      padding 2px 0
      width 100%
      p
        width 100%
        height 20px
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


  .name-enter-active
    transition transform 0.3s
  .name-enter-to
    position absolute
    top 0
</style>
