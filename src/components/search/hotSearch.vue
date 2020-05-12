<template>
  <div class="song-hotSearch">
    <p class="hot-serahtitle">热搜榜</p>
    <ul>
      <li v-for="(item,index) in hotSrachList"
          :key="index"  @click="hotclick(item.searchWord)">
        <span class="num">{{index+1}}</span>
        <span class="rightdiv">
          <div class="topsong">
            <span class="song">{{item.searchWord}}</span> <span class="song-score">{{item.score}}</span> <img :src="item.iconUrl"
                 alt="">
          </div>
          <div class="songinfo">{{item.content}}</div>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  import api from '../../api/index'
  export default {
    name: 'hotSearch',
    data() {
      return {
        hotSrachList: []
      }
    },
    created() {
      //获取搜索的数据
      this.getListhot()
    },
    methods: {
      //热搜请求
      async getListhot() {
        const { data: res } = await api.hotSearchListFn()
        if (res.code == 200) {
          this.hotSrachList = res.data
        }
      },
      //点击跳转
      hotclick(key){
        console.log(key)
         this.$router.push(`/searchsonglist/${key}`)
      }
    }
  }
</script>

<style lang="less" scoped>
  .song-hotSearch {
    margin: 1rem 0.23rem 0 0.23rem;
    .hot-serahtitle {
      font-size: 0.4rem;
      color: #333;
    }
    ul {
      font-size: 0.35rem;
      display: flex;
      flex-wrap: wrap;
      li {
        margin: 0.5rem 0;
        flex: 50%;
        display: flex;
        align-items: center;
        &:nth-of-type(1) > .num {
          color: red;
        }
        &:nth-of-type(2) > .num {
          color: red;
        }
        &:nth-of-type(3) > .num {
          color: red;
        }
         &:nth-of-type(4) > .num {
          color: red;
        }
        > .num {
          line-height: 1rem;
          font-size: 0.3rem;
        }
      }
      .rightdiv {
        margin-left: 20px;
        .topsong {
          margin-bottom: 0.2rem;
          .song-score {
            font-size: 0.2rem;
            color: #999;
          }
          img {
            height: 0.3rem;
            margin-left: 0.2rem;
          }
        
        }
         
        .songinfo {
          font-size: 0.2rem;
          color: #aaa;
        }
      }
    }
  }
</style>
