<template>
<div>
<!-- 内容 -->
  <div class="modu-box"  @click="srarchIdex(idx)">
  	<div class="small-box" >
  		<img   v-lazy="imgUrl" alt="">    		
  		<p >{{name}}</p>
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
 name:{
  type: String
 },
 updateTime:{
   type: String
 },
 idx:{
     type:String
 }
  } , 
 data() {
 return {

 }
 },
 created(){

 },
 methods: {
 srarchIdex(idx){
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
        case '云音乐国电榜':
          idx = 4
          break
        case 'UK排行榜周榜':
          idx = 5
          break
        case '美国Billboard周榜':
          idx = 6
          break
        case '云音乐古典音乐榜':
          idx = 24
          break
        case '云音乐电音榜':
          idx = 25
          break
        case '抖音排行榜':
          idx = 26
          break
        case '新声榜':
          idx = 27
          break
        case '云音乐韩语榜':
          idx = 28
          break
        case '英国Q杂志中文版周榜':
          idx = 29
          break
        case '电竞音乐榜':
          idx = 30
          break
        case '云音乐欧美热歌榜':
          idx = 31
          break
        case '云音乐欧美新歌榜':
          idx = 32
          break
        case '说唱TOP榜':
          idx = 33
          break
      }
      this.$emit('showIdxPage', idx)
 }
 }
}
</script>

<style lang="less" scoped>

.recommend-title{
	height: 50px;
	line-height: 50px;
	font-weight: 600;
  padding-left: 10px;
  font-size: 14px;
}
.modu-box{
	border-radius: 5px;
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	.small-box{
        flex: 33.33%;
        width: 3rem;
		img{
			width: 110px;
		}
		p{
		 margin: 10px 0;
     font-size: 12px;
		}
	}
	
}

</style>
