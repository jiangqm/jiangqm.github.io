<!--
 * @Authon: kermit
 * @Date: 2023-06-19 22:13:03
 * @Description: 
-->
<template>
  <section class="mt20 mb20">
    <HomeTitle title="Vape Products List" />
    <div class="mt20 pl20 pr20">
      <el-row gutter="20">
        <el-col class="mt20" :lg="12" :xs="24" :sm="12" v-for="data in productList" :key="data.id">
          <ItemRecord :data="data"
        /></el-col>
      </el-row>
    </div>
  </section>
</template>

<script setup lang="ts">
import ItemRecord from '@/components/Home/ItemRecord.vue'
import { useProductStore } from '@/stores/product'
const store = useProductStore()
const productList = store.productList
</script>

<style scoped></style>
