<template>
 <div>
<van-tabs v-model="active" @click="toogletitle" >
  <van-tab :title="item.name" v-for="(item,index) in list" :key="index"  >
    <!-- <div v-if="item.name=='综合'">111</div> -->
    <!-- <comPosite v-if="item.name=='综合'"  />
      <div v-if="item.name=='单曲'">222</div>
        <div v-if="item.name=='视频'">333</div>
          <div v-if="item.name=='歌手'">444</div>
            <div v-if="item.name=='专辑'">55</div>
             <div v-if="item.name=='歌曲'">566</div>
             <div v-if="item.name=='主播平台'">77</div>
             <div v-if="item.name=='用户'">888</div> -->
   <base-List v-show="item.name=='主播榜'" :hotauthorList="hotauthorList"></base-List>
   <baseProgram   v-show="item.name=='节目榜'"   :ProgramList="ProgramList"></baseProgram>
   <base-List2  v-show="item.name=='电台榜'"  :djRadioNumberOne="djRadioNumberOne"></base-List2>
  </van-tab>
  
</van-tabs>
 </div>
</template>

<script>
import comPosite from '../search/composite/comPosite'
import baseList  from '../base/baseList'
import baseProgram from '../base/baseProgram'
import api from '../../api/index'
import axios from 'axios'
import baseList2 from '../base/baseList2'
export default {
  props:{
    list:{
     type:Array
    }
  },
 data() {
 return {
  active: 0,
  paramsid:'',
  //综合页面得数据
  composite:[],
  compositesong:[],
  hotauthorList:[],
  ProgramList:[],
  djRadioNumberOne:[]
 }
 },
 created(){
 this.zhuboFn()
 this.jiemuFn()
  this.djRadioListFn()
 },
 methods: {
 toogletitle(title,name,index){
   console.log(title,name)
  // switch(title){
  //      case 0:
  //      this.$router.push('/baselist')
  //      break;
  //      case 1:
  //      this.$router.push('/mymusic')
  //       break;
  //       case 2:
  //       this.$router.push('/friends')
  //        break;
  //  }
  // switch(title){
  //   case 1:
  //   this.jiemuFn()
  //   break;
  //   case 2:
  //   this.djRadioListFn()
  // }

 },
 async jiemuFn(){
  const {data:res}=await axios.get('/dj/program/toplist')
  if(res.code===200){
    this.ProgramList=res.toplist
  }
 
 },
 async zhuboFn(){
  const {data:res}=await  api.djhostauthorFn()
  if(res.code===200){
      this.hotauthorList=res.data.list     
  }
 },
async  djRadioListFn(){
  const {data:res}=await api.djHotToplistFn()
 if(res.code===200){
 this.djRadioNumberOne=res.toplist
 }
 }
 },
 mounted(){
  this.paramsid=this.$route.params.id
//  this.getserachlist(this.paramsid)
 },
 components:{
   comPosite,
   baseList,
   baseProgram,
   baseList2
 }
}
</script>

<style lang="less" scoped>
</style>
