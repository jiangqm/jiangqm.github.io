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
    <div class="mt60">
      <div class="titleContent">
        <h3 class="title">Vape Products</h3>
        <div class="line"></div>
      </div>

      <div class="mt20"><ItemSwipe /></div>
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
</style>
