<template>
    <div class="artist-waper">
        <div
            class="artilst-list"
            v-for="(item, index) in allArtistList"
            :key="index"
        >
            <div>
                <img :src="item.picUrl" alt="" />
            </div>
            <div class="right-box">
                <p>{{ item.name }}</p>
                <div class="guanzhu">+ 关注</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        allArtistList: {
            type: Array,
        },
    },
    data() {
        return {}
    },
    created() {},
    methods: {},
}
</script>

<style lang="less" scoped>
.artist-waper {
    margin: 0 10px;
    .artilst-list {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        align-items: center;
        padding: 10px 0;
        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 10px;
        }
        .right-box {
            display: flex;
            font-size: 0.3rem;
            flex: 1;
            justify-content: space-between;
            align-items: center;
            .guanzhu {
                color: red;
                border: 1px solid red;
                padding: 8px 15px;
                border-radius: 15px;
            }
        }
    }
}
</style>
