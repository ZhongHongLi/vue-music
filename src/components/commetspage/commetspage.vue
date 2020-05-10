<template>
 <div>
      <div class="top_bar">
        <van-icon name="arrow-left" size="30px" @click="goback"   />
        <div class="comment">评论({{albumInfo.commt}}）</div>
      </div>

      <!-- 中间左图 -->
      <div class="content-title">
          <img :src="albumInfo.imgUrl" alt="">
          <div class="middle-text">
              <p>{{albumInfo.titltop}}</p>
              <p>222222222</p>
          </div>
           <span>></span>
      </div>

      <!-- bf -->
      <div  style="width:100%; height:5px; background-color:#eee"></div>

      <!-- 组件 -->
      <comments
       :commentdata="commentdata"
      >

      </comments>
 </div>
</template>

<script>
import  api  from '../../api/index'
import  comments  from './comments'
export default {
 data() {
 return {
 params:'',
 albumInfo: {
    author: '',
    imgUrl: '',
    title: ''
      },
        commentdata:[]
 }
 },
 created(){
     //歌单的评论
  this.params=this.$route.params
  const params=this.params
  if(Object.keys(params).length===0){
      this.$router.back()
  }
  //获取歌曲信息
  this.albumInfo={...params}

  //这里进行判断
  if(params.ids){
      //这是是歌单推荐，跟排行包含在一起了
      const  paramsid=params.ids
      this.getalbumringcoment_(paramsid)
  }
 },
 components:{
     comments
 },
 methods: {
 goback(){
     this.$router.go(-1)
 },
 //获取排行个推荐的评论
 async getalbumringcoment_(paramsid){
  const  {data:res}=await api.commentPlaylistFn(paramsid)
  if(res.code===200){
      this.commentdata=res.comments
  }
 }
 }
}
</script>

<style lang="less" scoped>
 .top_bar {
      height: 50px;
      display: flex;
      align-items: center;
      .comment{
          font-size: 16px;
          margin-left: 5px;
      }
    }

   .content-title{
       display: flex;
       align-items: center;
       padding: 15px;
        img{
      width: 80px;
      height: 80px;
      border-radius: 3px;
     
    }
    .middle-text{
        margin-left: 15px;
        font-size: 14px;
        flex: 1;
        p{
          padding: 3px 0;
        }
    }
   }
</style>
