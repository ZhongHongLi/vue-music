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
allMv
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
  }
}

