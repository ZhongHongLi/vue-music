<template>
 <div>
<van-tabs v-model="active" @click="toogletitle" >
  <van-tab :title="item.name" v-for="(item,index) in list" :key="index"  >
    <!-- <div v-if="item.name=='综合'">111</div> -->
    <comPosite v-if="item.name=='综合'"  :compostdata="composite"/>
      <div v-if="item.name=='单曲'">222</div>
        <div v-if="item.name=='视频'">333</div>
          <div v-if="item.name=='歌手'">444</div>
            <div v-if="item.name=='专辑'">55</div>
             <div v-if="item.name=='歌曲'">566</div>
             <div v-if="item.name=='主播平台'">77</div>
             <div v-if="item.name=='用户'">888</div>
           
  </van-tab>
  
</van-tabs>
 </div>
</template>

<script>
import comPosite from '../search/composite/comPosite'
import api from '../../api/index'
export default {
 data() {
 return {
  active: 0,
  list:[
    {id:1,name:'综合'},
    {id:2,name:'单曲'},
    {id:3,name:'视频'},
    {id:4,name:'歌手'},
    {id:5,name:'专辑'},
    {id:6,name:'歌曲'},
    {id:7,name:'主播电台'},
    {id:8,name:'用户'},
  ],
  paramsid:'',
  //综合页面得数据
  composite:[],
  compositesong:[]
 }
 },
 created(){

 },
 methods: {
 toogletitle(title,name){
   console.log(title,name)
   
 },
 async getserachlist(id){
 console.log(id)
 const {data:res}=await api.searchFn(id)
 if(res.code==200){
 this.composite=res.result.song.songs
 console.log(this.composite)
//  console.log(this.composite.song.songs)
//  this.compositesong=this.composite.song
//  console.log(this.compositesong)
 }
 }
 },
 mounted(){
  this.paramsid=this.$route.params.id
 this.getserachlist(this.paramsid)
 },
 components:{
   comPosite
 }
}
</script>

<style lang="less" scoped>
</style>
