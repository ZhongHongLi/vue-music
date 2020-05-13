<template>
 <div>
 <div class="tbs">
<ul class="tab_ui">
  <li  v-for="(item,index) in  tabdata" :key="index"  @click="clickgoto(item.id)">
     <span :class="item.classnames"  style="position: relative; "><i class="iconrili" v-if="item.id==1">{{today}}</i></span>
     <div class="font4">{{item.text}}</div>
   </li>
</ul>
 </div>
 </div>
</template>

<script>
export default {
    props:{
    tabdata:{
        type:Array
    }
},
 data() {
 return {
 
 }
 },
   computed: {
    today(){
      return new Date().getDate()
      }
  },
 created(){
 },
 methods: {
 clickgoto(id){
     switch(id){
       case 1:
       this.$router.push('/recommenday')
       break;
       case 2:
       this.$router.push('/home')
        break;
        case 3:
        this.$router.push('/seniority')
         break;
        case 4:
        this.$router.push('/raduostation')
         break;
         case 5:
         this.$router.push('/home')
         break;
         case 6:
           this.$router.push('/classification')
   }
 }
 }
}
</script>

<style lang="less" scoped>

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


    .iconrili{
      position: absolute;
      left: 50%;
      font-size: 10px;
      transform: translateX(-50%);
      font-size: 0.1rem;
      top:4px;
      font-weight: 600;
    }
</style>
