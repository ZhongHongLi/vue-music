<template>
    <div class="seninority-contariner">
        <Page-Loding v-show="loding"></Page-Loding>
        <div v-show="!loding">
            <baseTop :title="title"></baseTop>
            <!-- 歌单 -->

            <!-- 排行榜 -->

            <index-card
                v-for="(item, index) in officialIdxList"
                :key="index"
                :imgUrl="item.coverImgUrl"
                :tracks="item.tracks"
                :idx="item.name"
                :updateTime="item.updateFrequency"
                @showIdxPage="showIdxPage"
            >
            </index-card>

            <!-- 推荐榜 -->
            <div class="recommend-title">推荐榜单</div>
            <div class="img-waper">
                <img-components
                    v-for="(item, index) in recommendedIdxList"
                    :key="index"
                    :imgUrl="item.coverImgUrl"
                    :name="item.name"
                    :updateTime="item.updateFrequency"
                    :idx="item.name"
                    @showIdxPage="showIdxPage"
                    :recommendedIdxList="recommendedIdxList"
                ></img-components>
            </div>

            <!-- 更多榜单 -->
            <div class="recommend-title">更多榜单</div>
            <div class="img-waper">
                <img-components
                    v-for="(item, index) in moreIdxList"
                    :key="index"
                    :imgUrl="item.coverImgUrl"
                    :name="item.name"
                    :updateTime="item.updateFrequency"
                    :idx="item.name"
                    @showIdxPage="showIdxPage"
                    :recommendedIdxList="recommendedIdxList"
                ></img-components>
            </div>
        </div>
    </div>
</template>

<script>
import PageLoding from "../loding/PageLoding.vue"
import indexCard from "../indexCard/indexCard"
import imgComponents from "../imgComponents/imgComponents"
import api from "../../api/index"
import baseTop from "../base/baseTop"
export default {
    data() {
        return {
            officialIdxList: [],
            recommendedIdxList: [],
            moreIdxList: [],
            loding: true,
            ind: "",
            title: "排行榜",
        }
    },
    components: {
        PageLoding,
        indexCard,
        imgComponents,
        baseTop,
    },
    created() {
        this.songsss()
    },
    methods: {
        async songsss() {
            const { data: res } = await api.topListFn()
            if (res.code !== 200) return
            this.songlist = res.list
            this.officialIdxList = res.list.slice(0, 4)
            this.recommendedIdxList = res.list.slice(4, 10)
            this.moreIdxList = res.list.slice(10)
            this.loding = false
        },
        showIdxPage(idx) {
            console.log(idx);
            this.$router.push({ name: "albumpage", params: { idx: idx } })
        }
    },
}
</script>

<style lang="less" scoped>
.seninority-contariner {
    width: 100%;
    box-sizing: border-box;
    .recommend-title {
        height: 50px;
        line-height: 50px;
        font-weight: 600;
        padding-left: 10px;
        font-size: 14px;
    }
    .img-waper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
}
</style>
