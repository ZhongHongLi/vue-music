<template>
    <!-- 用户登录页面 -->
    <div class="login_container">
        <van-form v-show="isshowfrom">
            <van-field
                v-model="phone"
                name="手机号"
                label="手机号"
                placeholder="请输入手机号"
                :rules="[{ required: true, message: '请输入手机号' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="密码"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />

            <div class="btn" v-if="ishow" @click="toogle">切换验证码登录</div>
            <div style="margin: 16px;">
                <van-button
                    round
                    block
                    type="danger "
                    native-type="submit"
                    @click="submit"
                >
                    登录
                </van-button>
            </div>
        </van-form>

        <!-- 验证 -->
        <van-form v-if="isshowfrom2">
            <van-field
                v-model="phone1"
                name="手机号"
                label="手机号"
                placeholder="请输入手机号"
                :rules="[{ required: true, message: '请输入手机号' }]"
            />
            <van-field
                v-model="password1"
                type="number"
                name="验证码"
                label="验证码"
                placeholder="验证码"
                :rules="[{ required: true, message: '验证码' }]"
            />

            <button
                class="btn  top"
                v-if="ishowva"
                @click="clickvadate"
                :disabled="disabled"
            >
                {{ textValue }}
            </button>
            <div style="margin: 16px;">
                <van-button
                    round
                    block
                    type="danger "
                    native-type="submit"
                    @click="submit2"
                >
                    验证码登录
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
import { Toast, CellGroup } from "vant"
import api from "../../api/index"
import { mapActions } from "vuex"
export default {
    data() {
        return {
            phone: "",
            password: "",
            ishow: true,
            isshowfrom: true,
            isshowfrom2: false,
            ishowva: false,
            textValue: "发送验证码",
            disabled: false,
            phone1: "",
            password1: "",
            name: "",
            userid: "",
            userId: "",
        }
    },
    created() {},
    methods: {
        async submit() {
            console.log("用户点击了")
            const { data: res } = await api.getloginmethod(
                this.phone,
                this.password
            )
            // console.log(res)
            if (res.code == 200) {
                localStorage.setItem("userinfo", JSON.stringify(res))
                //用户的id
                this.userId = res.profile.userId
                localStorage.setItem('userid',this.userId)
                //获取登录用户状态
                this.loginStautsMethod()
                this.getuserAction({
                    id: this.userId,
                })
                // api.getRecommedSongFn()
                //     .then((res) => {
                //         console.log("获取成功")
                //         console.log(res)
                //     })
                //     .catch((err) => {
                //         console.log(err)
                //     })
                //
                Toast.success("登录成功")
                this.$router.push("/home")
            }

            if (res.code == 502) {
                const resm = res.message
                Toast({
                    message: resm,
                })
            }
        },
        toogle() {
            this.ishow = false
            this.isshowfrom = false
            this.isshowfrom2 = true
            this.ishowva = true
        },
        //获取验证码的逻辑
        async clickvadate() {
            clearInterval(timer)
            console.log("我点击了发送验证码按钮")
            if (this.phone1 == "") {
                Toast({
                    message: "请输入手机号",
                })
                return
            }
            var phone1 = this.phone1
            console.log(phone1)
            const { data: res } = await api.vadatemehod(phone1)

            if (res.code == 200) {
                Toast({
                    message: "验证码发送成功",
                })
            }

            let time = 60
            let timer = setInterval(() => {
                if (time == 0) {
                    clearInterval(timer)
                    this.textValue = "发送验证码"
                    this.disabled = false
                } else {
                    this.disabled = true
                    this.textValue = "还剩" + time + "s"
                    time--
                }
            }, 1000)
        },
        async submit2() {
            var phones = this.phone1
            var captcha = this.password1
            if (this.phone1 !== "" && this.password1 !== "") {
                const { data: res } = await api.sceodvatatemethod(
                    phones,
                    captcha
                )
                if (res.code == 200) {
                    Toast({
                        message: "登录成功",
                    })
                    this.$router.push("/home")
                }
            } else {
                Toast({
                    message: "输入不能为空",
                })
            }
        },
        //登录状态的方法
        async loginStautsMethod() {
            const res = await api.logoinStatusFn()
            console.log(res)
            if (res) {
                //存用户的id
                // let userId = res.data.profile.userId
                if (res.data.code === 200) {
                    //存储用户信息
                    let accountInfo = res.data.profile
                    // 成功登陆
                    // 修改状态为 1
                    this.$store.commit("LOGIN_STATE", 1)
                    // Vuex在用户刷新的时候loginState会回到默认值false
                    // 所以我们需要用到HTML5储存
                    // 我们设置一个名为loginState
                    localStorage.setItem("loginState", 1)
                    // 存入用户头像 昵称
                    localStorage.setItem("avatarUrl", accountInfo.avatarUrl)
                    localStorage.setItem("nickname", accountInfo.nickname)
                }
            }
        },
        ...mapActions(["getuserAction"]),
    },
}
</script>

<style lang="less" scoped>
.login_container {
    position: relative;
    height: 100vh;
}

.btn {
    width: 2.4rem;
    height: 0.8rem;
    background: red;
    color: #fff;
    line-height: 0.8rem;
    font-size: 0.28rem;
    border-radius: 0.2rem;
    text-align: center;
    position: absolute;
    right: 16px;
    top: 52px;
}

.top {
    top: 5px;
}
</style>
