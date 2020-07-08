<template>
    <div>
        <base-Top :title="title"></base-Top>
        <sliderNav :list="list"></sliderNav>
    </div>
</template>

<script>
import baseTop from "../base/baseTop"
import sliderNav from "../sliderNav/sliderNav"
import api from "../../api/index"
import baseList from "../base/baseList"
export default {
    data() {
        return {
            title: "主播电台排行榜",
            list: [
                { id: 17, name: "主播榜" },
                { id: 18, name: "节目榜" },
                { id: 19, name: "电台榜" },
            ],
            hotauthorList: [],
        }
    },
    components: {
        baseTop,
        sliderNav,
        baseList,
    },
    created() {
        this.zhuboFn()
    },
    methods: {
        async zhuboFn() {
            const { data: res } = await api.djhostauthorFn()
            if (res.code === 200) {
                this.hotauthorList = res.data.list
            }
        },
    },
}
</script>

<style lang="less" scoped></style>
