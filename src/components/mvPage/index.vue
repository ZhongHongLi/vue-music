<template>
    <div>
        <div class="viedo-warpercontent">
            <van-icon
                name="arrow-left"
                size="0.5rem"
                class="vaicon-back"
                color="#fff"
                @click="add"
            />
            <video
                :src="mvlist[240]"
                controls
                height="200px"
                width="100%"
                :webkit-playsinline="all"
            ></video>
        </div>
    </div>
</template>

<script>
import api from "../../api/index"
export default {
    name: "mvpage",
    data() {
        return {
            mvlist: [],
            all: true,
        }
    },
    created() {
        console.log(this.$route.params.id)
        this.getMvList(this.$route.params.id)
    },
    methods: {
        async getMvList(id) {
            const { data: res } = await api.allmvMethodFn(id)
            if (res.code == 200) {
                this.mvlist = res.data.brs
                console.log(this.mvlist)
            }
        },
        add() {
            console.log("我点了")
            this.$router.go(-1)
        },
    },
}
</script>

<style lang="less" scoped>
.viedo-warpercontent {
    position: relative;
    .vaicon-back {
        position: absolute;
        top: 5px;
        left: 5px;
        z-index: 100;
        object-fit: fill !important;
        width: 100vw !important;
    }
}

video {
    object-fit: fill !important;
    width: 100%;
}
</style>
