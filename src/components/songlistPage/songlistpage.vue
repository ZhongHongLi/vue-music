<template>
    <div class="top_container">
        <!-- 头部箭头 -->
      <div class="top_bar">
        <van-icon  size="25px"  name="arrow-left"    @click="goback"  color="#fff" />
      </div>
      <!-- top info -->
      <!-- :data='detailtoplist' -->
      <div class="top_info_Box"  :data="detailtoplist" >
        <div class="left-img"  >
            <img :src="detailtoplist.coverImgUrl" alt="">
            <!-- 播放次数 -->
            <div class="top-icon">
                <van-icon name="play" color="#fff" />
                <!-- {{detailtoplist.playCount|| '555' | strdata}}亿 -->
            <span class="count">{{detailtoplist.playCount| strdata}}</span>
            </div>
        </div>
    
        <!-- right-box -->
        <div class="right-box"    >
          <div class="title-top">{{detailtoplist.name}}</div>
          <div class="middle_box">
          
              <van-icon   size="25px"  name="audio"  />
              <span class="middle-text">网易云音乐  ></span>
          </div>
          <div class="bottm-text">
              {{detailtoplist.description}} 
          </div>
        </div>
      </div>
            <ul class="pinglun-ul">
                <li  @click="commtmethod">
                    <div class="iconfont  icon-pinglun"></div>
                    <div class="txl">{{commentCount|setCom}}</div>
                </li>
                 <li>
                    <div class="iconfont  icon-zhuanfa-"></div>
                    <div class="txl">{{shareCount|setShare}}</div>
                </li>
                 <li>
                    <div class="iconfont  icon-xiazai"></div>
                    <div class="txl">下载</div>
                </li>
                 <li>
                    <div class="iconfont icon-duoxuankuang"></div>
                    <div class="txl">多选</div>
                </li>
            </ul>
    </div>
</template>

<script>

const  setNum=function(val){
    if(!val){
        return ''
    }
    if (val > 100000000) {
    val = ((val / 100000000).toFixed(1)) + '亿'
  } else if (val > 10000) {
    val = ((val / 10000).toFixed(1)) + '万'
  }
  return val
}
export default {
 props:{
 imgUrl:{
     type:String
 },
 detailtoplist:{

 },
 title:{
     type:String
 },
 shareCount: {
      type: Number
    },
    commentCount: {
      type: Number
    },
    albumId:{
        type:Number
    },
    rankingid:{
          type:Number
    }
 },
 data() {
 return {
 
 }
 },
 created(){

 },
 methods: {
  goback() {
      this.$router.go(-1);//返回上一层
    },
    //点击评论页面
    commtmethod(){
       //传id  图片 作者  头部标题 推荐跟排行公用一个  albumId  推荐的id    rankingid排行的id
       const  ids=this.albumId?this.albumId:this.rankingid
       const  imgUrl=this.detailtoplist.coverImgUrl
       //评论
       const  commt=this.commentCount
       //头部的标题
       const  titltop=this.detailtoplist.name
       this.$router.push({name:'comments',params:{imgUrl,commt,titltop,ids}})
    }
 },
 filters:{
     strdata:function(val){
         if(!val){
             return ''
         }
         return setNum(val)
     },
     setCom(val){
     if(!val){
         return '评论'
     }
     return  setNum(val)
     },
     setShare(val){
      if(!val){
         return '分享'
     }
      return  setNum(val)
     }
 }
}
</script>

<style lang="less" scoped>
 .top_container {
      width: 100%;
      height: 300px;
      background: #ee5253;
      padding: 0 !important;
    .top_bar {
      height: 50px;
      display: flex;
      align-items: center;
    }
   .top_info_Box{
       padding: 0px 10px;
       display: flex;
      .left-img{
          width: 135px;
          height: 135px;
          position: relative;
          .top-icon{
              color: #fff;
              position: absolute;
              top: 0;
              right: 0px;
              font-size: 11px;
              height: 15px;
              display: flex;
              align-items: center;
          } 
      }
      img{
      width: 100%;
      height: 100%;
      }
      .right-box{
          padding-left: 30px;
          flex: 1;
          .title-top{
              font-size: 20px;
              color: #fff;
              overflow: hidden;
              height: 28px;
              line-height: 28px;
          }
          .middle_box{
              color: #ccc;
              height: 52px;
              line-height: 52px;
              font-size: 14px;
              .van-icon{
                  vertical-align: middle;
              }
              .middle-text{
                  padding-left: 15px;
              }
          }
          .bottm-text{
                color: #ccc;
                font-size: 15px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                width: 160px;
          }
      }
   }
   .pinglun-ul{
    display: flex;
    justify-content: space-evenly;
    // padding: 0 10px;
    text-align: center;
    margin-top: 45px;
    .txl{
        font-size: 14px;
        color: #fff;
        margin-top: 5px;
    }
   }
  }
</style>
