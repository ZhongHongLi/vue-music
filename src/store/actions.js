import {
    SET_AUDIO_INDEX,
    SET_PLAY_SATE,
    SET_FULL_SCREEN,
    SET_AUDIO_LIST
} from './mutctionstype'

export  default{
    selectPlay({commit,state},{list,index}){
        //调用设置当前播放列表的信息
        commit(SET_AUDIO_LIST,list)
        //设置当前播放是第几个，索引值
        console.log(index)
        commit(SET_AUDIO_INDEX,index)
        //设置当前播放状态
        commit(SET_PLAY_SATE,true)
         // 设置当前的播放器的状态，是大还是小
         commit(SET_FULL_SCREEN, true)
    }
}