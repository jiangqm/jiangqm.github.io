<!--
 * @Authon: kermit
 * @Date: 2023-05-29 21:29:21
 * @Description: 
-->
<script setup lang="ts">
import MySwipe from '@/components/MySwipe/MySwipe.vue'
import HomeProduct from '@/components/Home/HomeProduct.vue'
import ItemSwipe from '@/components/ItemSwipe/ItemSwipe.vue'
import ItemRecord from '@/components/Home/ItemRecord.vue'
import HomeTitle from '@/components/Home/HomeTitle.vue'
</script>

<template>
  <main>
    <MySwipe />
    <section class="mt20">
      <HomeTitle title="Vape Products " />
      <HomeProduct />
    </section>

    <section class="itemSwipe">
      <HomeTitle title="Vape Products List" />
      <div class="mt20"><ItemSwipe /></div>
    </section>

    <section class="mt20 mb20">
      <HomeTitle title="Vape Products List" />
      <div class="mt20 pl20 pr20">
        <el-row gutter="20">
          <el-col class="mt20" :lg="12" :xs="24" :sm="12" v-for="i in 5" :key="i"> <ItemRecord /></el-col>
        </el-row>
      </div>
    </section>
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
.itemSwipe {
  margin-top: 60px;
}

@media screen and (max-width: 768px) {
  .titleContent {
    .title {
      font-size: 24px;
      padding: 10px 0;
    }
  }
  .itemSwipe {
    margin-top: 20px;
  }
}
</style>
