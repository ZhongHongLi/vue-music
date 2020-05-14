<template>
  <div id="app">
      <!-- <keep-alive> -->
    <router-view/>
      <!-- </keep-alive> -->
  </div>
</template>


<script>

export default {
  data(){
    return{
    isshow:false
    }
  },
  created() {
   
  },

  components:{

  },
  methods:{
  
  }
}
</script>

<style lang="less">
 #app{
   box-sizing: border-box;
  //  padding: 0px 10px;
 }
</style>
