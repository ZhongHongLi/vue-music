<template>
  <div class="album_container"    ref="topHeight"  @scroll.native="srollList">
<song-listpage
 :detailtoplist="detailtoplist"
 :title="title"
 :load="load"
 :albumId="albumId"
 :rankingid="rankingid"
 :idxComId="idxComId"
 :commentCount="detailtoplist.commentCount ? detailtoplist.commentCount : detailtoplist.album ? detailtoplist.album.info.commentCount : 0"
 :shareCount="detailtoplist.shareCount ? detailtoplist.shareCount : detailtoplist.album ? detailtoplist.album.info.shareCount : 0"
></song-listpage>
  <song-list
   v-for="(item,index) in songdeial.tracks"
   :key="index"
   :num="index"
   :songName="item.name"
   :artists="item.ar"
   :id="item.id"
   @clickid="add"
   :item="item"
   :load="load"
  >
  </song-list>



	<div class="audiobox" v-show="flag" :data="onesong">
	 <audio
    :src="onesong.url"
    autoplay 
    ref="audio"
    @canplay="ready"
    ></audio>
	</div>
   <!-- 播放的页面的显示 默认是隐藏的 -->
  <div class="play-ying" v-if="isplayshow">
    
    <div class="plypading">
   <div class="playtitle">
      <div class="left-arrow">
        <van-icon name="arrow-left"  color="#fff" size="30px" @click="backgo"/>
      </div>
     <div class="right-info">
         <div class="songs-title">{{name}}</div>
      <!-- <div v-for="(item,index) in palyerinfo.ar" :key="index" style="font-size:0.3rem;color:#fff;text-aligin:center" >{{item.name}}</div> -->
      <div style="font-size:0.3rem;color:#fff;text-aligin:center">{{SongName}}</div>
     </div>
   </div>
   <!-- 中间的圆 -->
   <cilcle-page  
   :imgUrl="imgUrl"
   v-show="playingShow"
    @click.native="setPlayingShow(false)"
   ></cilcle-page>
    <lyric-page
       @click.native="setPlayingShow(true)"
         v-show="!playingShow"
        :lyricArray="ruleLyric"
        :nowLyricIndex="nowLyricIndex"
        ref="lyric"
        :noLyric="noLyric"
        :noLyricText="noLyricText"
        :aduioObject="aduioObject"
    >
    </lyric-page>

    <div class="audio-ico">
      <van-icon name="like-o"  color="#bdc3c7"/>
      <van-icon name="down"  color="#bdc3c7"   />
      <van-icon name="notes-o" color="#bdc3c7" />
    </div>

   <!-- bar 播放的条 -->
   <div class="bar"  @time="changeTime"  >
     <span>{{startTime}}</span>
     <div class="bar-bg">
       <div class="bar-larer"></div>
       <div class="point" :style="{left:progressWidth+'%'}"></div>
     </div>
     <span>{{allTime|setTimes}}</span>
   </div>
</div>

  <!-- 下面的播放的区域 -->
    <function-button  
    @play="toogleplay"
    @next="nextSong"
    @prev="prevSong"
    >

    </function-button>

    <!-- <smallAudio
   v-show="issmallshow"
     :imgUrl="imgUrl"
       :name="name"
       :lyric="lyric"
       :ar="ar"
    ></smallAudio> -->
  </div>
  </div>
</template>

