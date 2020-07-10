export const playMode = {
    sequence: 0,
    loop: 1,
    radom: 2
}
export default {
    offsetLyric: 0, //歌词的偏移
    playingShow: true, // 是否显示转盘播放页面
    palyStatus: false,//显示是否正在播放,
    fullScreen: false,//是否全屏显示
    audioIngIndex: -1,  //记录正在播放这一首歌曲的索引
    audioList: [], // 用来展示播放列表项
    mode: 0, //用来记录当前播放模式，0列表播放 1单曲循坏，2随机播放
    playlist: [], //用来存储各种播放模式的列表
    tabstatus: false,
    issmall: false,
    songs: {}, //当前歌曲记录,
    linkPage: 'searchsonglist',
    userdetail:[],//用户详情
    loginState:0 // 登陆状态，初始值为 0 未登录，登陆成功设置为 1
    /*
    **
    */
}