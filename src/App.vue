<template>
  <div id="app">
    <!-- <keep-alive> -->
    <router-view />
    <buttomTabar></buttomTabar>
  </div>
</template>


<script>
import player from '../src/components/audioIndex/audioIndex'
import smallAudio from '../src/components/smallaudio/smallAudio'
import buttomTabar from '../src/components/buttomTabbar/buttomTabbar'
import {mapGetters} from 'vuex'
export default {
  data(){
    return{
    isshow:false
    }
  },
  created() {
    console.log(this.isFull);
  },
  components:{
  player,
  smallAudio,
  buttomTabar
  },
  methods:{
  
  },
  computed: {
     ...mapGetters({
      isFull: 'FULL_SCREEN',
      audiolist:'AUDIO_LIST'
    })
  },
}
</script>

<style lang="less">
#app {
  box-sizing: border-box;
  //  padding: 0px 10px;
}
</style>
