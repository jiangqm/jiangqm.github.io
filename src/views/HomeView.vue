<!--
 * @Authon: kermit
 * @Date: 2023-05-29 21:29:21
 * @Description: 
-->
<script setup lang="ts">
import MySwipe from '@/components/MySwipe/MySwipe.vue'
import HomeProduct from '@/components/Home/HomeProduct.vue'
import ItemSwipe from '@/components/ItemSwipe/ItemSwipe.vue'
</script>

<template>
  <main>
    <MySwipe />
    <div class="mt20">
      <div class="titleContent">
        <h3 class="title">Vape Products</h3>
        <div class="line"></div>
      </div>
      <HomeProduct />
    </div>
    <div class="itemSwipe">
      <div class="titleContent">
        <h3 class="title">Vape Products List</h3>
        <div class="line"></div>
      </div>

      <div class="mt20 "><ItemSwipe /></div>
    </div>
  </main>
</template>

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
.itemSwipe{
  margin-top: 60px;
}

@media screen and (max-width:768px) {
  .titleContent{  

    .title{
      font-size: 24px;
      padding: 10px 0;
    }
  }
  .itemSwipe{
    margin-top: 20px;
  }
}
</style>
