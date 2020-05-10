<template>
 <div>
   <div class="song_list"  
  @click="searchIdx(idx)">
  <div class="left-img">
     <img  v-lazy="imgUrl">
     <span class="img_text">{{updateTime}}</span>
  </div>
   <div class="right-ul">
      <div class="info" v-for="(item,index) in tracks" :key="index">
	   <li>{{index+1}}.{{item.first}}-{{item.second}}</li>
	  </div>
   </div>
  </div>
 </div>
</template>

<script>
export default {
  props:{
   imgUrl:{
    type: String
   },
   tracks:{
     type: Array
   },
   updateTime:{
     type: String
   },
   idx:{
   type: String
   }
    },
 data() {
 return {

 }
 },
 created(){

 },
 methods: {
 searchIdx(idx){
 switch (idx) {
        case '云音乐新歌榜':
          idx = 0
          break
        case '云音乐热歌榜':
          idx = 1
          break
        case '网易原创歌曲榜':
          idx = 2
          break
        case '云音乐飙升榜':
          idx = 3
          break
        case '云音乐说唱榜':
          idx = 23
          break
        case '云音乐ACG音乐榜':
          idx = 22
          break
        case 'KTV唛榜':
          idx = 7
          break
        case 'iTunes榜':
          idx = 8
          break
        case '日本Oricon周榜':
          idx = 10
          break
        case 'Hit FM Top榜':
          idx = 9
          break
        case '台湾Hito排行榜':
          idx = 20
          break
        case 'Beatport全球电子舞曲榜':
          idx = 21
          break
        case '法国 NRJ Vos Hits 周榜':
          idx = 20
          break
        case 'UK排行榜':
          idx = 5
          break
        case '美国Billboard周榜':
          idx = 6
          break
      }
      this.$emit('showIdxPage',idx)
 }
 }
}
</script>

<style lang="less" scoped>
.song_list{
    width: 100%;
    display: flex;
    .left-img{
       width: 110px;;
       width: 110px;
       position: relative;
	    margin: 0 10px 5px 0;
       img{
       width: 110px;
      //  margin: 5px 0;
       width: 110px;
       }
       .img_text{
           position:absolute;
           left: 5px;
           bottom: 10px;
           font-size: 12px;
           color:#fff;
       } 
    }
    .right-ul{
        flex: 1;
        display: flex;
        flex-wrap:wrap;
        align-items: center;
        font-size: 13px;
        margin: 15px 0;
        .info{
          width:100%
        }
       li{
		   list-style: none;
		   overflow: hidden;
		   -webkit-line-clamp: 3; 
		   -webkit-box-orient: vertical;
		   display: -webkit-box;
		   color: #333;
	   }
    }
}
</style>
