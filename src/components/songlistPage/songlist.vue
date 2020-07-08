<template>
    <div>
        <PageLoding v-show="load"></PageLoding>
        <div class="songlix-box">
            <div class="list">
                <div class="left" @click="add(id, item, num)">
                    <div class="indexspan" v-if="num + 1">
                        {{
                            num < 0
                                ? num + 2
                                : num + 1 > 9
                                ? num + 1
                                : "0" + (num + 1)
                        }}
                        <!-- {{ num + 1 > 9 ? num + 1 : "0" + (num + 1) }} -->
                    </div>
                    <div class="left-div">
                        <p class="songtitle-p" v-html="songName"></p>
                        <p class="songtitle-p1">
                            <span v-for="(item, index) in artists" :key="index"
                                >{{ item.name }}-</span
                            >
                            <span class="text-more" v-html="songName"></span>
                        </p>
                    </div>
                </div>

                <div class="right">
                    <span class="iconfont icon-shipin-"></span>
                    <span
                        class="iconfont icon-caidan1  ml"
                        @click="showPopup(id)"
                    ></span>
                </div>
            </div>
        </div>

        <!-- 下面的弹出层 -->
        <!-- 
<van-popup v-model="showbox"  position="bottom"  :style="{ height: '40%' }"  :overlay="overlay"  round >内容</van-popup> -->
    </div>
</template>

<script>
import PageLoding from "../loding/PageLoding"
export default {
    props: {
        songName: {
            type: String,
        },
        artists: {
            type: Array,
        },
        albumName: {
            type: String,
        },
        num: {
            type: Number,
        },
        id: {
            type: Number,
        },
        item: {},
        load: {
            type: Boolean,
            default: false,
        },
        alia: {
            type: String,
        },
        nowSong: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            abc: [],
            show: false,
            showbox: false,
            overlay: false,
        }
    },
    created() {},
    components: {
        PageLoding,
    },
    methods: {
        add(id, item, num) {
            this.$emit("clickid", id, item, num)
            this.$emit("beginSong")
        },
        showPopup(id) {
            console.log(id)
            if (id) {
                this.showbox = true
            }
        },
    },
}
</script>

<style lang="less" scoped>
.songlix-box {
    padding: 6px 12px;
    .songtitle-p {
        height: 20px;
        font-size: 14px;
        color: #333;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .songtitle-p1 {
        color: #dacdcd;
        height: 20px;
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
    }

    .right-icon {
        display: flex;
        align-items: center;
    }

    .list {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .left {
        display: flex;
        align-items: center;
    }

    .left-div {
        width: 200px;
    }

    .right_warpers {
        display: flex;
    }
    .indexspan {
        width: 30px;
        text-align: center;
        padding-right: 15px;
        color: #999;
        font-size: 16px;
    }

    .ml {
        margin-left: 10px;
    }
}
</style>
