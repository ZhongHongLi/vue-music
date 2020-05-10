<template>
  <div class="nav-wrapper">
      
       <van-popup v-model="show"  position="left" :style="{ height: '100%',width:'80%' }">
       <div class="loging_contetop">
         <p>登陆网易云音乐</p>
         <p>手机电脑多端同步，尽享海量高品质音乐</p>
         <div class="login_box"  @click="loginrouter">
           立即登录
         </div>
       </div>

       </van-popup>
    <nav class="nav-box">
      <div class="nav-left">
        <van-cell  @click="showPopup">
        <van-icon name="wap-nav" size="25px" />
        </van-cell>
      </div>
      <ul class="nav-center">
        <li>
          <a href="javascript:;">我的</a>
        </li>
        <li>
          <a href="javascript:;">发现</a>
        </li>
        <li>
          <a href="javascript:;">朋友</a>
        </li>
        <li>
          <a href="javascript:;">视频</a>
        </li>
      </ul>
       <div class="nav-right">
        <van-icon name="search" size="25px"  @click="seachrbtn" />
      </div> 
    </nav> 
  </div>
</template>

<script>
export default {
 data() {
 return {
   show: false
 }
 },
 created(){

 },
 methods: {
showPopup(){
this.show=true
},
seachrbtn(){
 this.$router.push('/search')
},
loginrouter(){
  this.$router.push('/logoin')
}
 }
}
</script>

<style lang="less" scoped>
.van-cell__value--alone{
  text-align: center;
}
   .van-cell{
      padding: 0;
    }
.van-icon-wap-nav{
  height: 1rem;
  line-height: 1rem;
  font-size: 0.6rem;
}


 .van-icon-search{
   height: 1rem;
   line-height: 1rem;
   font-size: 0.6rem;
 }

.nav-wrapper {
  padding: 0px 10px;
  height: 50px;
  box-sizing: border-box;
   .van-popup{
  .loging_contetop{
    text-align: center;
    background-color: rgba(204, 204, 204, 0.3);
    overflow: hidden;
    padding: 0.6rem 0.23rem 0.9rem;
    >p{
    font-size: 12px;
    color: rgba(0,0,0,.4);
    margin-top: 0.3rem;
    }
    .login_box{
       border:1px solid rgba(0, 0, 0, 0.4);
       padding: 0.2rem 0.5rem;
       font-size: 0.2rem;
       color: rgba(0, 0, 0, 0.4);
       border-radius: 0.5rem;
       width: 2.3rem;
       margin: 0.3rem auto;
    }
  }
  }
  .nav-box {
  width: 100%;
  display: flex;
  height: 1rem;
  line-height: 1rem;
  padding: 0.15rem 0;
    .nav-left {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
   
    .nav-center {
      display: flex;
      flex: 8;
      color: #999;
      font-size: 0.4rem;
      li {
        width: 25%;
        text-align: center;
        a {
           color: #999;
        }
      }
    }
    .nav-right {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    }
  }
}


</style>


