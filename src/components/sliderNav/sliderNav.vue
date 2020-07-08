<template>
    <div>
        <van-tabs v-model="active" @click="toogletitle">
            <van-tab
                :title="item.name"
                v-for="(item, index) in list"
                :key="index"
            >
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import SearchSongList from "../../components/search/serachsonglist/SerachsongList"
import baseList from "../base/baseList"
import baseProgram from "../base/baseProgram"
import api from "../../api/index"
import axios from "axios"
import baseList2 from "../base/baseList2"
export default {
    props: {
        list: {
            type: Array,
        },
    },
    data() {
        return {
            active: 0,
            paramsid: "",
            //综合页面得数据
            composite: [],
            compositesong: [],
            hotauthorList: [],
            ProgramList: [],
            djRadioNumberOne: [],
        }
    },
    created() {
        this.zhuboFn()
        this.jiemuFn()
        this.djRadioListFn()
    },
    methods: {
        toogletitle(title, name, index) {
            //    console.log(title)
            //    console.log(name);
            // switch(title){
            //   case 1:
            //   this.jiemuFn()
            //   break;
            //   case 2:
            //   this.djRadioListFn()
            // }
            //    console.log(this.$route.query.keyword);
        },
        async jiemuFn() {
            const { data: res } = await axios.get("/dj/program/toplist")
            if (res.code === 200) {
                this.ProgramList = res.toplist
            }
        },
        async zhuboFn() {
            const { data: res } = await api.djhostauthorFn()
            if (res.code === 200) {
                this.hotauthorList = res.data.list
            }
        },
        async djRadioListFn() {
            const { data: res } = await api.djHotToplistFn()
            if (res.code === 200) {
                this.djRadioNumberOne = res.toplist
            }
        },
    },
    mounted() {
        this.paramsid = this.$route.params.id
        //  this.getserachlist(this.paramsid)
    },
    components: {
        baseList,
        baseProgram,
        baseList2,
        SearchSongList,
    },
}
</script>

<style lang="less" scoped></style>
