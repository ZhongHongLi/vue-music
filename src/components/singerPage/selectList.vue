<template>
    <div class="select-waper">
        <ul class="top-ui">
            <li
                v-for="item in firstList"
                :key="item.id"
                :class="{ active: item.id === _firstId }"
                @click="clickselect(item.id)"
            >
                {{ item.text }}
            </li>
        </ul>

        <ul class="botton-ui">
            <li
                v-for="item in secondList"
                :key="item.id"
                @click="clicksecetsend(item.id)"
                :class="{ active: item.id === _sendId }"
            >
                {{ item.text }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        firstList: {
            type: Array,
        },
        secondList: {
            type: Array,
        },
        firstId: {
            type: String,
        },
        secondId: {
            type: String,
        },
    },
    data() {
        return {}
    },
    computed: {
        /**
         * 定义子组件可以进行获取和修改的值
         */
        _firstId: {
            get() {
                return this.firstId
            },
            /**
             * 通过提出事件父组件进行更新，将更新后的数据返回给子组件
             */
            set(val) {
                this.$emit("update_firstID", val)
            },
        },
        _sendId: {
            get() {
                return this.secondId
            },
            set(val) {
                this.$emit("upadte_secondID", val)
            },
        },
    },
    created() {},
    methods: {
        clickselect(id) {
            this._firstId = id
            console.log(this._firstId)
        },
        clicksecetsend(id) {
            this._sendId = id
        },
    },
}
</script>

<style lang="less" scoped>
.select-waper {
    margin: 10px 10px;
    .top-ui {
        display: flex;
        font-size: 0.4rem;
        li {
            margin-right: 10px;
        }
    }
    .botton-ui {
        display: flex;
        font-size: 0.4rem;
        margin: 10px 0;
        li {
            margin-right: 10px;
        }
    }

    .active {
        color: #dd001b;
    }
}
</style>
