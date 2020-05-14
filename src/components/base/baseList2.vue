<template>
 <div class="base-waper">
      <h3 class="h3_text">最热电台</h3>
      <ul>
          <li v-for="(item,index) in djRadioNumberOne" :key="index" class="li-waper">
              <div class="left_num">
                 <div class="index_num">{{index+1>9?index+1:"0"+(index+1)}}</div>
              </div>
              <div class="right_box" >
                  <div class="leftimgtext">
                      <img :src="item.picUrl" alt="">
                  </div>
                  <div class="right_boxs">
                      <div class="top_text">{{item.name}}</div>
                      <div class="middle_text">{{item.creatorName}}</div>
                      <div class="bottom_text">{{item.score}}</div>
                  </div>
              </div>
          </li>
      </ul>
 </div>
</template>

<script>
import api  from '../../api/index'
export default {
 props:{
 djRadioNumberOne:{
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
        align-items: center;
        .top_text{
            font-weight: 600;
            font-size: 0.4rem;
            padding: 5px 0;
            text-overflow: ellipsis;
            overflow: hidden;
           white-space: nowrap;
           width: 5rem;
        }
        .middle_text{
            font-size: 0.3rem;
            padding: 5px 0;
            color: #ccc;
        }
        .bottom_text{
            font-size: 0.3rem;
            color: #ccc;
        }
        .leftimgtext{
            display: flex;
            align-items: center;
             img{
                 width: 80px;
                 height: 80px;
                 margin-right: 10px;
                 border-radius: 5px;
             }
             .span{
                 font-size: 0.4rem;
                 text-overflow: ellipsis;
                 overflow: hidden;
                 white-space: nowrap;
                 width: 5rem;
                 line-height: 2;
             }
        }
        .hostdu{
            font-size: 0.3rem;
        }
    }
}
}

.spans{
    font-size: 0.3rem;
}

.smallimg{
    width: 20px !important;
    height: 20px !important;
    border-radius: 50%;
}
.bottom-img{
    display: flex;
    align-items: center;
}
</style>
