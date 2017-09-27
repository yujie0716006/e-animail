<template>
    <div class="bgVariety">
      <div class="searchHeader">
        <div class="inner">
          <router-link to="#" @click.native='showContent(1)' >分类</router-link>
          <router-link to="#" @click.native="showContent(2)" >品牌</router-link>
        </div>
        <router-link to="/#" class="searchPng">
          <img src="../image/search.png" alt="4">
        </router-link>
      </div>

      <div class="content" v-show="isShow == 1">
        <div class='content-left' ref="list">
          <ul class="contentUl" >
            <li v-for="(category,index) in categorys" :key="index" @click="handleClick(index)"
            :class="{color:(category.cateid === cateid[current] )}">
              <router-link to="" >{{category.name}}</router-link>
              <div class="innerLine"></div>
            </li>
          </ul>
        </div>
          <div class='content-right'>
            <scroller>
              <div>
            <ul class="top" v-for="(shop,index) in shops" :key="index" v-if="shop.type === 0">
              <p class="dog">
                {{shop.title}}
                <img v-lazy="shop.rigth_img.image" alt="">
              </p>
              <li v-for="(item,index) in shop.list">
                <router-link to="#" class="foodImg">
                  <img v-lazy="item.photo" alt="0">
                  <p>{{item.name}}</p>
                </router-link>
              </li>
            </ul>
            <ul class="bottom" v-for="(shop,index) in shops" :key="index" v-if="shop.type === 2">
              <p class="hot">
                {{shop.title}}
              </p>
              <li v-for="(item,index) in shop.list">
                <router-link to="#" class="hotImg">
                  <img v-lazy="item.logo" alt="" />
                  <p>{{item.name}}</p>
                </router-link>
              </li>
            </ul>
              </div>
            </scroller>
          </div>
      </div>
      <div class="content2">
        <ul class="contentBottom" v-for="(shop,index) in shops" :key="index" v-if="shop.type === 2">
          <p class="contentHot">
            {{shop.title}}
          </p>
          <li v-for="(item,index) in shop.list">
            <router-link to="#" class="contentImg">
              <img :src="item.logo" alt="">
              <p>{{item.name}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import BScroll from "better-scroll";
  import axios from "axios";
  export default {
    data(){
      return {
        categorys:[],  //这是整个分类里面，所有要使用的数据
        cateid:[88888,"5","6","54","53","48","49","55","2652","2651","50","3288","3895","3886"],
        current:"0",
        shops:[],  // 表示的是大商品
        isShow:1,  //1,2表示的是分类和品牌的显示与隐藏
      }
    },
//    在哪里需要请求数据，就在哪个组件里面发送ajax请求
    mounted(){
//      发送ajax请求，请求数据
      axios.get("/api/variety")
        .then(response => {
//          因为我在mock数据的时候，将其获取到的结果放在了variety中，
// 所以response就是返回的所有的数据，里面的data是我们需要的数据
          const result=response.data;
          if(result.code === 0){  //表示请求数据成功
            this.categorys=result.data;
            this.shops=this.categorys[0].cate_list;
          }
        });
//      这是左侧,右侧列表的滚动条
      this.$nextTick(()=>{
        new BScroll(this.$refs.list,{
          scrollY:true,
          click:true
        });
      });
      /*setTimeout(()=>{
        new BScroll(this.$refs.scrollB,{
          scrollY:true,
          click:true
        });
      },2000)*/
    },
    methods:{
      handleClick(index){
        this.shops=this.categorys.filter((category) =>{
          return category.cateid === this.cateid[index]
        })[0].cate_list;
        return (
          this.current=index,
            console.log(this.shops,index)
          )
      },
      showContent(num){
        this.isShow=num;
        console.log(num,this.isShow);
      }
    },
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
        border-bottom 3px solid #F3F4F5
        .inner
          margin 0 auto
          a
            padding 20px
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
            height 235px
            li
              height 50px
              background: #FFF;
              line-height 50px
              text-align center
            .color
              background #F3F4F5
              .innerLine
                width 100%
                height 3px
                background: #F3F4F5;
              a
                color #000
                display block
                widht 100%
                height 100%
        .content-right
          position relative
          padding-top 3px
          font-size 12px
          width 80%
          float right
          height 100%
          .top,.bottom
            /*float right*/
            position absolute
            /*right 0*/
            background: #fff;
            z-index -1
            li
              float left
              display flex
              justify-content space-around
              flex-wrap wrap
          .top
            .dog
              color #999
              padding 20px 15px 10px
              img
                width 46px
                height 10px
                float right
            .foodImg
              height 97px
              padding 10px 10px
              img
                width 80px
                height 80px
              p
                height 20px
                width 100%
                text-align center
          .bottom
            padding 30px 0
            display flex
            justify-content space-around
            flex-wrap wrap
            .hot
              width 100%
              color #999
              padding 20px 15px 10px
            .hotImg
              display inline-block
              height 97px
              padding 10px 10px 10px -10px
              img
                width 110px
                height 57px
              p
                padding 20px 0px
                height 20px
                width 100%
                text-align center

      .content2
        width 100%
        height 100%
        background #fff
        .contentBottom
          padding 15px 0
          display flex
          justify-content space-around
          flex-wrap wrap
          .contentHot
            width 100%
            color #999
            padding 10px 15px 10px
            text-align center
          .contentImg
            display inline-block
            height 97px
            padding 10px 10px 10px -10px
            img
              padding-top 10px
              width 110px
              height 57px
            p
              padding 20px 0px
              height 20px
              width 100%
              text-align center

</style>
