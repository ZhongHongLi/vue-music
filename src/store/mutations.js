
import state from './state'
import {
    SET_PLAYING_SHOW,
    SET_PLAY_SATE,
    SET_FULL_SCREEN,
    SET_AUDIO_INDEX,
    SET_AUDIO_LIST
}  from './mutctionstype'


export default{
   [SET_PLAYING_SHOW](state,boolean){
       state.playingShow=boolean
   },
   //设置当前播放状态
   [SET_PLAY_SATE](state,status){
       state.palyStatus=status
   },
    /**
   * 设置播放器是大还是小
   */
  [SET_FULL_SCREEN] (state, flag) {
    state.fullScreen = flag
  },
  //设置当前播放的索引
  [SET_AUDIO_INDEX](state,index){
    state.audioIngIndex=index
  },
  //设置播放列表的信息
  [SET_AUDIO_LIST](state,list){
    state.audioList=list
  }
}