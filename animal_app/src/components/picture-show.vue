<template>
  <div>
    <div class="picture">
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
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .picture
    display flex
    .product
      flex 1
      text-align center
      display block
      .product-img
        height 99px
        img
          width 100%
          height 100%
      .price
        font-size 14px
        color red
      .oldPrice
        font-size 12px
        color #999


</style>
