<template>
 <div>
     <base-Top :title="title"></base-Top>
     <banner-Swiper :images="images"></banner-Swiper>
     <base-Tab :tabdata="tabdata" class="tb"></base-Tab>
     <base-Title ></base-Title>
    
<div class="img-waper">
       <homeImgCard
    v-for="item in radioRecomList"
    :key="item.index"
    :imgUrl="item.picUrl"
    :name="item.rcmdText"
    :lastProgramName="item.lastProgramName"
   >
   </homeImgCard>
   </div>
 </div>
</template>

<script>
import  bannerSwiper from '../bannerSwiper/bannerSwiper'
import  api  from '../../api/index'
import baseTop from '../base/baseTop'
import baseTab from '../base/baseTab'
import baseTitle from '../base/baseTitle'
import homeImgCard from '../../components/homeImgCard/homeImgCard'
export default {
 data() {
 return {
 images:[],
 title:'主播电台',
   tabdata:[
        {id:6,text:'电台分类',classnames:'iconfont icon-fenlei red'},
        {id:7,text:'电台排行',classnames:'iconfont icon-paihang font7  red'},
        {id:8,text:'付费精品',classnames:'iconfont icon-weibiaoti-- font7 red'},
        {id:9,text:'主播学院',classnames:'iconfont icon-shu font7 red'}
    ],
    radioRecomList:[]
 }
 },
 components:{
 bannerSwiper,
 baseTop,
 baseTab,
 baseTitle,
 homeImgCard
 },
 created(){
 this._getdjbanner()
 this.radioremoendfn()
 },
 methods: {
 _getdjbanner(){
  api.getdjbannerFn()
  .then((res)=>{
      if(res.status===200){
          const  data=res.data.data
       this.images=data
      }
  })
 },
async radioremoendfn(){
  const {data:res}=await   api.radioRecomFn()
  this.radioRecomList=res.data
    console.log(this.radioRecomList)
 },

 }
}
</script>

<style lang="less" scoped>
.tb{
    margin-bottom: 10px;
}
.img-waper{
  display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   width: 100%;
}
</style>
