<!--
 * @Authon: kermit
 * @Date: 2023-06-01 21:27:17
 * @Description: 头部名称
-->
<template>
  <div class="titleContent">
    <h3 class="title">{{props.title}}</h3>
    <div class="line"></div>
  </div>
</template>

<script setup lang="ts">
const props=defineProps({
    title:String
})
</script>

<style lang="scss" scoped>
.titleContent {
  padding-bottom: 20px;
}
.title {
  padding: 20px 0;
  text-align: center;
  color: #fff;
  font-size: 36px;
}
.line {
  width: 80px;
  height: 1px;
  background-color: #fff;
  margin: 0 auto;
}

@media screen and (max-width:768px) {
    .itemContainer{
        padding-bottom: 12px;
    }
    .title{
      font-size: 22px;
    }
}
</style>
