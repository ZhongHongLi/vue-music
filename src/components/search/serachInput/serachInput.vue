<template>
    <div class="srach_content">
        <div class="topseach-box">
            <van-icon
                name="arrow-left"
                @click="arrback"
                style="font-size:0.8rem"
            />

            <van-search
                class="search"
                :placeholder="inputValue"
                use-left-icon-slot="true"
                @input="searchchange"
                v-model.trim="valuechange"
                clearable
                @clear="clear"
                @focus="onfocus($event)"
            />

            <van-icon
                name="friends-o"
                style="font-size:0.8rem"
                @click="gosingerPage"
            />
        </div>

        <!-- 搜索列表的信息 -->
        <div class="songinfo" v-if="isShow">
            <ul>
                <div class="top_serach">搜索 {{ valuechange }}</div>
                <li
                    v-for="(item, index) in serachList"
                    :key="index"
                    @click="searchsong(item.keyword)"
                >
                    {{ item.keyword }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import api from "../../../api/index"
import Bus from "../../../assets/Bus"
export default {
    props: {
        paramsid: {
            type: String,
        },
        keyword: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            inputValue: "",
            valuechange: "",
            //搜索出来的数据列表
            serachList: [],
            isShow: false,
            time: null,
            logetdefa: "",
            history: [],
        }
    },
    created() {
        this.getinputValue()
        //  this.logetdefa=localStorage.getItem('defalut')
        //  console.log(this.logetdefa)
        this.clickItem()
    },
    watch: {
        inputValue: function(newval) {
            if (newval != this.keyword) {
                newval = this.keyword
                this.inputValue = newval
            }

            if (this.inputValue === undefined || this.inputValue == "") {
                this.inputValue = localStorage.getItem("defalut")
            }
        },
        valuechange: function(newval) {
            if (!newval) {
                this.isShow = false
            }
        },
        keyword: function(val, oldVal) {
            console.log(val)
        },
    },
    methods: {
        arrback() {
            this.$router.go(-1)
        },
        gosingerPage() {
            this.$router.push("/singerpage")
        },
        //点击清除
        clear() {
            this.inputValue = ""
        },
        //获取焦点
        onfocus(e) {
            this.valuechange = e.target.placeholder
        },
        //文本框的默认搜索关键字
        async getinputValue() {
            const { data: res } = await api.defaultSearchInput()
            if (res.code == 200) {
                this.inputValue = res.data.showKeyword
                if (this.inputValue != "") {
                    localStorage.setItem("defalut", this.inputValue)
                }
            }
        },
        //文本发生变化时触发 发生变化的时候 处理防抖
        async searchchange(valuechange) {
            if (this.valuechange != "") {
                const { data: res } = await api.suggestSearchFn(valuechange)
                if (res.code == 200) {
                    this.serachList = res.result.allMatch
                    this.isShow = true
                    //搜索内容获取
                    this.setSearchList(this.valuechange)
                }
            }
        },
        //隐藏
        hideList() {
            this.isShow = false
        },
        //防抖的处理
        setSearchList(keywords) {
            if (this.time) {
                clearTimeout(this.time)
                this.time = null
            }
            this.time = setTimeout(() => {
                // this.searchchange(valuechange)
            }, 50)
        },
        //点击跳转
        searchsong(key) {
            this.getHistory(key)
            this.searchKey(key)
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
        //点击
        clickItem() {
            Bus.$on("search", (message) => {
                this.inputValue = message
                this.$router.push({
                    path: `/searchsonglist/${this.inputValue}`,
                })
            })
        },
        //搜索展示跳转到展示页面
        searchKey(key) {
            this.getHistory(key)
            this.hideList()
            this.clearInp()
            //解决Bus传值第一次无法获取到的问题
            setTimeout(() => {
                this.pushkey(key)
            }, 0)
            this.$router.push({
                path: `/searchsonglist/${key}`,
                // path:'/searchsonglist',
                // query:{
                //     keyword:this.inputValue
                // }
            })
        },
        clearInp() {
            this.inputValue = ""
        },
        pushkey(key) {
            this.$nextTick(() => {
                Bus.$emit("push", key)
            })
        },
    },
}
</script>

<style lang="less" scoped>
.srach_content {
    .van-search {
        padding: 0;
        margin: 0 10px;
        width: 80%;
    }
    .van-search__content {
        border-radius: 0.3rem;
    }
    .topseach-box {
        padding: 0.3rem 0.1rem;
        display: flex;
        align-items: center;
    }
    .search {
        flex: 1 !important;
    }

    .songinfo {
        width: 7.8rem;
        position: absolute;
        top: 1.3rem;
        left: 0.9rem;
        box-shadow: 0 0.10667rem 0.42667rem #aaa;
        background-color: #fff;
        z-index: 2;
        border-radius: 0.2rem 0.2rem;
        ul {
            .top_serach {
                font-size: 0.4rem;
                color: #dd001b;
                padding: 0.2rem 0;
            }
            padding: 0 0.3rem;
            li {
                font-size: 0.4rem;
                color: #888;
                height: 0.8rem;
                line-height: 0.8rem;
            }
        }
    }
}
</style>
