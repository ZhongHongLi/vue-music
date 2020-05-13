<template>
 <div>
    <div class="banerSwiper">
     <van-swipe :autoplay="3000"  indicator-color="#dd001b">
  <van-swipe-item v-for="(item, index) in images" :key="index">
    <img :src="item.pic" />
    <span  class="title">{{item.typeTitle}}</span>
  </van-swipe-item>
</van-swipe>


 </div>
 </div>
</template>

<script>
export default {
props:{
images:{
type:Array
},
dibanerlist:{
    type:Array
}
},
 data() {
 return {

 }
 },
 created(){

 },
 methods: {

 }
}
</script>

<style lang="less" scoped>
.banerSwiper{
    height: 137px;
    padding: 10px;
    border-radius: 8px;
    .van-swipe{
        height: 100%;
        img{
            height: 100%;
            width: 100%;
            border-radius: 8px;
        }
    }  
    .title{
      position: absolute;
      right: 0;
      bottom: 0;
      color: #fff;
      font-size: 12px;
      padding: 3px 6px;
      background: red;
      border-top-left-radius: 0.11rem;
    }
}
</style>
