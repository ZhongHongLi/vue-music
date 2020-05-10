<template>
 <div>
   <!-- 我是综合页面得数据
   {{compostdata}} -->
   <div class="comPosite-title">
       <span class="Singles">单曲</span>
       <span class="smallTag">播放全部</span>
   </div>
{{compostdata}}
   <div class="songlist">
       <ul>
           <li  v-for="(item,index) in compostdata" :key="index">
               <div class="song-name">
                   <p class="song-names" >{{item.name}}</p>
                   <p class="song-star" ></p>
               </div>
               <div class="small-crice"></div>
           </li>
       </ul>
   </div>
 </div>
</template>

<script>
export default {
 props:{
 
 },
 data() {
 return {
 conmpostdatas:[]
 }
 },
 created(){

 },
 methods: {

 },
 mounted(){
//       this.conmpostdatas=this.compostdata.song.code
//  console.log(this.conmpostdatas)
//  console.log(11)
// console.log(this.compostdata)
console.log(this.compostdata)
 }
}
</script>

<style lang="less" scoped>
.comPosite-title{
    display: flex;
    justify-content: space-between;
    margin: 0.2rem 0.4rem;
    align-items: center;
    .Singles{
        font-weight: 600;
        font-size: 0.45rem;
    }
    .smallTag{
    border: 0.02667rem solid #ccc;
    font-size: 0.25rem;
    padding: 0.3rem;
    border-radius: 2rem;
    color: #333;
    }
    .songlist{
    
}
}

</style>
