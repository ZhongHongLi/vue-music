<template>
 <div class="base-waper">
      <h3 class="h3_text">最热主播</h3>
      <ul>
          <li v-for="(item,index) in hotauthorList" :key="index" class="li-waper">
              <div class="left_num">
                 <div class="index_num">{{index+1>9?index+1:"0"+(index+1)}}</div>
              </div>
              <div class="right_box">
                  <div class="leftimgtext">
                      <img :src="item.avatarUrl" alt="">
                      <span>{{item.nickName}}</span>
                  </div>
                  <div class="hostdu">{{item.score|scores}}</div>
              </div>
          </li>
      </ul>
 </div>
</template>

<script>
import api  from '../../api/index'
export default {
 props:{
 hotauthorList:{
     type:Array
 }
 },
 data() {
 return {
 }
 },
 filters:{
   scores(val){
       const scores=(val/10000).toFixed(1)+'万'
     return  scores
   }
 },
 created(){

 },
 methods: {

 }
}
</script>

<style lang="less" scoped>
.base-waper{
    padding: 0 10px;
    margin-top: 10px;
.h3_text{
    font-size: 0.4rem;
    font-weight: 600;
}
.li-waper{
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 0;
    .left_num{
    .index_num{
        font-size: 0.4rem;
        margin-right: 10px;
         font-weight: 600;
        color: #ccc;
    }
    }
    .right_box{
        display: flex;
        flex: 1;
        justify-content: space-between;
        align-items: center;
        .leftimgtext{
            display: flex;
            align-items: center;
             img{
                 width: 50px;
                 height: 50px;
                 margin-right: 10px;
                 border-radius: 50%;
             }
             span{
                 font-size: 0.4rem;
             }
        }
        .hostdu{
            font-size: 0.4rem;
        }
    }
}
}

</style>
