
import state from './state'
import {
    SET_PLAYING_SHOW,
    SET_PLAY_SATE,
    SET_FULL_SCREEN,
    SET_AUDIO_INDEX,
    SET_AUDIO_LIST,
    SET_TAB_STATSU,
    SET_SMALLAUDIO_STATUS,
    SET_PLAY_LIST,
    GET_SONGS,
    SET_AUDIO_MODE,
    SET_LINK_PAGE,
    GET_USERINFO,
    LOGIN_STATE,
    TIME_STATE,
    RULELYRIC,
    CURRENT_INDEX,
    GETUSER_SONGURL
} from './mutctionstype'


export default {
    [SET_PLAYING_SHOW] (state, boolean) {
        state.playingShow = boolean
    },
    //设置当前播放状态
    [SET_PLAY_SATE] (state, status) {
        state.palyStatus = status
    },
    /**
   * 设置播放器是大还是小
   */
    [SET_FULL_SCREEN] (state, flag) {
        state.fullScreen = flag
    },
    //设置当前播放的索引
    [SET_AUDIO_INDEX] (state, index) {
        state.audioIngIndex = index
    },
    //设置播放列表的信息
    [SET_AUDIO_LIST] (state, list) {
        state.audioList = list
    },
    [SET_TAB_STATSU] (state, list) {
        state.tabstatus = list
    },
    [SET_SMALLAUDIO_STATUS] (state, boolean) {
        state.issmall = boolean
    },
    [SET_PLAY_LIST] (state, list) {
        state.playlist = list
    },
    [GET_SONGS] (state, list) {
        state.songs = list
    },
    /**
      * 设置当前播放模式
      * @param {*} state state数据
      * @param {*} mode 模式索引
      */
    [SET_AUDIO_MODE] (state, mode) {
        state.mode = mode
    },
    /**
     * 设置搜索展示页标签导航条
     */
    [SET_LINK_PAGE] (state, page) {
        state.linkPage = page
    },
    [GET_USERINFO](state,data){
        state.userdetail=data
    },
    //设置登录的状态
    [LOGIN_STATE] (state, num) {
        state.loginState = num
      },
    //储存时间
    [TIME_STATE](state,time){
        state.time=time
    },
    //歌词
    [RULELYRIC](state,arr){
        state.ruleLyrics=arr
        localStorage.setItem('ruleyics',JSON.stringify(state.ruleLyrics))
    },
    //歌曲播放的索引
    [CURRENT_INDEX](state,index){
        const midHeight = 3.5
        let top = midHeight - index * 0.6
        if (top > 0) {
            // top 不能为正数
            top = 0
        }
        state.marginTop = top + "rem"
    },
    [GETUSER_SONGURL](state,song){
        state.songdata=song
    }
}