<template>
 <div>
   <serachInput  :paramsid="paramsid"/>
   <!-- nav  切换 -->
    <sliderNav />
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
 composite:[]
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
