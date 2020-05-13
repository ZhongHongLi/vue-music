<template>
 <div>
<div class="topcontaier">
       <van-icon name="arrow-left" style="font-size:0.7rem"  @click="backgo" />
       <p>{{title}}</p>
       <van-icon name="chat-o" badge="9"  style="font-size:0.7rem"  />
   </div>
 </div>
</template>

<script>
export default {
props:{
title:{
    type:String
}
},
 data() {
 return {

 }
 },
 created(){

 },
 methods: {
 backgo(){
     this.$router.go(-1)
 }
 }
}
</script>

<style lang="less" scoped>
.topcontaier{
    display: flex;
    align-items: center;
    padding: 10px 10px;
    p{
        flex: 1;
        text-align: center;
        font-size: 0.5rem;
        font-weight: 600;
    }
}
</style>
