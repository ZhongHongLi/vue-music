<template>
 <div>
 <Navbar/>
 <div class="banerSwiper">
     <van-swipe :autoplay="3000"  indicator-color="#dd001b">
  <van-swipe-item v-for="(item, index) in images" :key="index">
    <img :src="item.pic" />
    <span  class="title">{{item.typeTitle}}</span>
  </van-swipe-item>
</van-swipe>
 </div>

 <div class="tbs">
<ul class="tab_ui">
  <li  v-for="(item,index) in  tabdata" :key="index"  @click="clickgoto(item.id)">
     <span :class="item.classnames"></span>
     <div class="font4">{{item.text}}</div>
   </li>
</ul>
 </div>
 <!-- 推荐歌单 -->

<home-songlist></home-songlist>
 <buttom-tabbar></buttom-tabbar>


 
 </div>
</template>

<script>
import Navbar from '../nanbar/Navbar'
import  buttomTabbar  from '../buttomTabbar/buttomTabbar'
import  homeSonglist  from  '../homesonglist/homeSonglist'

export default {
  name:'home',
  data() {
    return {
     images: [ ],
     bordernone:false,
     tabdata:[
        {id:1,text:'每日推荐',classnames:'iconfont icon-rili font7 red'},
        {id:2,text:'歌单',classnames:'iconfont icon-audio1 font7  red'},
        {id:3,text:'排行榜',classnames:'iconfont icon-paihangbang font7 red'},
        {id:4,text:'电台',classnames:'iconfont icon-shouyinji font7 red'},
        {id:5,text:'直播',classnames:'iconfont icon-yanjing'}
    ]
    }
  },
  components:{
  Navbar,
  buttomTabbar,
  homeSonglist
  },
  created() {
  this.getbanner()
  },
  methods: {
  async getbanner(){
  const {data:res}=await  this.$http.get('/banner?type=1')
  this.images=res.banners
  },
  clickgoto(id){
   switch(id){
       case 1:
       this.$router.push('/home')
       break;
       case 2:
       this.$router.push('/home')
        break;
        case 3:
        this.$router.push('/seniority')
         break;
        case 4:
        this.$router.push('/home')
         break;
         case 5:
         this.$router.push('/home')

   }
  }
  }
}
</script>

<style lang="less" scoped>
.banerSwiper{
    height: 137px;
    padding: 10px;
    border-radius: 8px;
    .van-swipe{
        height: 100%;
        img{
            height: 100%;
            width: 100%;
            border-radius: 8px;
        }
    }  
    .title{
      position: absolute;
      right: 0;
      bottom: 0;
      color: #fff;
      font-size: 12px;
      padding: 3px 6px;
      background: red;
      border-top-left-radius: 0.11rem;
    }
}

 .font4{
     font-size: 0.3rem !important;
     margin: 0.25rem 0;
    }
    
    .font7{
      font-size: 0.6rem;
    }


  .iconfont{
        background: -webkit-gradient(linear, left top, right top, from(#ff5a4c), to(#ff1d11));
  }

    .red{
      color: #fff;
    }

    .tab_ui{
      display: flex;
      justify-content: center;
      text-align: center;
      border-bottom: 1px solid #ccc;
      li{
        flex: 1;
       span{
       width: 1rem;
       height: 1rem;
       display: inline-block;
       line-height: 1rem;
       border-radius: 50%;
        }
      }
    }

</style>
