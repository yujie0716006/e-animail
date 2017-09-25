<template>
  <div>
    <div ref="wrapContainer" class="wrap-container">
      <div class="inner-container">
        <Carousel></Carousel>
        <div class="new-person">
          <router-link to="/#">
            <img src="../image/new_person.gif" alt="新人送礼图标">
          </router-link>
        </div>
        <div class="activeList">
          <ul>
            <li class="listImg">
              <router-link to="/#" >
                <img src="../image/activeList_1.png" alt="列表的图">
              </router-link>
            </li>
            <li class="listImg">
              <router-link to="/#">
                <img src="../image/activeList_2.png" alt="列表的图">
              </router-link>
            </li>
            <li class="listImg">
              <router-link to="/#">
                <img src="../image/activeList_3.png" alt="列表的图">
              </router-link>
            </li>
            <li class="listImg">
              <router-link to="/#">
                <img src="../image/activeList_4.png" alt="列表的图">
              </router-link>
            </li>
            <li class="listImg">
              <router-link to="/#">
                <img src="../image/activeList_5.png" alt="列表的图">
              </router-link>
            </li>
            <li class="listImg">
              <router-link to="/#">
                <img src="../image/activeList_6.png" alt="列表的图">
              </router-link>
            </li>
            <li class="listImg">
              <router-link to="/#">
                <img src="../image/activeList_7.jpg" alt="列表的图">
              </router-link>
            </li>
            <li class="listImg">
              <router-link to="/#">
                <img src="../image/activeList_8.jpg" alt="列表的图">
              </router-link>
            </li>
          </ul>
        </div>
        <eleLine></eleLine>
        <div class="crazyShop">
          <div class="crazyShop-top">
            <img src="../image/suprice.png" alt="每日疯抢" class="crazyShop-img">
            <span class="crazyShop-time">距本厂结束
              <span>00</span>
              <b>:</b>
              <span>42</span>
              <b>:</b>
              <span>36</span>
            </span>
            <img src="../image/everySuprice.png" alt="more" class="crazyShop-more">
          </div>
          <PictureShow></PictureShow>
        </div>
        <eleLine></eleLine>
        <div class="hot-session">
          <div class="hot-session-img">
            <img src="../image/hot-session.jpg" alt="热门栏目">
          </div>
          <div class="hot-bottom">
            <div class="hot-session-dog">
              <img src="../image/hot-session-dog.jpg" alt="狗" class="hot-img">
            </div>
            <div class="hot-right">
              <div class="hot-session-news ">
                <img src="../image/hot-session-news.jpg" alt="1" class="hot-img">
              </div>
              <div class="hot-session-video ">
                <img src="../image/hot-session-video.jpg" alt="2" class="hot-img">
              </div>
            </div>
          </div>
        </div>
        <eleLine></eleLine>
        <div class="new-video">
          <div class="new-video-top">
            <img src="../image/new-video.png" alt="1" class="new-left">
            <img src="../image/everySuprice.png" alt="12" class="new-right">
          </div>
          <div class="new-video-middle">
            <img src="../image/new-dog-video.jpg" alt="3">
          </div>
          <div class="new-video-bottom">
            <p>神奇饮水除口臭</p>
            <div class="new-video-watch">
              <img src="../image/view-black.png" alt="5">
              <span>23671</span>
              <span>&nbsp;|&nbsp; </span>
              <span>01:13</span>
            </div>
          </div>
        </div>
        <eleLine></eleLine>
        <div class="experience-hall">
          <div class="experience-hall-top">
            <img src="../image/exprence-hall.png" alt="1" class="experience-left">
            <img src="../image/everySuprice.png" alt="12" class="experience-right">
          </div>
          <div class="new-video-middle">
            <img src="../image/experience-img.jpg" alt="3">
          </div>
        </div>
        <eleLine></eleLine>
        <div class="Brand-sale">
          <div class="Brand-sale-top">
            <img src="../image/Brand-sale.png" alt="1" class="Brand-sale-left">
          </div>
          <div class="Brand-sale-middle">
            <div class="text">
              <span class="text-left">ZIWI</span>
              <span class="text-right">参与征集，巅峰带你免费畅游新西兰</span>
            </div>
          </div>
          <div class="Brand-sale-bottom">
            <img src="../image/carOrDog.jpg" alt="5">
          </div>
        </div>

        <div>
          <div class="different">
            <div class="text">
              <span class="text-left">伯纳天纯</span>
              <span class="text-right"></span>
            </div>
            <div class="different-img">
              <router-link to="/#">
                <img src="../image/different_1.jpg" alt="1">
              </router-link>
            </div>
          </div>
          <div class="different">
            <div class="text">
              <span class="text-left">伯纳天纯</span>
              <span class="text-right">超值满省</span>
            </div>
            <div class="different-img">
              <router-link to="/#">
                <img src="../image/different_2.jpg" alt="1">
              </router-link>
            </div>
          </div>
          <div class="different">
            <div class="text">
              <span class="text-left">海洋之星FISH4DOGS</span>
              <span class="text-right"></span>
            </div>
            <div class="different-img">
              <router-link to="/#">
                <img src="../image/different_3.jpg" alt="1">
              </router-link>
            </div>
          </div>
          <div class="different">
            <div class="text">
              <span class="text-left">冠能</span>
              <span class="text-right">送178元宠物碗</span>
            </div>
            <div class="different-img">
              <router-link to="/#">
                <img src="../image/different_4.jpg" alt="1">
              </router-link>
            </div>
          </div>
          <div class="different">
            <div class="text">
              <span class="text-left">丝倍亮</span>
              <span class="text-right">8折加送丝巾</span>
            </div>
            <div class="different-img">
              <router-link to="/#">
                <img src="../image/different_5.jpg" alt="1">
              </router-link>
            </div>
          </div>
          <div class="different">
            <div class="text">
              <span class="text-left">荣耀玛氏</span>
              <span class="text-right">全场六折起</span>
            </div>
            <div class="different-img">
              <router-link to="/#">
                <img src="../image/different_6.jpg" alt="1">
              </router-link>
            </div>
          </div>
          <div class="different">
            <div class="text">
              <span class="text-left">优卡</span>
              <span class="text-right">只为爱宠卓越表现</span>
            </div>
            <div class="different-img">
              <router-link to="/#">
                <img src="../image/different_7.jpg" alt="1">
              </router-link>
            </div>
          </div>
          <div class="different">
            <div class="text">
              <span class="text-left">禾仕嘉&SMatbones</span>
              <span class="text-right"></span>
            </div>
            <div class="different-img">
              <router-link to="/#">
                <img src="../image/different_8.jpg" alt="1">
              </router-link>
            </div>
          </div>
          <div class="different">
            <div class="text">
              <span class="text-left">爱普士妙鲜包</span>
              <span class="text-right">8折尝鲜</span>
            </div>
            <div class="different-img">
              <router-link to="/#">
                <img src="../image/different_9.jpg" alt="1">
              </router-link>
            </div>
          </div>
          <div class="different">
            <div class="text">
              <span class="text-left">NexGard尼可信</span>
              <span class="text-right"></span>
            </div>
            <div class="different-img">
              <router-link to="/#">
                <img src="../image/different_10.jpg" alt="1">
              </router-link>
            </div>
          </div>
          <eleLine></eleLine>
        </div>
        <div class="public-benefit">
          <div class="public-benefit-top">
            <img src="../image/public-left.jpg" alt="1" class="public-left">
            <img src="../image/public-right.png" alt="2" class="public-right">
          </div>
          <div class="public-middle">
            <p class="p1">截止今日，TA公益已联合E宠商城和15家品牌</p>
            <p>累计捐赠105129181元</p>
            <p>已合作7家公益组织，举办参与2场公益活动，助养34位领养人</p>
          </div>
          <div class="public-bottom">
            <div class="bottom-left">
              <img src="../image/public-0.png" alt="1">
            </div>
            <div class="bottom-right">
            </div>
          </div>
        </div>
        <eleLine></eleLine>
        <div class="discuss">
          <div class="discuss-wrap">
            <div class="discuss-top">
              <img src="../image/discuss.png" alt="0" class="img1">
              <span class="ico">好评率99.64%</span>
              <img src="../image/discuss-ico.png" alt="5" class="img2">
            </div>
            <div class="discuss-bottom">
              <div class="discuss-content">
                <div class="content-img">
                  <img src="../image/content-1.jpg" alt="3">
                </div>
                <div class="time">入户两年</div>
                <div class="discuss-person">
                  <div class="cat">
                    <span class="name">红*******w</span>
                    <div class="pinzhong">中华田园猫</div>
                  </div>
                  <span class="neirong">
                                包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
              </span>
                </div>
              </div>
            </div>
            <div class="discuss-bottom">
              <div class="discuss-content">
                <div class="content-img">
                  <img src="../image/content-1.jpg" alt="3">
                </div>
                <div class="time">入户两年</div>
                <div class="discuss-person">
                  <div class="cat">
                    <span class="name">红*******w</span>
                    <div class="pinzhong">中华田园猫</div>
                  </div>
                  <span class="neirong">
                                包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
              </span>
                </div>
              </div>
            </div>
            <div class="discuss-bottom">
              <div class="discuss-content">
                <div class="content-img">
                  <img src="../image/content-1.jpg" alt="3">
                </div>
                <div class="time">入户两年</div>
                <div class="discuss-person">
                  <div class="cat">
                    <span class="name">红*******w</span>
                    <div class="pinzhong">中华田园猫</div>
                  </div>
                  <span class="neirong">
                                包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
              </span>
                </div>
              </div>
            </div>
            <div class="discuss-bottom">
              <div class="discuss-content">
                <div class="content-img">
                  <img src="../image/content-1.jpg" alt="3">
                </div>
                <div class="time">入户两年</div>
                <div class="discuss-person">
                  <div class="cat">
                    <span class="name">红*******w</span>
                    <div class="pinzhong">中华田园猫</div>
                  </div>
                  <span class="neirong">
                                包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
              </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <eleLine></eleLine>
        <div class="last">
          <ul>
            <li>
              <router-link to="/#">触摸板</router-link>
            </li>
            <li>
              <router-link to="/#">手机客户端</router-link>
            </li>
            <li>
              <router-link to="/#">关于我们</router-link>
            </li>
            <li>
              <router-link to="/#">联系我们</router-link>
            </li>
          </ul>
          <div class="text">© wap.epet.com 版权：重庆易宠科技有限公司</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import eleLine from "../eleline.vue";
  import Carousel from "../carousel.vue";
  import PictureShow from "../picture-show.vue"
  import BScroll from "better-scroll";

  export default {
    components:{
      eleLine, Carousel, PictureShow,
    },
    mounted(){
      this.$nextTick(()=>{
//        这是创建的内容区的纵向滚动条
        new BScroll(this.$refs.wrapContainer,{
          scrollY:true
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .wrap-container
    width 100%
    height 300px
    .inner-container
      margin-top 146px
      width 100%
      .carousel
        height 160px
        width 100%
        .carousel_a
          display block
          height 100%
          img
            width 100%
            height 100%
      .new-person
        width 100%
        height 120px
        a
          display block
          height 100%
          img
            height 100%
            width 100%
      .activeList
        ul
          overflow hidden
          .listImg
            float left
            width 25%
            height 94px
            a
              img
                width 100%
                height 100%

      .crazyShop
        height 206px
        width 100%
        .crazyShop-top
          overflow hidden
          padding-top 10px
          .crazyShop-img
            vertical-align middle
            width 105px
            height 24px
          .crazyShop-time
            width 150px
            span
              display inline-block
              border 1px solid
          .crazyShop-more
            float right
            vertical-align middle
            width 67px
            height 40px
      .hot-session
        overflow hidden
        .hot-session-img
          hieght 46px
          width 100%
          img
            width 100%
            height 100%
        .hot-bottom
          width 100%
          .hot-session-dog
            float left
            width 42%
            height 216px
            .hot-img
              width 100%
              height 100%
          .hot-right
            width 58%
            float right
            .hot-session-news,.hot-session-video
              height 109px
            .hot-img
              width 100%
              height 100%
      .new-video
        height 363px
        .new-video-top
          position relative
          width 100%
          height 60px
          text-align center
          .new-left
            width 215px
            height 60px
          .new-right
            position absolute
            right 0px
            width 60px
            height 48px
        .new-video-middle
          height 242px
          img
            width 100%
            height 100%
        .new-video-bottom
          text-align center
          font-size 12px
          padding-top 10px
          .new-video-watch
            color #999

            padding-top 8px
            img
              width 10px
              height 9px
              vertical-align middle
  /*这是体验馆的样式*/
      .experience-hall
        height 244px
        .experience-hall-top
          position relative
          width 100%
          height 60px
          text-align center
          .experience-left
            width 215px
            height 60px
          .experience-right
            position absolute
            right 0px
            width 60px
            height 48px
        .new-video-middle
          height 183px
          img
            width 100%
            height 100%
      .Brand-sale
        height 306px
        .Brand-sale-top
          position relative
          text-align center
          img
            width 215px
            height 60px
        .Brand-sale-middle
          .text
            height 44px
            line-height 44px
            .text-left
              font-size 15px
              padding 0 8px
            .text-right
              font-size 12px
              color #999
        .Brand-sale-bottom
          img
            width 100%
            height 100%
      .different
        .text
          .text-left
            padding 5px 8px
            font-size 15px
          .text-right
            font-size 12px
            color: #999;
        .different-img
          padding 12px 0
          widht 100%
          height 178px
          a
            display block
            width 100%
            height 100%
            img
              width 100%
              height 100%
      .public-benefit
        height 281px
        .public-benefit-top
          position relative
          height 45px
          text-align center
          .public-left
            height 45px
          .public-right
            vertical-align middle
            width 75px
            height 11px
            position absolute
            right 0px
            top 17px
        .public-middle
          height 161px
          background-image url("../image/public-middle.jpg")
          background-repeat no-repeat
          background-size 100% 161px
          font-size 14px
          color #fff
          text-align center
          .p1
            padding-top 30px
          p
            padding 10px
            font-weight bold
        .public-bottom
          height 76px
          .bottom-left
            float left
            width 55px
            height 50px
            padding 8px
            img
              width 100%
              height 100%
      /*这是最后热门评论的样式*/
      .discuss
        position relative
        .discuss-wrap
          overflow hidden
          .discuss-top
            position relative
            height 45px
            text-align center
            .img1
              height 100%
            .ico
              position absolute
              font-size 12px
              color #999
              right 9px
              top 20px
            .img2
              position absolute
              right -8px
              width 8px
              height 9px
              top 21px
              padding-right: 10px;
              transform: scale(0.84);

          .discuss-bottom
            width 45%
            float left
            display flex
            margin-left 13px
            margin-top 5px
            overflow hidden
            .discuss-content
              font-size: 12px
              float left
              width 100%
              height 230px
              position relative
              .content-img
                z-index -1
                width 100%
                height 200px
                img
                  width 100%
                  height 100%
              .time
                color #fff
                position absolute
                top 120px
                width 100%
                height 19px
                background: rgba(0,0,0,0.4)
                text-align center
              .discuss-person
                width 100%
                height 80px
                background: #F5F5F5;
                position absolute
                top 140px
                .cat
                  overflow hidden
                  width 100%
                  height 19px
                  .name
                    line-height 19px
                    float left
                    color #999
                  .pinzhong
                    float right
                    width 60px
                    height 19px
                    border-radius: 5px;
                    padding: 0 5px;
                .neirong
                  text-align center
                  color #999
                  height 60px
  /*这是最后的文本显示*/
      .last
        ul
          width 86%
          margin 0 auto
          padding 10px 0
          display flex
          li
            flex 1
            text-align center
        .text
          text-align center
          font-size 12px
          margin-bottom 10px
</style>
