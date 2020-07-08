<template>
    <div class="home-songlist">
        <div class="song-title">推荐歌单 ></div>

        <div class="img-waper">
            <homeimgcard
                v-for="(item, index) in homeremendsonglist"
                :key="index"
                :imgUrl="item.picUrl"
                :name="item.name"
                :idx1="item.id"
                :idxsongs="item.id"
                :playcount="item.playCount"
            ></homeimgcard>
        </div>

        <div class="song-title">推荐mv></div>
        <div class="img-waper">
            <homeimgcard
                v-for="(item, index) in mv"
                :key="index"
                :imgUrl="item.picUrl"
                :name="item.name"
                :idx3="item.id"
                :mvsparams="mvsparams"
            ></homeimgcard>
        </div>

        <div class="song-title">最新mv></div>
        <div class="img-waper">
            <homeimgcard
                v-for="(item, index) in newsmv"
                :key="index"
                :imgUrl="item.cover"
                :name="item.name"
                :idx4="item.id"
                :mvsparams="mvsparams"
            ></homeimgcard>
        </div>
    </div>
</template>

<script>
import api from "../../api/index"
import homeimgcard from "../homeImgCard/homeImgCard"
export default {
    data() {
        return {
            homeremendsonglist: [],
            mv: [],
            mvsparams: "mv字段",
            newsmv: [],
        }
    },
    created() {
        this.getremends()
        this.getremenedmv()
        this.getnewmv()
    },
    methods: {
        async getremends() {
            //  const total=6
            const { data: res } = await api.remendsongmethod()
            if (res.code == 200) {
                this.homeremendsonglist = res.result
            }
        },
        async getremenedmv() {
            const { data: res } = await api.recommendmvmehod()
            if (res.code == 200) {
                this.mv = res.result
            }
        },
        async getnewmv() {
            const totalmv = 6
            const { data: res } = await api.newmvmethod(totalmv)
            if (res.code == 200) {
                this.newsmv = res.data
            }
        },
        clickmv() {
            console.log("我点击了mv")
        },
    },
    components: {
        homeimgcard,
    },
}
</script>

<style lang="less" scoped>
.home-songlist {
    width: 100%;
    .song-title {
        font-size: 13px;
        font-weight: bold;
        position: relative;
        margin-left: 10px;
        height: 40px;
        line-height: 40px;
    }
    .song-title::before {
        content: "";
        display: block;
        width: 3px;
        height: 10px;
        background: red;
        position: absolute;
        left: -10px;
        top: 15px;
    }

    .img-waper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
    }
}
</style>
