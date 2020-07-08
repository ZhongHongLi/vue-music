<template>
    <div>
        <page-Loding v-show="lodingshow"></page-Loding>
        <div v-show="!lodingshow">
            <song-list
                :songList="songList"
                :keyword="paramsid"
                v-if="orderList.includes('song')"
            ></song-list>
            <!-- 歌单 -->
            <playList
                :playList="playListList"
                :keyword="paramsid"
                v-if="orderList.includes('playList')"
            ></playList>
            <!-- 视频 -->
            <video-list
                :videoList="videoList"
                :keyword="paramsid"
                v-if="orderList.includes('video')"
            ></video-list>
            <!-- 相关搜索 -->
            <related-Search
                :simQuery="sim_queryList.sim_querys"
            ></related-Search>
            <!-- 歌手 -->
            <artist
                :artistList="artistList"
                v-if="orderList.includes('artist')"
            ></artist>
            <!-- 专辑 -->
            <album
                :albumList="albumList"
                v-if="orderList.includes('album')"
            ></album>
            <!-- 用户 -->
            <user :userList="userList" v-if="orderList.includes('user')"></user>
            <div v-if="!info"></div>
            <page-Info :info="info" :keywords="paramsid"></page-Info>
        </div>
    </div>
</template>

<script>
import api from "../../../api/index"
import pageLoding from "../../../base/pageLoding"
import { filterSetKeyWords } from "@/assets/utils/setKeyWords"
import pageInfo from "@/base/pageInfo"
import songList from "./components/song"
import playList from "./components/playList"
import videoList from "./components/videoList"
import relatedSearch from "./components/relatedSearch"
import artist from "./components/artist"
import album from "./components/album"
import user from "./components/user"
export default {
    props: {
        paramsid: {
            type: String,
        },
    },
    watch: {
        paramsid: function(val) {
            this.lodingshow = true
            console.log("watch")
            if (val) {
                this.searchkeywordFn(val)
            }
        },
    },
    data() {
        return {
            lodingshow: true,
            composite: [],
            // 这个搜索结果都包含哪些部分
            orderList: [],
            // 查看同名歌曲
            songList: {},
            // 查看全部歌单
            playListList: {},
            // 查看全部视频
            videoList: {},
            // 相关搜索
            sim_queryList: {},
            // 查看全部歌手
            artistList: {},
            // 查看全部专辑
            albumList: {},
            // 查看全部电台
            djRadioList: {},
            // 查看全部用户
            userList: {},
            info: false,
        }
    },
    created() {
        this.searchkeywordFn(this.paramsid)
    },
    beforeRouteEnter(to, from, next) {
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当守卫执行前，组件实例还没被创建
        next()
    },
    methods: {
        //  async getserachlist(id){
        //  console.log(id)
        //  const {data:res}=await api.searchFn(id)
        //  if(res.code==200){
        //  this.composite=res.result
        //  console.log(this.composite)
        //  }
        //  }
        async searchkeywordFn(key) {
            const { data: res } = await api.searchFn(key)
            if (res.code == 200) {
                let {
                    album, //专辑
                    order,
                    song,
                    playList,
                    video,
                    artist,
                    djRadio,
                    user,
                } = res.result
                let simQuery = res.result.sim_query
                this.orderList = order
                this.songList = song ? song.songs : []
                this.playListList = playList ? playList.playLists : []
                this.videoList = video ? video.videos : []
                this.sim_queryList = simQuery || {}
                this.albumList = album ? album.albums : []

                this.artistList = artist ? artist.artists : []
                this.djRadioList = djRadio ? djRadio.djRadios : []
                this.userList = user ? user.users : []
                this.songList = filterSetKeyWords(
                    this.paramsid,
                    this.songList,
                    "name"
                )
                this.videoList = filterSetKeyWords(
                    this.paramsid,
                    this.videoList,
                    "title"
                )
                this.playListList = filterSetKeyWords(
                    this.paramsid,
                    this.playListList,
                    "name"
                )
                this.albumList = filterSetKeyWords(
                    this.paramsid,
                    this.albumList,
                    "name"
                )
                this.djRadioList = filterSetKeyWords(
                    this.paramsid,
                    this.djRadioList,
                    "name"
                )
                this.userList = filterSetKeyWords(
                    this.paramsid,
                    this.userList,
                    "nickname"
                )
                this.artistList = filterSetKeyWords(
                    this.paramsid,
                    this.artistList,
                    "name"
                )
                this.lodingshow = false
                //展示信息
                if (this.orderList.length === 0) {
                    this.info = true
                }
            } else {
                this.load = false
                this.info = true
            }
        },
    },
    mounted() {
        //  this.paramsid=this.$route.params.id
        //  this.getserachlist(this.paramsid)
    },
    components: {
        pageLoding,
        pageInfo,
        songList,
        playList,
        videoList,
        relatedSearch,
        artist,
        album,
        user,
    },
}
</script>

<style lang="less" scoped></style>
