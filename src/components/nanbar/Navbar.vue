<template>
    <div class="nav-wrapper">
        <van-popup
            v-model="show"
            position="left"
            :style="{ height: '100%', width: '80%' }"
        >
            <div class="loging_contetop">
                <p>登陆网易云音乐</p>
                <p>手机电脑多端同步，尽享海量高品质音乐</p>
                <div class="login_box" @click="loginrouter">
                    立即登录
                </div>
            </div>
        </van-popup>
        <nav class="nav-box" >
            <div class="left-icon">
                <span :class="iconfontdata[0].className"></span>
            </div>
            <!-- <input type="text" class="input-bg"  @click="seachrbtn"  :placeholder="input"> -->
            <van-search
                class="input-bg"
                :placeholder="input"
                @click="seachrbtn"
                background="#4fc08d"
            />
            <div class="right-icon">
                <span :class="iconfontdata[1].className"></span>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    props: {
        iconfontdata: {
            type: Array,
        },
    },
    data() {
        return {
            show: false,
            input: localStorage.getItem("defalut"),
        }
    },
    created() {},
    methods: {
        showPopup() {
            this.show = true
        },
        seachrbtn() {
            this.$router.push("/search")
        },
        loginrouter() {
            this.$router.push("/logoin")
        },
    },
}
</script>

<style lang="less" scoped>
.van-cell__value--alone {
    text-align: center;
}
.van-cell {
    padding: 0;
}
.van-icon-wap-nav {
    height: 1rem;
    line-height: 1rem;
    font-size: 0.6rem;
}
.van-icon-search {
    height: 1rem;
    line-height: 1rem;
    font-size: 0.6rem;
}

.nav-wrapper {
    padding: 0px 10px;
    height: 40px;
    box-sizing: border-box;
    overflow: hidden;
    margin-bottom: 10px;
    .van-popup {
        .loging_contetop {
            text-align: center;
            background-color: rgba(204, 204, 204, 0.3);
            overflow: hidden;
            padding: 0.6rem 0.23rem 0.9rem;
            > p {
                font-size: 12px;
                color: rgba(0, 0, 0, 0.4);
                margin-top: 0.3rem;
            }
            .login_box {
                border: 1px solid rgba(0, 0, 0, 0.4);
                padding: 0.2rem 0.5rem;
                font-size: 0.2rem;
                color: rgba(0, 0, 0, 0.4);
                border-radius: 0.5rem;
                width: 2.3rem;
                margin: 0.3rem auto;
            }
        }
    }
    .nav-box {
        width: 100%;
        display: flex;
        height: 0.8rem;
        line-height: 0.8rem;
        padding: 0.3rem 0.15rem 0 0.15rem;
        position: -webkit-sticky;
        position: sticky;
        top: 0; 
        z-index: 2;
    }
}

.input-bg {
    border-radius: 20px;
    flex: 1 !important;
}

.left-icon {
    margin-right: 10px;
    font-size: 0.5rem;
}

.right-icon {
    margin-left: 10px;
    font-size: 0.5rem;
}

/deep/ .van-search {
    background: #f7f8fa !important;
}

input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: salmon;
    /* placeholder字体大小  */
    font-size: 12px;
    /* placeholder位置  */
    text-align: center;
}
</style>
