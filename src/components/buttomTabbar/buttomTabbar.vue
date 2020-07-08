<template>
    <div class="buttom-bar">
        <van-tabbar
            v-model="active"
            active-color="red"
            @change="onChange"
            safe-area-inset-bottom
        >
            <van-tabbar-item class="iconfont icon-vynil">发现</van-tabbar-item>
            <van-tabbar-item class="iconfont iconbofang1" size="0.5rem"
                >视频</van-tabbar-item
            >
            <van-tabbar-item class="iconfont icon-audio" size="0.5rem"
                >我的</van-tabbar-item
            >
            <van-tabbar-item
                class="iconfont icon-dilanxianxingiconyihuifu_huabanfuben"
                size="0.5rem"
                >云村</van-tabbar-item
            >
            <van-tabbar-item
                class="iconfont icon-zhanghaosheweimoren"
                size="0.5rem"
                :badge="num"
                >账号</van-tabbar-item
            >
        </van-tabbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            routeropen: true,
            num: 20,
        }
    },
    created() {},
    methods: {
        onChange(index) {
            console.log(index)
            switch (index) {
                case 0:
                    this.$router.push("/home")
                    break
                case 1:
                    this.$router.push("/myvideo")
                    break
                case 2:
                    this.$router.push("/friends")
                    break
                case 3:
                    this.$router.push("/langVan")
                    break
                case 4:
                    this.$router.push("/accounts")
                    break
            }
        },
    },
}
</script>

<style lang="less" scoped>
.iconfont {
    font-size: 0.3rem;
}

.buttom-bar {
    position: fixed;
    bottom: -4px;
    left: 0;
}
</style>
