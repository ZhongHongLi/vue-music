<template>
    <div class="accounts-waper">
        <!-- 我的账号 -->
      <div class="top-waper">
           <basetoptitle  :lefticon="lefticon"></basetoptitle>
           <baseCard></baseCard>
      </div>
      <baseContent :userinfo="userinfo"></baseContent>
    </div>
</template>

<script>
import basetoptitle from '@/base/baseTopTitle'
import baseCard from '@/base/baseCard'
import baseContent from './components/baseContent'
import { Notify } from 'vant';
export default {
    data() {
        return {
            lefticon:'icon-saoma',
            userinfo:{}
        }
    },
   beforeRouteEnter(to,from,next){
   console.log(to,from);
   if(to.path=='/accounts'){
       console.log(to.path);
       console.log('我检测到了');
    
   }
   next()
   },
    created() {
     
    },
    mounted(){
      if(localStorage.getItem('userinfo')!==''){
        this.userinfo=JSON.parse(localStorage.getItem('userinfo'))
        console.log(this.userinfo);
         if(this.userinfo==null){
             Notify({ type: 'warning', message: '用户还没有登录' });
         }
      }
    },
    methods: {},
    components:{
    basetoptitle,
    baseCard,
    baseContent
    }
}
</script>

<style lang="less" scoped>
.accounts-waper{
    height: 100%;
 .top-waper{
    background: -moz-linear-gradient(top, #ccc 0%, #ffffff 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ccc), color-stop(100%,#ffffff));
    background: -webkit-linear-gradient(top, #ccc 0%,#ffffff 100%);
    background: -o-linear-gradient(top, rgb(85, 38, 38) 0%,#ffffff 100%);
    background: -ms-linear-gradient(top, #ccc 0%,#ffffff 100%);
    background: linear-gradient(to bottom, #ccc 0%,#eee 100%);
 }
}
</style>
