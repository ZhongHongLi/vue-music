<template>
<div >
   <!-- <div class="volume">
          <div class="iconfont  icon-icon-  le"  :class="value1==0?'icon-icon-1':'icon-icon-'"></div>
           <div  style="width:100%">
              <van-slider v-model="value1" @change="onChange"  active-color="#fff"   inactive-color='#ccc' />
           </div>
        </div> -->
 <div class="lyric-wapper">
        <div class="textfull"  v-if="noLyric">{{noLyricText}}</div>
     
        <ul  :style="{marginTop: marginTop}">
            <li
            v-for="(item,index) in lyricArray"
            :key="index"
            :class="{active: index === nowLyricIndex}"
            >
            {{item|setWords}}
            </li>
        </ul>
 </div>
 </div>
</template>

<script>
const midHeight = 3.5
import { Toast } from 'vant';
export default {
 props:{
 lyricArray:{
     type:Array
 },
  // 当前播放的歌词索引
    nowLyricIndex: {
      type: Number
    },
    noLyric: {
      type: Boolean
    },
    noLyricText: {
      type: String
    },
    aduioObject:{
      
    }
 },
 data() {
 return {
marginTop: '0rem',
value1:'30'
 }
 },
 created(){

 },
 methods: {
    setCurrent (index) {
      // 这里求出中线的位置为 8.3 rem
      // 通过 歌词容器的高度 / 2 - 每个 li 的高度 / 2
      // 每次移动是移动一行歌词的高度，一行歌词高度是 0.6 rem
      let top = midHeight - index * 0.6
      if (top > 0) {
        // top 不能为正数
        top = 0
      }
      this.marginTop = top + 'rem'
    },
    // onChange(value){
    //     console.log(value/100)
    //    Toast('当前音量为' + value)
    // //  this.$refs.audio.volume=value/100
    //   this.aduioObject.volume=value/100
    // }
 },
 filters: {
    setWords: function (val) {
      if (val && val.words) {
        return val.words
      }
    }
  }
}
</script>

<style lang="less" scoped>
.lyric-wapper{
    height: 10.5rem;
    margin: 0.6rem 0;
    color: #ccc;
    overflow: hidden;
    font-size: 0.4rem;
     ul {
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: center;
    /* ul元素的margin-top值变化，在0.7秒内完成 */
    transition: margin-top 0.7s;
    li {
    height: 0.9rem;
    line-height: 1.7;
    }
}
   .active {
        color: #fff;
      }

.textfull{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
}
.volume{
    display: flex;
    align-items: center;
    .le{
    margin-right: 9px;
    }
    divs{
      flex: 1;
    }
}
</style>
