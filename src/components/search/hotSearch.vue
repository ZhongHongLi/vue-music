<template>
    <div class="song-hotSearch">
        <p class="hot-serahtitle">热搜榜</p>
        <ul>
            <li
                v-for="(item, index) in hotSrachList"
                :key="index"
                @click="hotclick(item.searchWord)"
            >
                <span class="num">{{ index + 1 }}</span>
                <span class="rightdiv">
                    <div class="topsong">
                        <span class="song">{{ item.searchWord }}</span>
                        <span class="song-score">{{ item.score }}</span>
                        <img :src="item.iconUrl" alt="" />
                    </div>
                    <div class="songinfo">{{ item.content }}</div>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
import api from "../../api/index"
import Bus from "../../assets/Bus"
export default {
    name: "hotSearch",
    data() {
        return {
            hotSrachList: [],
            history: [],
        }
    },
    created() {
        //获取搜索的数据
        this.getListhot()
    },
    mounted() {
        this.getHistory()
    },
    methods: {
        //热搜请求
        async getListhot() {
            const { data: res } = await api.hotSearchListFn()
            if (res.code == 200) {
                this.hotSrachList = res.data
            }
        },
        //点击跳转
        hotclick(key) {
            this.getHistory(key)
            this.$emit("returnKey", key)
        },
        /**
         * 获取历史搜索记录
         */
        getHistory(key) {
            let keys = localStorage.getItem("keys")
                ? localStorage.getItem("keys").split(",")
                : []
            if (key) {
                // 将关键字插入到数组最前面
                keys.unshift(key)
                // 存入本地之前进行去重
                keys = this.unique(keys)
                // 存入本地
                localStorage.setItem("keys", keys)
            }
            this.history = keys
            // 通过Bus 进行兄弟组件之间传值
            // 通过 Bus.$emit('方法名',要传的值)
            Bus.$emit("addkey", this.history)
        },
        /**
         * 数组去重
         */
        unique(arr) {
            if (!Array.isArray(arr)) {
                console.log("type error!")
                return
            }
            return Array.prototype.filter.call(arr, function(item, index) {
                return arr.indexOf(item) === index
            })
        },
    },
}
</script>

<style lang="less" scoped>
.song-hotSearch {
    margin: 1rem 0.23rem 0 0.23rem;
    .hot-serahtitle {
        font-size: 0.4rem;
        color: #333;
    }
    ul {
        font-size: 0.35rem;
        display: flex;
        flex-wrap: wrap;
        li {
            margin: 0.5rem 0;
            flex: 50%;
            display: flex;
            align-items: center;
            &:nth-of-type(1) > .num {
                color: red;
            }
            &:nth-of-type(2) > .num {
                color: red;
            }
            &:nth-of-type(3) > .num {
                color: red;
            }
            &:nth-of-type(4) > .num {
                color: red;
            }
            > .num {
                line-height: 1rem;
                font-size: 0.3rem;
            }
        }
        .rightdiv {
            margin-left: 20px;
            .topsong {
                margin-bottom: 0.2rem;
                .song-score {
                    font-size: 0.2rem;
                    color: #999;
                }
                img {
                    height: 0.3rem;
                    margin-left: 0.2rem;
                }
            }

            .songinfo {
                font-size: 0.2rem;
                color: #aaa;
            }
        }
    }
}
</style>
