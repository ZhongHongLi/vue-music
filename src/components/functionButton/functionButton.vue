<template>
    <div class="warper-play">
        <span class="iconfont  icon-xunhuan"></span>
        <span
            class="iconfont icon-shangyishou-yuanshijituantubiao"
            @click="prev"
        ></span>
        <span
            class="iconfont   font-big"
            @click="play"
            :class="{ iconbofang: isPlay, iconzanting: !isPlay }"
        ></span>
        <span
            class="iconfont  icon-xiayishou-yuanshijituantubiao"
            @click="next"
        ></span>
        <span class="iconfont  icon-liebiao"></span>
    </div>
</template>

<script>
import { mapGetters, mapState } from "vuex"
export default {
    data() {
        return {
            clickstatus: "",
        }
    },
    created() {},
    watch: {
        isPlay(val) {},
    },
    computed: {
        ...mapGetters({
            isPlay: "PLAY_STATUS",
        }),
    },
    methods: {
        play() {
            this.$emit("play", this.clickstatus)
        },
        next() {
            this.$emit("next")
        },
        prev() {
            this.$emit("prev")
        },
    },
}
</script>

<style lang="less" scoped>
.warper-play {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 0.6rem;
}

.iconfont {
    font-size: 0.8rem;
    color: #bdc3c7;
}

.font-big {
    font-size: 1.5rem;
}
</style>
