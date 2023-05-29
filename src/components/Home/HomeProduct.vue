<!--
 * @Authon: kermit
 * @Date: 2023-05-29 22:22:14
 * @Description: 
-->
<template>
  <section class="vapeContent">

    <section class="itemContent">
      <el-row :gutter="20">
        <el-col
          :lg="8"
          :xs="12"
          v-for="(itemData, index) in productList"
          :key="itemData.id"
          v-show="index < 3"
        >
          <div class="item">
            <img
              :src="'https://file.fomille.site/1462689759759904769/1595987569691197441.webp!full'"
              class="itemImg"
              alt=""
            />
            <div class="itemTitle">{{itemData.title}}</div>
          </div>
        </el-col>
      </el-row>
    </section>
  </section>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/product'
const store = useProductStore()
const productList = store.productList
</script>

<style lang="scss" scoped>
.vapeContent {
  width: 100%;

  .itemContent {
    display: flex;
    .item {
      margin-top: 20px;
      width: 100%;
      height: 100%;
      position: relative;
      transition: all .3s;
      .itemImg {
        width: 100%;
        height: 100%;
        // position: absolute;
        // top: 0;
        // left: 0;
      }
      .itemTitle{
        height: 60px;
        line-height: 60px;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.28);
        color: #fff;

      }
      &:hover{
        transform: translateY(-4px);
        box-shadow: 0 4px 20px 1px rgba(5,4,4,.14); 
      }
    }
  }
}

@media screen and (max-width:768px) {
.vapeContent{
    .title{
        font-size: 22px;
        padding: 15px;
    }
}
    
}
</style>
