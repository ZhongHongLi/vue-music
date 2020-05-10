import jsonp  from 'jsonp'
import {comments,options}from  './config'

export default{
    getRecommend(){
        const url="https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg"
        const   data=Object.assign({},comments,{
            platdorm:'h5',
            uin:0,
            needNewCode:1
        })
        return jsonp(url,data,options)
    }
}

