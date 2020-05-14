<template>
<div class="base-waper">
   <baseList1  :ProgramList="ProgramList"></baseList1>
 </div>
</template>

<script>
import baseList1 from './baseList1'
export default {
 props:{
 ProgramList:{
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

 },
 components:{
     baseList1
 }
}
</script>

<style lang="less" scoped>

</style>
