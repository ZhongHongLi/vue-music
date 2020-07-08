<!--
 * @Author: OBKoro1
 * @Date: 2020-04-01 13:08:58
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-07-07 12:55:10
 * @FilePath: \musics\music-wangyi\src\components\search\Search.vue
-->
<template>
    <div class="srach_content">
        <!-- 搜索头部 -->
        <serachInp ref="search" />
        <history />
        <hotSearch @returnKey="setKey" />
    </div>
</template>

<script>
import hotSearch from "../search/hotSearch"
import api from "../../api/index"
import serachInp from "../search/serachInput/serachInput"
import history from "./components/history"

export default {
    data() {
        return {}
    },
    created() {
        //文本框的关键字
        //页面首次加载，由于valuechange没有被watch'监听所以使用函数方法进行赋值
        //  this.setvaluechange()
    },
    activated() {
        this.setKey()
    },
    methods: {
        //点击跳转
        searchsong(key) {
            console.log(key)
            // this.$router.push(`/searchsonglist/${key}`)
        },
        setKey(key) {
            if (key) {
                //父组件调用子组件方法
                this.$refs.search.searchKey(key)
            }
        },
    },
    components: {
        hotSearch,
        serachInp,
        history,
    },
}
</script>

<style lang="less" scoped>
.srach_content {
    .van-search {
        padding: 0;
        margin: 0 0.2rem;
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
