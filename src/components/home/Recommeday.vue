<template>
    <div>
        <div class="banner">
            <base-Top class="fiexd" :title="title"></base-Top>
            <div class="topheader">
                <!-- <p class="top-t">根据你的音乐口味,为你推荐好音乐</p> -->
            </div>
            <img
                class="bgimg"
                src="http://p1.music.126.net/TyjfAGFSo_U7uoK7BXky_w==/109951164987446271.jpg"
                alt=""
            />
        </div>
        <div class="baner-contanier">
            <div class="today-box">
                <div>
                    {{ today }}/<span
                        style="font-size:0.4rem;font-weight:600"
                        >{{ getMoth }}</span
                    >
                </div>
                <div class="histroy">历史日推</div>
            </div>
            <div class="banner-waper"  >
                <span style="font-size:0.4rem; color:#25a4bb;" v-show="isLogin===0" @click="logion">
                    需要用户登录</span
                >
                <!-- 歌单 -->
                <vueScroll height="" :ops="ops">
                <songlist
               :songLists="songLists"
                ></songlist>
                </vueScroll>
            </div>
        </div>
    </div>
</template>

<script>
import baseTop from "../base/baseTop"
import api from '@/api/index'
import songlist from './components/songlist'
import vueScroll from 'vuescroll'
export default {
    data() {
        return {
            ishow: true,
            startY: 0,
            isTouchStart: false,
            title: "每日推荐",
            isLogin:+localStorage.getItem('loginState')||0,
            songLists:[],
            ops:{
                bar:{
                    background:'#ccc',
                    width:'2px'
                }
            }
        }
    },
    created() {
        console.log(localStorage.getItem('loginState'));
        this.getRecommedayMethod()
    },
    computed: {
        getMoth() {
            const month =
                new Date().getMonth() + 1 < 10
                    ? "0" + (new Date().getMonth() + 1)
                    : new Date().getMonth() + 1
            return month
        },
        today() {
            return new Date().getDate()
        },
    },
    components: {
        baseTop,
        songlist,
        vueScroll
    },
    mounted() {
        this.$nextTick(function() {
            document.body.addEventListener("touchstart", this.touchStart, false)
            document.body.addEventListener("touchmove", this.touchMove, false)
            document.body.addEventListener("touchend", this.touchEnd, false)
        })
    },
    destroyed() {
        document.body.removeEventListener("touchstart", this.touchStart, false)
        document.body.removeEventListener("touchmove", this.touchMove, false)
        document.body.removeEventListener("touchend", this.touchEnd, false)
    },
    methods: {
        touchStart(e) {
            this.$el.querySelector(".banner").classList.remove("heightback")
            //页面处于顶部才执行
            if (window.pageYOffset <= 0) {
                this.isTouchStart = true
                this.startY = e.changedTouches[0].pageY
            } else {
                this.isTouchStart = false
            }
        },
        //touchMove
        touchMove(e) {
            if (this.isTouchStart) {
                var lastY = e.changedTouches[0].pageY
                if (lastY - this.startY > 0) {
                    e.preventDefault()
                    var _height = 225 + (lastY - this.startY) / 4 + "px"
                    this.$el.querySelector(".banner").style.height = _height
                }
            }
        },
        //touchEnd
        touchEnd(e) {
            this.$el.querySelector(".banner").style.cssText = ""
            this.$el.querySelector(".banner").classList.add("heightback")
            this.isTouchStart = false
        },
        //获取每日推荐歌曲的请求
       async getRecommedayMethod(){
            //判断不等于0
            if(this.isLogin!==0){
             let {data:res}=await api.getRecommedSongFn()
             console.log(res);
             if(res.code===200){
                 this.songLists=res.recommend
             }
            }
        },
        //跳转到登录页
        logion(){
            this.$router.push('/logoginbtn')
        }
    },
}
</script>

<style lang="less" scoped>
.top-t {
    font-size: 0.3rem;
    color: #fff;
    text-align: center;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 0;
}

.banner {
    height: 225px;
    background: #f5f5f5;
    position: relative;
}
.heightback {
    transition: height 0.5s;
}
.bgimg {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
}
.banner-waper {
    height: calc(100vh - 6rem);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: fixed;
    bottom: 10px;
    width: 100vw;
    background: #fff;
    text-align: center;
}

.baner-contanier {
    width: 100vw;
    height: calc(100vh - 6rem);
    position: relative;
}

.today-box {
    position: fixed;
    color: #fff;
    top: 20%;
    left: 10px;
    z-index: 100;
}

.fiexd {
    color: #fff;
    position: relative;
    padding: 0;
    /deep/ p {
        position: absolute !important;
        left: 50%;
        top: 10px;
        transform: translateX(-50%);
    }
    /deep/.topcontaier {
        padding: 0;
    }
    /deep/ .van-icon-arrow-left {
        position: absolute !important;
        left: 10px;
        top: 10px;
    }
    /deep/ .van-icon-chat-o {
        position: absolute !important;
        right: 10px;
        top: 10px;
    }
}
.histroy {
    font-size: 0.3rem;
    margin-top: 10px;
    background: #ccc;
    color: black;
    padding: 5px 10px;
    border-radius: 10px;
    text-align: center;
}
</style>
