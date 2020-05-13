<template>
<div>
<!-- 内容 -->
  <div class="modu-box"  @click="srarchIdex(idx1,idx2,idx3,idx4)">
  	<div class="small-box" >
     <div style="position: relative;">
       <img  v-lazy="imgUrl" alt="">
       <span style="color:#fff" class="txet_p"  v-if="lastProgramName">{{lastProgramName}}</span>
     </div>
  		<p >{{name}}</p>
 
  	</div>
    <div class="tit" v-if="playcount>0">
        <span   class="iconfont  icon-pingguoerji"  style="margin-right:3px"></span>
        <span  >{{playcount|setcount}}</span>
      </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import api  from  '../../api/index'
name:"home-img"
export default {
  props:{
  playcount:{
    type:Number
  },
  name:{
    type:String
  },
  imgUrl:{
   type:String
  },
  idx1:{
    type:Number
  },
  idx2:{
    type:Number
  },
  idx3:{
    type:Number
  },
  idx4:{
    type:Number
  },
  mvsparams:{
    type:String
  },
  idxsongs:{
    type:Number
  },
  lastProgramName:{
    type:String
  }
  } , 
  filters:{
  setcount(val){
    if(!val) return
    if(val>100000000){
      val=((val/100000000).toFixed(1))+ '亿'
    }else  if(val>10000){
      val= Math.floor(val / 10000) + '万'
    }
    return val
  }
  },
 data() {
 return {

 }
 },
 created(){
 },
 methods: {
  srarchIdex(idx1,idx2,idx3,idx4){
  if(idx1){
    this.$router.push({name:'albumpage',params:{id:idx1}})
  }
  if(idx2){
    this.$router.push({name:'albumpage',params:{id:idx2}})
  }

  if(idx3){
    console.log('我点击了mv',idx3)
    this.$router.push({name:'mvpage',params:{id:idx3}})
   
  }

  if(idx4){
     this.$router.push({name:'mvpage',params:{id:idx4}})
  }
 }
 }
}
</script>

<style lang="less" scoped>

.img-waper{
  display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   width: 100%;
.modu-box{
	border-radius: 5px;
	display: flex;
  width: 100%;
  position: relative;
  flex-wrap: wrap;
	.small-box{
        flex: 33.33%;
        width: 3rem;
		img{
      width: 110px;
		}
		p{
		 padding: 10px 0 10px 10px;
     font-size: 12px;
     line-height: 0.4rem;
		}
  }
  .tit{
    position: absolute;
    right: 10px;
    // top: -5px;
    span{
      color: #fff;
      font-size: 0.1rem;
    }
  }
}
.txet_p{
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
position: absolute;
color: #fff;
font-size: 0.1rem;
z-index: 100;
bottom: 0.1rem;
left: 0.1rem;
color: #ccc;
  width: 110px;
}
}
</style>
