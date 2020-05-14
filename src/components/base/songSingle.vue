<template>
 <div>
   <!-- 歌单广场 -->
   <base-Top :title="title"></base-Top>
   <slider-Nav  :list="list"></slider-Nav>
 </div>
</template>

<script>
import baseTop from './baseTop'
import sliderNav from '../sliderNav/sliderNav'
import axios from 'axios'
export default {
 data() {
 return {
 title:'歌单广场',
 list:[
    {id:9,name:'推荐'},
    {id:10,name:'官方'},
    {id:11,name:'精品'},
    {id:12,name:'华语'},
    {id:13,name:'流行'},
    {id:14,name:'轻音乐'},
    {id:15,name:'摇滚'},
    {id:16,name:'民谣'},
  ]
 }
 },
 components:{
 baseTop,
 sliderNav
 },
 created(){
  this.getlist()
 },
 methods: {
async  getlist(){
  const {data:res}=await axios.get('/personalized')
  console.log(res)
 }
 }
}
</script>

<style lang="less" scoped>
</style>