<script>
import api from '../../api/index'
import Songlist from '../songlistPage/songlist'
import  cilclePage  from  '../clrclePage/cilclePage'
import  {mapGetters,mapMutations,mapState,mapActions} from 'vuex'
import Seninority from '../../components/seninority/Seninority'
import  lyricPage  from  '../../components/lyricPage/lyricPage'
import functionButton  from '../../components/functionButton/functionButton'
import smallAudio  from '../../components/smallaudio/smallAudio'
import  songList   from  '../../components/songlistPage/songlist'
import  songListPage   from  '../../components/songlistPage/songlistpage'
import { Toast } from 'vant';
export default {

  data() {
    return {
    // 头部数据
    isshowclre:true,
    isshow2:false,
    isshow1:true,
    detailtoplist:[],
    //歌单数据
    songlist:[],
	  song:[],
	  songdeial:[],
	  onesong:[],
    flag:false,
    idx:'',
    isplayshow:false,
    palyerinfo:[],
    imgUrl:'',
    name:'',
    startTime:'00.00',
    allTime:0,
    progressWidth:0,
    ruleLyric:[],
    lyric:'',
    nowLyric:[],
    noLyric: false,
    isShowAudioList: false,
    noLyricText: '',
    nowLyricIndex: -1,
    animateplay:'',
    aduioObject:'',
    title:'',
    load:true,
    idxComId:0,
    //推荐的id
    albumId:0,
    //排行的id
    rankingid:0,
    ar:[],
    scrollHeight:0,
    issmallshow:false,
    readySong:false,
    conSong:true,
    SongName:''
    }
  },
  computed: {
    ...mapGetters({
       offsetLyric: 'OFFSET_LYRIC',
       playingShow:'PLAYING_SHOW',
       state:'PLAY_STATUS',
       isFull:'FULL_SCREEN',
       index:'AUDIO_ING_INDEX',
       list:'AUDIO_LIST',
       audioSong:'AUDIO_ING_SONG'
    })
  },
    ...mapMutations({
   setPlayingShow:'SET_PLAYING_SHOW',
   setState:'SET_PLAY_SATE',
   setIndex:'SET_AUDIO_INDEX'
  }),
  components:{
  Songlist,
  Seninority,
  lyricPage,
  cilclePage,
  functionButton,
  smallAudio,
  songList,
 'song-listpage':songListPage
  },
  created() {
     //推荐歌单的id
  this.load=true
  let  abbumld=this.$route.params.id
  this.albumId=abbumld
  if(abbumld){
    this._getremmedsong(abbumld)
  }
  //获取排行榜的id
  let  rankingid=this.$route.params.idx
  
  let  nesongid=this.$route.params.id
   //排行的id
   if(rankingid){
   this.getdetail(rankingid)
   }
  },
  watch:{
  audioSong(val,oldval){
    this.$nextTick(()=>{
      this._checkSong(val.id)
    })
    this.ar=val
    this.imgUrl=val.al.picUrl
    this.name=val.name
    this.SongName=val.ar[0].name
    this.allTime=val.dt
  }
  },
  methods: {
    _checkSong(id){
    api.checkSongFn(id).then(res=>{
      const data=res.data
        if(data.success){
          this.conSong=true
           this._getSongUrl(id)
           this.geTslyrics(id)
        }
    })
    .catch(err=>{
      //不能播放歌曲的时候选择下一首
       this.conSong=false
       this.readySong=true
       Toast('此音乐要收费,请换一首');
       this.readySong=true
    })

  },
    //滚动事件
  //点击显示隐藏歌词跟转盘
   setPlayingShow(a){
    this.$store.commit('SET_PLAYING_SHOW',a)
   },
    goback() {
      this.$router.go(-1);//返回上一层
    },
    //推荐歌单的请求
    async   _getremmedsong(id){
    const  {data:res}=await api.albumDetailFn(id)
    if(res.code===200){
      this.songdeial=res.playlist
      this.detailtoplist=res.playlist
      this.title="推荐歌单"
      this.load=false
    }
    },
    //排行榜的id
    async getdetail(rankingid){
    const {data:res}= await  this.$http.get(`top/list?idx=${rankingid}`)
    this.detailtoplist=res.playlist
    this.rankingid=res.playlist.id
    //头部的数据
    this.songlist=res.privileges
    this.songdeial=res.playlist
    this.load=false
    },
    //点击当前歌曲
	async add(id,item,index){
  this.ar=item.ar
  this.palyerinfo=item
  this.name=this.palyerinfo.name
  this.SongName=this.palyerinfo.ar[0].name
  //调用vuex action中的方法
  this.selectPlay({
    list:this.detailtoplist.tracks,
    index
  })

  //歌曲的总时间
  this.allTime=this.palyerinfo.dt
  this.imgUrl=this.palyerinfo.al.picUrl
  this.isplayshow=!this.isplayshow
   this.$store.commit('SET_PLAY_SATE',false)
  //请求点击的当前歌曲
  this._getSongUrl(id)
  this.geTslyrics(id)
	},
async  _getSongUrl(id){
	const {data:res}=await	this.$http.get('song/url?id='+id)
   if(res.code==200){
     //这是歌曲
       this.onesong=res.data[0]
       this.audioTimeUpdate()
   }
 },
  backgo(){
    this.isplayshow=!this.isplayshow
    this.issmallshow=!this.issmallshow
  },
  //这里不设置事件是拿不到起始歌曲时间，
 audioTimeUpdate(){
  this.$refs.audio.addEventListener('timeupdate',this.updatetime)
 },
  updatetime(){
    //这个是获取音频标签
    const audio=this.$refs.audio
    this.aduioObject=audio
    let minutes=Math.floor(audio.currentTime/60)
    let  seconds=Math.floor(audio.currentTime-minutes*60)
    let minteVal
    let secondVal
    //格式转换  当分钟小于10前面补零
    if(minutes<10){
      minteVal='0'+minutes
    }else{
      minteVal=minutes
    }
    //秒数格式设置
    if(seconds<10){
      secondVal='0'+seconds
    }else{
      secondVal=seconds
    }
    //时间拼接
    let aduioTime=minteVal+':'+secondVal
    this.startTime=aduioTime
    //进度条的长度计算 duration 属性返回当前音频/视频的长度，以秒计。
    let barLength=audio.currentTime/audio.duration*100
     //设置一个进度条的函数
     this.setProgress(barLength)
     //歌词的偏移
     const  playTime =audio.currentTime+this.offsetLyric
     const  index=this.getcurrenIndex(playTime,this.ruleLyric)
     this.nowLyricIndex=index
     //设置歌词显示
    this.showLyric(index,this.ruleLyric)
    //设置歌词页面的显示规则，传入当前歌词索引信息
    this.$refs.lyric.setCurrent(this.nowLyricIndex)
  },
  //获取当前歌词的索引
  getcurrenIndex(time,lyricArray){
    if(time=='') return
   for (var   i=lyricArray.length-2; i>=0 ; i--){
        const  songindex=lyricArray[i].time
        if(time>songindex){
          return  i
        }
        if(!songindex){
          return -1
        }    
   }
   return -1
  },
  //设置当前歌词的显示信息
  showLyric(index,array){
  if(index!==-1){
    const words=array[index].words
  }
  },
  //进度条
  setProgress(valength){
  if(valength<0||valength>100) return 
  this.progressWidth=valength
  },
  //改变进度改变歌曲的播放事件
  changeTime(time){
  },
 async  geTslyrics(id){
   const  {data:res}=await api.songListmethod(id)
   if(res.code==200){
      if(res.nolyric){
        //没有歌词的情况
        this.ruleLyric=[]
        this.nowLyric=''
        this.noLyric=true
        this.noLyricText = '纯音乐，请欣赏'
         return
      }
        this.noLyric = false
        this.lyric = res.lrc.lyric
        if(!this.lyric.trim()){
           // 歌词为空
            this.noLyricText = '暂时没有歌词'
            this.ruleLyric = []
            this.nowLyric = ''
            this.noLyric = true
            return
        }
        this.ruleLyric=this.createLrcArray(this.lyric)
   }
  },
  //讲歌词转化数据通过分割字符串  返回格式 {time,word}
  createLrcArray(arr){
     const parts=arr.split('\n')
     for(var  i=0; i<parts.length;i++){
        const  songs=parts[i]
        parts[i]=this.changeObject(songs)
     }
     return  parts
  },
  //每行歌词转换成对象
 changeObject(str){
   const words=str.split(']')[1]
   //返回时间信息正则
   const  reg=/\w{0,}:\w{0,}.\w{0,}/g
   let  timeArray=reg.exec(str)
   if(!timeArray){
     return
   }
   timeArray=timeArray[0].split(":")
   const minute = parseInt(timeArray[0]) // 分钟数
   const second = parseFloat(timeArray[1]) // 秒数
   const time = minute * 60 + second
   return {
     time,
     words
   }
 },
   toogleplay(){
     //点击了把状态赋值给他做暂停播放的动画
    if(this.state==false){
          this.$store.commit('SET_PLAY_SATE',true)
          this.toPause()
    }else{
      this.$store.commit('SET_PLAY_SATE',false)
       this.toPlay()
    }
    },
    /*
    当浏览器可以播放资源时
    */
   ready(){
   this.readySong=true
   },
   /*
   当资源加载期间发生错误时
   */
   error(){
   this.readySong=true
   },
    toPlay(){
      this.$refs.audio.play()
    },
    toPause(){
      this.$refs.audio.pause()
    },
    //上一首
    prevSong(){
      if(!this.readySong){
        return 
      }
      //改变的播放的状态
       this.$store.commit('SET_PLAY_SATE',false)
     let nowIndex=this.index-1
     if(nowIndex==-1){
       nowIndex=this.list.length-1
     }
     this.$store.commit('SET_AUDIO_INDEX',nowIndex)
     this.readySong=false
    },
    nextSong(){
      if(!this.readySong){
        return 
      }
      this.$store.commit('SET_PLAY_SATE',false)
     let nowIndex=this.index+1
     //切换到最后一首
    if(nowIndex==this.list.length){
      nowIndex=0
    }
    this.$store.commit('SET_AUDIO_INDEX',nowIndex)
    this.readySong=false
    },
   ...mapActions(['selectPlay'])
  },
  filters:{
    // 将毫秒转为正常事件  
    setTimes:function(value){
      if(!value) return  ''
      //这里是转换成总分
      let  min =parseInt(value/(1000*60))
      if(min<10){
        min='0'+min
      }
      let sec=parseInt(value%(1000*60)/1000)
      if(sec<10){
        sec="0"+sec
      }
      value=`${min}:${sec}`
      return value
    }
  }
}
</script>

