import state from './state'

const  getters={
    OFFSET_LYRIC: state => state.offsetLyric,
    PLAYING_SHOW:state=>state.playingShow,
    PLAY_STATUS:state=>state.palyStatus ,//播放的状态
    FULL_SCREEN: state => state.fullScreen,
    AUDIO_ING_INDEX: state => state.audioIngIndex, //索引
    AUDIO_LIST: state => state.audioList,
    //返回当前播放歌曲对象的信息
    CURRENT_INDEX:state=>state.audioIngIndex,
    AUDIO_ING_SONG:state=>{
        return  state.audioList[state.audioIngIndex]||{}
    },
    SET_STATUSTAB:state=>state.tabstatus
}

export default  getters