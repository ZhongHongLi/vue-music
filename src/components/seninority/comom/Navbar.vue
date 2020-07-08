<template>
    <div class="navbar-box">
        <div class="arrow-box">
            <van-icon name="arrow-left" size="25px" @click="goback" />
            <span class="text">排行榜</span>
        </div>
        <div class="title">
            官方榜
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    created() {},
    methods: {
        goback() {
            this.$router.go(-1) //返回上一层
        },
    },
}
</script>

<style lang="less" scoped>
.navbar-box {
    width: 100%;
    padding: 0 10px;
    .arrow-box {
        height: 50px;
        display: flex;
        align-items: center;
        .text {
            font-size: 21px;
            padding-left: 10px;
        }
    }
    .title {
        height: 50px;
        display: flex;
        align-items: center;
        font-weight: 700;
        font-size: 14px;
    }
}
</style>
