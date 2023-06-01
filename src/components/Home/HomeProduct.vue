<!--
 * @Authon: kermit
 * @Date: 2023-05-29 22:22:14
 * @Description: 
-->
<template>
  <section class="vapeContent">

    <section class="itemContent">
      <el-row class="w100 " :gutter="20">
        <el-col
          :lg="8"
          :xs="24"
          :sm="12"
          class='itemCol'
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
            <div class="itemTitle">{{`Pod Vape ${index}`}}</div>
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
    width: 100%;
    .itemCol{
      margin-top: 20px;
    }
    .item {
     
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
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        white-space: nowrap;

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
    .itemContent{
      ::v-deep(.el-row){
        margin: 0 !important;
      }
      .itemCol{
        margin-top: 0;
        padding: 0 !important;
      }
      .item{
        width: auto;
        height: auto;
        
        &:hover{
        transform: translateY(0);
      }
      }
    }
    .itemTitle{
      position: relative !important;
    }
}
    
}
</style>
