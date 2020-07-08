<template>
    <div class="samll-warper" @click="returnFull">
        <!-- 左边图片 -->
        <div class="left-smallimg">
            <img :src="imgUrl" alt="" />
        </div>
        <audio :src="src" ref="aduioes"></audio>

        <!-- 中间 -->
        <div class="right-flex">
            <div class="text-songm">
                <p class="song-name">{{ name }}</p>
                <p style="font-size:12px">我是歌词现在占个位置</p>
            </div>

            <div class="right_icon">
                <span
                    @click="paly"
                    class="iconfont icon-play1"
                    :class="{ iconbofang: isPlay, iconzanting: !isPlay }"
                ></span>
                <span class="iconfont icon-liebiao1"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imgUrl: {
            type: String,
        },
        lyric: {
            type: String,
        },
        name: {
            type: String,
        },
        ar: {},
        src: {
            type: String,
        },
    },
    data() {
        return {
            isPlay: true,
        }
    },
    created() {},
    methods: {
        paly() {
            const aduios = this.$refs.aduioes
            this.isPlay = !this.isPlay
            if (this.isPlay == true) {
                aduios.pause()
                //   console.log(1111111111111111)
            } else if (this.isPlay == false) {
                //   console.log(222222222222)
                aduios.play()
            }
        },
        //点击展示大播放器
        returnFull() {
            this.$emit("returnFull")
        },
    },
}
</script>

<style lang="less" scoped>
.samll-warper {
    width: 100%;
    height: 50px;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    padding: 0 10px;
}
.left-smallimg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
}

.text-songm {
    line-height: 1.5;
    .song-name {
        font-size: 13px;
    }
}
.right_icon {
    margin-right: 20px;
    span {
        padding: 0 5px;
    }
}
.right-flex {
    display: flex;
    /* justify-content: flex-end; */
    width: 100%;
    justify-content: space-between;
    align-items: center;
}
</style>
