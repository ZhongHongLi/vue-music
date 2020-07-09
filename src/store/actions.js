import {
    SET_AUDIO_INDEX,
    SET_PLAY_SATE,
    SET_FULL_SCREEN,
    SET_AUDIO_LIST,
    SET_PLAY_LIST,
    GET_SONGS,
    GET_USERINFO
} from './mutctionstype'

import api from '../api/index'

/*获取随机值*/

function getRendomIndex (min, max) {
    //Math.floor 返回小于等于x的最大整数
    return Math.floor(Math.random() * (max - min + 1) + min)
}


/*
 打乱一个数组
*/

function upset (arr) {
    const _arr = arr.slice() // 从已有的数组中返回选定的元素
    for (let i = 0; i < _arr.length; i++) {
        const j = getRendomIndex(0, i)
        const t = _arr[i]
        _arr[i] = _arr[j]
        _arr[j] = t
    }
    return _arr
}

function findIndex (list, song) {
    return list.findIndex(item => {
        return item.id === song.id
    })
}

export default {
    selectPlay ({ commit, state }, { list, index, item }) {
        //调用设置当前播放列表的信息
        commit(SET_AUDIO_LIST, list)
        // commit(GET_SONGS,item)
        state.songs = item
        localStorage.setItem('song', JSON.stringify(state.songs))
        //2随机播放
        if (state.mode === 2) {
            const randomlist = upset(list)
            commit(SET_PLAY_LIST, randomList)
            index = findIndex(randomList, state.audioList[index])
        } else {
            commit(SET_PLAY_LIST, list)
        }
        //设置当前播放是第几个，索引值
        commit(SET_AUDIO_INDEX, index)
        //设置当前播放状态
        commit(SET_PLAY_SATE, true)
        // 设置当前的播放器的状态，是大还是小
        commit(SET_FULL_SCREEN, true)
    },
     getuserAction({commit},{id}){
         console.log(id);
        api.getUserdetailFn(id).then(res=>{
            console.log(res);
            commit(GET_USERINFO,res)
        })
    }
}