import axios from 'axios'

import {
topList,
idxList,
hotSearchList,
defaultSearch,
suggestSearch,
search,
albumDetail,
logins,
phonevadate,
sendvadate,
recommendlist,
songLyric,
newsong,
recommendmv,
newmvs,
commentPlaylist,
allMv,
checkSong,
singerClass,
djbanner,
djClassification,
radioRecommendations,
Hotanchor,
djHotToplist
} from './config'

export default{
/**
	   * 调用此接口,可获取所有榜单内容摘要
	   */
  topListFn(){
	  return axios.get(topList)
  },
 /**
   * 调用此接口 , 传入数字 idx, 可获取不同排行榜
   * @param {*} idx 排行榜 idx
   */
   inxListFn(idx){
	   return axios.get(idxList,{
		   params:{
			   idx
		   }
	   })
   },
   //搜索热门排行榜
hotSearchListFn (){
  return axios.get(hotSearchList)
},
/**
 * 调用此接口 , 传入搜索关键词可以搜索
 * 该音乐 / 专辑 / 歌手 / 歌单 / 用户 , 关键词可以多个 , 以空格隔开
 * @param {*} keywords 关键词
 * @param {*} limit 返回数量 , 默认为 30
 * @param {*} offset 偏移数量，用于分页 默认为 0
 * @param {*} type 搜索类型 默认为 1 即单曲 这里设置默认返回综合
 * 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单
 * 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
 */
searchFn (keywords, limit = 30, offset = 0, type = 1018) {
  return axios.get(search, {
    params: {
      keywords,
      limit,
      offset,
      type
    }
  })
},
//默认关键字
defaultSearchInput(){
  return axios.get(defaultSearch)
},
  /**
   * 调用此接口
   * 传入搜索关键词可获得搜索建议 ,
   * 搜索结果同时包含单曲 , 歌手 , 歌单 ,mv 信息
   * @param {*} keywords 关键词
   * @param {*} type 默认返回移动端数据
   */
  suggestSearchFn (keywords, type = 'mobile') {
    return axios.get(suggestSearch, {
      params: {
        keywords,
        type
      }
    })
  },
    /**
   * 调用此接口 , 传入歌单 id, 可 以获取对应歌单内的所有的音乐
   * @param {*} id 歌单 id
   * @param {*} s 歌单最近的 s 个收藏者,默认5个
   */
  albumDetailFn (id, s = 5) {
    return axios.get(albumDetail, {
      params: {
        id,
        s
      }
    })
  },
  //手机登录
  getloginmethod(phone,password){
    return axios.get(logins,{
      params:{
        phone,
        password
      }
    })
  },
  //验证码发送
  vadatemehod(phone){
    return axios.get(phonevadate,{
     params:{
       phone
     }
    })
  },
  //二次确认验证码是否一致
  sceodvatatemethod(phone,captcha){
    return axios.get(sendvadate,{
      params:{
        phone,
        captcha
      }
    })
  },
  // 传对应的id过来就好了
  songListmethod(id){
    return axios.get(songLyric,{
      params:{
        id
      }
    })
  },
  //推荐歌单 limit: 取出数量 , 默认为 30
  remendsongmethod(limit){
    return axios.get(recommendlist,{
      params:{
        limit
      }
    })
  },
  //推荐新歌
  remennewsongmethod(){
    return axios.get(newsong,{
    })
  },
  //推荐mv
  recommendmvmehod(){
    return axios.get(recommendmv,{
   
    })
  },
  //最新mv
  newmvmethod(limit){
    return axios.get(newmvs,{
     params:{
      limit
     }
    })
  },
   /**
   * 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该歌单的所有评论 ( 不需要 登录 )
   * @param {*} id 歌单id
   * @param {*} limit 取出评论数量 , 默认为 20
   * @param {*} offset 偏移数量 , 用于分页
   * @param {*} before 分页参数,取上一页最后一项的 time
   * 获取下一页数据(获取超过5000条评论的时候需要用到)
   */
  commentPlaylistFn (id, limit = 20, offset, before) {
    const timestamp = +new Date()
    return axios.get(commentPlaylist, {
      params: {
        id,
        limit,
        offset,
        before,
        timestamp
      }
    })
  },
  //获取mv数据
  /**
   * 
   @params{*} mvid mv的id参数必填
  */
  allmvMethodFn(mvid){
    return axios.get(allMv,{
      params:{
        mvid:mvid
      }
    })
  },
   /**
   * 传入歌曲 id, 可获取音乐是否可用
   * @param {*} id 歌曲 id
   * @param {*} br 码率,默认设置了 999000 即最大码率,如果要 320k 则可设置为 320000,其他类推
   */
  checkSongFn (id, br) {
    return axios.get(checkSong, {
      params: {
        id,
        br
      }
    })
  },
   /**
   * 调用此接口,可获取歌手分类列表
   * @param {*} cat 歌手类型, 必选
   * 入驻歌手 5001
   * 华语男歌手 1001 华语女歌手 1002 华语组合/乐队 1003
   * 欧美男歌手 2001 欧美女歌手 2002 欧美组合/乐队 2003
   * 日本男歌手 6001 日本女歌手 6002 日本组合/乐队 6003
   * 韩国男歌手 7001 韩国女歌手 7002 韩国组合/乐队 7003
   * 其他男歌手 4001 其他女歌手 4002 其他组合/乐队 4003
   * @param {*} limit  返回数量 , 默认为 30
   * @param {*} offset 偏移数量，用于分页，默认为 0
   * @param {*} initial 按首字母索引查找参数
   * /artist/list?cat=1001&initial=b
   * 返回内容将以 name 字段开头为 b 或者拼音开头为 b 为顺序排列
   */
  singerClassFn (cat = 1001, limit = 30, offset = 0, initial) {
    return axios.get(singerClass, {
      params: {
        cat,
        limit,
        offset,
        initial
      }
    })
  },
  //获取电台banner
  getdjbannerFn(){
    return axios.get(djbanner)
  },
    /**
   * 获取电台页面的电台推荐数据
   */
  radioRecomFn () {
    return axios.get(radioRecommendations)
  },
   /**
   * 登陆后调用此接口 , 可获得电台类型
   */
  djClassificationFn () {
    return axios.get(djClassification)
  },
  //最热主播榜
  /**
   * limit : 返回数量 , 默认为 100 (不支持 offset)
   */
  djhostauthorFn(){
    return axios.get(Hotanchor)
  },
    /**
   * 登陆后调用此接口 , 可获得新晋电台榜/热门电台榜
   * @param {*} limit 返回数量 , 默认为 100
   * @param {*} offset 偏移数量，用于分页
   * @param {*} type 榜单类型, new 为新晋电台榜, hot为热门电台榜
   */
  djHotToplistFn (limit = 100, offset = 0, type = 'hot') {
    return axios.get(djHotToplist, {
      params: {
        limit,
        offset,
        type
      }
    })
  }
}