<style lang="less" scoped>
.album_container {
    margin: 0;
    padding: 0;
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
  }
  // .songlix-box{
	//   padding: 6px 12px;
	//   li{
	// 	  height: 53px;
	// 	  display: flex;
	//       align-items: center;
	// 	  .indexspan{
	// 		  padding-right: 15px;
  //       color: #999;
  //       font-size: 16px;
	// 	  }
	// 	  .songtitle-p{
	// 		  height: 20px;
	// 		  font-size: 14px;
	// 		  color: #333;
	// 		  width: 300px;
	// 		  white-space: nowrap;
	// 		  overflow: hidden;
	// 		  text-overflow: ellipsis;
	// 	  }
	// 	  .songtitle-p1{
	// 		color: #dacdcd;
	// 		height:20px;
	// 		font-size: 12px;
	// 		white-space: nowrap;
	// 		overflow: hidden;
	// 		text-overflow: ellipsis;
	// 		width: 300px;
	// 	  }
	//   }
  // }

  .play-ying{   
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: darkslategrey;
    z-index: 100;
    .plypading{
      margin: 0 0.26667rem;
    .playtitle{
      display: flex;
      margin: 0.3rem 0;
      align-items: center;
      justify-content: center;
      .left-arrow{
        position: absolute;
        left: 5px;
      }
      .right-info{
        font-size: 0.36rem;
        // margin-left: 3rem;
       .songs-title{
         color: #fff;
         line-height: 1.5;
       }
       .song-starsong{
         font-size: 0.34rem !important;
         color: #bdc3c7;
       }
      }
    }
  
    .audio-ico{
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 1rem;
    }
    .bar{
      display: flex;
      margin: 0.6rem 0;
      align-items: center;
      color: #bdc3c7;
      font-size: 0.2rem;
      .bar-bg{
        width: 100%;
        margin: 0 0.16rem;
        height: 2px;
        background: #95a5a6;
        position: relative;
        .bar-larer{
         height: 2px;
         background-color: #ecf0f1;
        }
        .point{
         position: absolute;
         top: -3px;
         border-radius: 50%;
         width: 8px;
         height: 8px;
         background-color: #ecf0f1;
        }
      }
    }
  }
   }
    .warper-play{
      display: flex;
      align-items: center;
      justify-content: space-around;
     margin: 0 0.6rem;
    }

    .iconfont{
      font-size: 0.8rem;
      color: #bdc3c7;
    }

    // .warper-play span{
    //   margin: 0  0.2rem;
    // }

    .font-big{
      font-size: 1.5rem;
    }
}
</style>
