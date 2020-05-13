<template>
 <div>
    <base-Top :title="title"></base-Top>
    <classifi-CationPage 
   :hotCategory="hotCategory"
   :moreCategory="moreCategory"
    ></classifi-CationPage>
 </div>
</template>

<script>
import  baseTop from '../base/baseTop'
import classifiCationPage from '../base/calssifiCationPage'
import  api  from '../../api/index'
export default {
 data() {
 return {
 title:'电台分类',
 hotCategory:[],
 moreCategory:[]
 }
 },
 components:{
baseTop,
classifiCationPage
 },
 created(){
 this.gethotdjcalssifiCation()
 },
 methods: {
 async gethotdjcalssifiCation(){
 const {data:res}=await  api.djClassificationFn()
 if(res.code==200){
     this.hotCategory=res.categories.slice(0,6)
     this.moreCategory=res.categories.slice(6,20)
 }
 }
 }
}
</script>

<style lang="less" scoped>
</style>
