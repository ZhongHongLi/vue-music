<template>
 <div class="title-warper">
     <div class="left-tit">电台推荐</div>
     <div class="right-tit">换一换</div>
 </div>
</template>

<script>
export default {
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
.title-warper{
    display: flex;
    justify-content: space-around;
    padding: 0 10px;
    justify-content: space-between;
    font-size: 0.4rem;
    line-height: 2.5;
    align-items: center;
    margin-bottom: 10px;
    .left-tit{
        font-weight: 600;
    }
    .right-tit{
        font-size: 0.3rem !important;
        border: 1px solid #ccc;
        padding: 0 20px;
        border-radius: 15px;
    }
}
</style>
