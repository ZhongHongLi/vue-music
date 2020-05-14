<template>
 <div>
   <serachInput  :paramsid="paramsid"/>
   <!-- nav  切换 -->
    <sliderNav  :list="list"   />
 </div>
</template>

<script>
import serachInput from '../serachInput/serachInput'
import sliderNav from '../../sliderNav/sliderNav'
import api from '../../../api/index'
export default {
 data() {
 return {
 paramsid:'',
 composite:[],
   list:[
    {id:1,name:'综合'},
    {id:2,name:'单曲'},
    {id:3,name:'视频'},
    {id:4,name:'歌手'},
    {id:5,name:'专辑'},
    {id:6,name:'歌曲'},
    {id:7,name:'主播电台'},
    {id:8,name:'用户'},
  ]
 }
 },
 created(){

 },
 methods: {
//  async getserachlist(id){
//  console.log(id)
//  const {data:res}=await api.searchFn(id)
//  if(res.code==200){
//  this.composite=res.result
//  console.log(this.composite)
//  }
//  }
 },
 mounted(){
//  this.paramsid=this.$route.params.id
//  this.getserachlist(this.paramsid)
 },
 components:{
   serachInput,
   sliderNav
 }
}
</script>

<style lang="less" scoped>
</style>
