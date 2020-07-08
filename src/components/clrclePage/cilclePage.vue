<template>
    <div class="cicle-box">
        <div class="cicle-pole" :class="{ rotatesmall: isPlay }"></div>
        <div class="rotate" ref="cilrce">
            <div class="song-img">
                <img v-lazy="imgUrl" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    name: "cicle-page",
    props: {
        imgUrl: {},
    },
    computed: {
        ...mapGetters({ isPlay: "PLAY_STATUS" }),
    },
    watch: {
        isPlay(val) {
            console.log(val)
            if (val == false) {
                //这是css的播放暂停动画  false是转 true 暂停
                this.$refs.cilrce.style.animationPlayState = "running"
            } else if (val == true) {
                this.$refs.cilrce.style.animationPlayState = "paused"
            }
        },
    },
    data() {
        return {}
    },
    created() {},
    methods: {},
}
</script>

<style lang="less" scoped>
.cicle-box {
    position: relative;
    height: 10.5rem;
    margin: 0.6rem 0;
    overflow: hidden;
    .cicle-pole {
        width: 2.5rem;
        background-image: url(https://s2.ax1x.com/2019/09/13/nrJyJP.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: absolute;
        transform: translate(-50%) rotate(0deg);
        padding-bottom: 3rem;
        left: 50%;
        z-index: 100;
        // transition:rotatesmall   3s linear;
        transform-origin: top left;
    }
    .rotatesmall {
        transform: translate(-50%) rotate(-20deg);
    }
    .rotate {
        position: relative;
        height: 0;
        width: 80vw;
        margin: 1.4rem auto;
        padding-bottom: 80vw;
        background-image: url(https://s2.ax1x.com/2019/09/12/n0yYqK.md.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        animation: rotes 24s linear infinite;
        .song-img {
            width: 5rem;
            height: 5rem;
            position: absolute;
            border-radius: 50%;
            overflow: hidden;
            top: 50%;
            left: 50%;
            margin-left: -2.5rem;
            margin-top: -2.5rem;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}
//    .rotess{
//   animation: rotes 24s linear infinite;
// }

@keyframes rotes {
    0% {
        -webkit-transform: rotate(0deg);
    }

    25% {
        -webkit-transform: rotate(90deg);
    }

    50% {
        -webkit-transform: rotate(180deg);
    }

    75% {
        -webkit-transform: rotate(270deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
    }
}
</style>
