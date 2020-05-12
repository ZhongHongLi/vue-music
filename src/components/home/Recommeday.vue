<template>
 <div>
   <div class="topheader">
       <p class="top-t" v-if="">根据你的音乐口味,为你推荐好音乐</p>
   </div>
 </div>
</template>

<script>
export default {
 data() {
 return {
 ishow:true
 }
 },
 created(){
     
 },
 methods: {
 }
}
</script>

<style lang="less" scoped>
.topheader{
     background-image: linear-gradient(to right, #ff5a4c, #ff1d11);
     height: 5rem;
}

.top-t{
    font-size: 0.3rem;
    color: #fff;
    text-align: center;
}
</style>
