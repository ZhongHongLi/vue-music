<template>
    <div>
        <!-- <h3>精彩评论</h3> -->
        <!-- <div class="comment-title"  v-for="(item,index) in commentdata" :key="index">
         <div class="leftimg">
             <img :src="item.user.avatarUrl" alt="">
         </div>
  
         <div class="right-box"  >
            <div class="divs ">
                <span>{{item.user.nickname}}</span>
                <div><span>1</span><span>2</span></div>
            </div>
            <div class="">01月23日</div>
            <div class="content_s">{{item.content}}</div>
         </div>
     </div> -->

        <div
            class="comment-warper"
            v-for="(item, index) in commentdata"
            :key="index"
        >
            <div class="left-img">
                <img :src="item.user.avatarUrl" alt="" />
            </div>

            <!-- 右边 -->
            <div class="right-box">
                <div
                    class="top_Box"
                    style="font-size:14px;color:#999;line-heigt:20px"
                >
                    <div class="top_conetboxs">
                        <div class="lineh">{{ item.user.nickname }}</div>
                        <div>
                            <span
                                style="margin-right:3px;font-size:13px;vertical-align: top;"
                                v-show="item.likedCount > 0"
                                >{{ item.likedCount }}</span
                            >
                            <van-icon
                                name="good-job-o"
                                @click="clickItem(item.commentId)"
                            />
                        </div>
                    </div>
                    <div class="lineh">04月23日</div>
                </div>

                <!-- neirot -->
                <div class="content_s" style="font-size:14px;">
                    {{ item.content }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from "@/api/index"
import { Toast } from 'vant';
export default {
    props: {
        commentdata: {
            type: Array,
        },
    },
    data() {
        return {
            id: "",
            cid: "",
            t: 1,
            type: null,
        }
    },
    created() {
        console.log(this.$route.params)
        // this.clicklike()
    },
    methods: {
        //点赞
        clicklike(id,cid,t,type) {
            api.sendCommentLikeFn(id,cid,t,type).then((res) => {
            })
        },
        clickItem(cid) {
            // //评论的id
            this.cid = cid
            //歌曲id
            this.id = this.$route.params.ids
            //类型
            this.type = this.$route.params.sonlistId
            // if(this.cid)
            if(localStorage.getItem('loginState')!==0){
                // id,cid,t,type
               if(this.cid&&this.id&&this.type!==''){
                // this.clicklike(this.id,this.cid,this.t,this.type)
               }
            }else{
              Toast('用户还没登录');
              this.$router.push('/logoginbtn')
            }
        },
    },
}
</script>

<style lang="less" scoped>
.comment-warper {
    display: flex;
    padding: 0 10px;
    height: auto;
    margin: 10px;
    padding: 0 10px 30px 10px;
    border-bottom: 1px solid #ccc;
}

.left-img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
}

.right-box {
    width: 100%;
}

.lineh {
    font-size: 12px;
}

.content_s {
    line-height: 1.5;
}

.top_conetboxs {
    display: flex;
    justify-content: space-between;
}
</style>
