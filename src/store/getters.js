import state from './state'

const  getters={
    OFFSET_LYRIC: state => state.offsetLyric,
    PLAYING_SHOW:state=>state.playingShow,
    PLAY_STATUS:state=>state.palyStatus ,//播放的状态
    FULL_SCREEN: state => state.fullScreen,
    AUDIO_ING_INDEX: state => state.audioIngIndex, //索引
    AUDIO_LIST: state => state.audioList,

}

export default  getters