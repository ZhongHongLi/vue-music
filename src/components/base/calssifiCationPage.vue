<template>

 <div>
        <div class="top-title">热门分类</div>
        <ul class="ul-waper">
            <li v-for="item in hotCategory" :key="item.index">
           <div><img  :src="item.pic56x56Url" alt=""></div>
                 <span>{{item.name}}</span>
            </li>
        </ul>

         <div class="top-title">更多分类</div>
        <ul class="ul-waper">
            <li v-for="item in moreCategory" :key="item.index">
           <div><img  :src="item.pic56x56Url" alt=""></div>
                 <span>{{item.name}}</span>
            </li>
        </ul>
 </div>
</template>

<script>
export default {
props:{
 hotCategory:{
     type:Array
 },
 moreCategory:{
      type:Array
 }
},
 data() {
 return {

 }
 },
 created(){

 },
 methods: {

 }
}
</script>

<style lang="less" scoped>
.top-title{
    text-align: center;
    font-size: 0.5rem;
    padding: 15px 0;
    border-bottom: 1px solid #ccc;
}

.ul-waper{
    display: flex;
     flex-wrap: wrap;
    justify-content: space-around;
     li{
        width: 4rem;
        display: flex;
        align-items: center;
        justify-content: left;
        padding: 10px;
        box-sizing: border-box;
         img{
             width: 25px;
             height: 25px;
             text-align: left;
            margin-right: 10px;
         }
         span{
             font-size: 0.5rem;
            //  margin-left: 10px;;
            text-align: center;
         }
     }
}
</style>
