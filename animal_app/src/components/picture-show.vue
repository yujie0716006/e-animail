<template>
  <div>
    <div class="picture" ref="pictureRouter">
      <div class="showProduct">
        <router-link to="/#" class="product">
          <div class="product-img">
            <img src="./image/food-1.jpg" alt="1">
          </div>
          <p class="price">￥119.00</p>
          <p class="oldPrice">省￥19.00</p>
        </router-link>
        <router-link to="/#" class="product">
          <div class="product-img">
            <img src="./image/food-1.jpg" alt="1">
          </div>
          <p class="price">￥119.00</p>
          <p class="oldPrice">省￥19.00</p>
        </router-link>
        <router-link to="/#" class="product">
          <div class="product-img">
            <img src="./image/food-1.jpg" alt="1">
          </div>
          <p class="price">￥119.00</p>
          <p class="oldPrice">省￥19.00</p>
        </router-link>
        <router-link to="/#" class="product">
          <div class="product-img">
            <img src="./image/food-1.jpg" alt="1">
          </div>
          <p class="price">￥119.00</p>
          <p class="oldPrice">省￥19.00</p>
        </router-link>
        <router-link to="/#" class="product">
          <div class="product-img">
            <img src="./image/food-1.jpg" alt="1">
          </div>
          <p class="price">￥119.00</p>
          <p class="oldPrice">省￥19.00</p>
        </router-link>
        <router-link to="/#" class="product">
          <div class="product-img">
            <img src="./image/food-1.jpg" alt="1">
          </div>
          <p class="price">￥119.00</p>
          <p class="oldPrice">省￥19.00</p>
        </router-link>
        <router-link to="/#" class="product">
          <div class="product-img">
            <img src="./image/food-1.jpg" alt="1">
          </div>
          <p class="price">￥119.00</p>
          <p class="oldPrice">省￥19.00</p>
        </router-link>
        <router-link to="/#" class="product">
          <div class="product-img">
            <img src="./image/food-1.jpg" alt="1">
          </div>
          <p class="price">￥119.00</p>
          <p class="oldPrice">省￥19.00</p>
        </router-link>
        <router-link to="/#" class="product">
          <div class="product-img">
            <img src="./image/food-1.jpg" alt="1">
          </div>
          <p class="price">￥119.00</p>
          <p class="oldPrice">省￥19.00</p>
        </router-link>
        <router-link to="/#" class="product">
          <div class="product-img">
            <img src="./image/food-1.jpg" alt="1">
          </div>
          <p class="price">￥119.00</p>
          <p class="oldPrice">省￥19.00</p>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
//  <!--这是有回弹效果的滚动，他是在哪里用就要在哪里写的-->
  import BScroll from "better-scroll"
  export default {
//    创建每日疯抢的食物列表
    mounted(){
      this.$nextTick(()=>{
        new BScroll(this.$refs.pictureRouter,{
          scrollX:true
        });
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .picture
    width 100%
    overflow hidden
    .showProduct
      width 840px
      overflow hidden
      display flex
      .product
        text-align center
        flex 1
        .product-img
          width 84.56px
          height 84.56px
          img
            width 100%
            height 100%
        .price
          padding 8px 0
          font-size 14px
          color red
        .oldPrice
          font-size 12px
          color #999


</style>
