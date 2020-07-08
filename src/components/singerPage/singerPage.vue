<template>
    <div class="sinerpage-waper">
        <base-Top :title="title"></base-Top>
        <!-- 歌手分类 -->
        <select-list
            :firstList="firstList"
            :secondList="secondList"
            :firstId="firstId"
            @update_firstID="uapdateFisrt"
            :secondId="secondId"
            @upadte_secondID="upageSend"
        >
        </select-list>
        <h3 class="h3-text">热门歌手</h3>
        <artist :allArtistList="allArtistList"> </artist>
    </div>
</template>

<script>
import selectList from "./selectList"
import api from "../../api/index"
import artist from "./artist"
import baseTop from "../base/baseTop"
export default {
    data() {
        return {
            firstList: [
                {
                    text: "华语",
                    id: "10",
                },
                {
                    text: "欧美",
                    id: "20",
                },
                {
                    text: "日本",
                    id: "60",
                },
                {
                    text: "韩国",
                    id: "70",
                },
                {
                    text: "其他",
                    id: "40",
                },
            ],
            secondList: [
                {
                    text: "男",
                    id: "01",
                },
                {
                    text: "女",
                    id: "02",
                },
                {
                    text: "乐队/组合",
                    id: "03",
                },
            ],
            firstId: "10",
            secondId: "01",
            allArtistList: [],
            title: "歌手分类",
        }
    },
    created() {
        this._getsonglistmeth(this.firstId, this.secondId)
    },
    watch: {
        allArtistList(newval) {
            this.allArtistList = newval
        },
    },
    components: {
        selectList,
        artist,
        baseTop,
    },
    methods: {
        backgo() {
            this.$router.go(-1)
        },

        /**
         * 获取歌手分类信息
         * @param {*} limit  返回数量 , 默认为 30
         * @param {*} offset 偏移数量，用于分页，默认为 0
         * @param {*} initial 按首字母索引查找参数
         */
        //  async _getsonglistmeth(idparams1,idparams2,limit,offset){
        //   const  parasm=`${idparams1}${idparams2}`
        //   console.log(parasm)
        //   const {data:res}=await api.singerClassFn(parasm,limit,offset)

        //    if(res.code===200){
        //     this.allArtistList=res.artists
        //    }
        //  },
        _getsonglistmeth(idparams1, idparams2, limit, offset) {
            const parasm = `${idparams1}${idparams2}`
            console.log(parasm)
            api.singerClassFn(parasm, limit, offset).then((res) => {
                const data = res.data
                if (data.code === 200) {
                    this.allArtistList = data.artists
                }
            })
        },
        uapdateFisrt(val) {
            this.firstId = val
            console.log(this.firstId)
            this.chanegid()
        },
        upageSend(val) {
            this.secondId = val
            this.chanegid()
        },
        chanegid() {
            this._getsonglistmeth(this.firstId, this.secondId)
        },
    },
}
</script>

<style lang="less" scoped>
.sinerpage-waper {
    // margin: 0 10px;
    overflow: hidden;
    .topcontaier {
        display: flex;
        align-items: center;
        padding: 10px 10px;
        p {
            flex: 1;
            text-align: center;
            font-size: 0.5rem;
            font-weight: 600;
        }
    }
    .h3-text {
        font-size: 14px;
        background: #ccc;
        padding-left: 10px;
        line-height: 1.4;
    }
}
</style>
