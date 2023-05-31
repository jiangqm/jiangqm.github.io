<!--
 * @Authon: kermit
 * @Date: 2023-05-19 15:26:30
 * @Description: 
-->
<template>
  <section class="container footerContent">
    <div class="mainContent">
      <!-- MENU -->
      <section class="itemContent">
        <h3 class="itemTitle">
          {{ footerData.menu.name }}
        </h3>
        <ul class="menuData">
          <li class="menuItem" v-for="menuItem in footerData.menu.data" :key="menuItem.name">
            <RouterLink class="routerLink link" :to="menuItem.url">{{ menuItem.name }}</RouterLink>
          </li>
        </ul>
      </section>
      <!-- 商品 -->
      <section class="itemContent">
        <h3 class="itemTitle">
          {{ footerData.product.name }}
        </h3>
        <ul class="menuData">
          <li
            class="menuItem"
            v-for="productMenuItem in footerData.product.data"
            :key="productMenuItem.name"
          >
            <RouterLink class="routerLink link" :to="productMenuItem.url">{{
              productMenuItem.name
            }}</RouterLink>
          </li>
        </ul>
      </section>
      <!-- 联系方式 -->
      <section class="itemContent">
        <h3 class="itemTitle">
          {{ footerData.contact.name }}
        </h3>
        <div>
        
          <div class="cantactItem"><el-icon class="iconItem"><Iphone /></el-icon>{{ footerData.contact.data.phone }}</div>
          <div class="cantactItem"><el-icon class="iconItem"><Message /></el-icon>
        <a class="link" :href="`mailto:${ footerData.contact.data.email}`">{{ footerData.contact.data.email }}</a>
        </div>
          <div class="cantactItem"><el-icon class="iconItem"><Location /></el-icon>{{ footerData.contact.data.address }}</div>
        </div>
      </section>

      <!-- 警告 -->
      <section class="itemContent">
        <h3 class="itemTitle">
          {{ footerData.warning.name }}
        </h3>
        <div>
          {{ footerData.warning.data }}
        </div>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useConstantStore } from '@/stores/constant'

const store = useConstantStore()
const footerData = store.footerData
</script>

<style lang="scss" scoped>
$color: #c4c4c4;
.footerContent {
  display: flex;
  justify-content: center;
  padding: 60px 0;
  color: $color;
  .mainContent {
    display: flex;
    justify-content: space-between;
    .itemContent {
      max-width: 30%;
      margin: 0 20px;
      &:first-child{
        margin-left: 0;
      }
    }
  }
  .itemTitle {
    margin-bottom: 20px;
    border-color: $color;
  }
}
.menuData {
  .menuItem {
    list-style: none;
    line-height: 1.8    ;
    color: #333;

  }
}

.link {
      color: $color;
      text-decoration: none;
      &:hover {
        color: rgba(250, 194, 7, 1);
      }
    }

.cantactItem{
    margin-top:10px;
    vertical-align: middle;
    display: flex;
    align-items: center;
    &:first-child{
        margin-top: 0;
    }
}

.iconItem{
    
    width: 20px;
    font-size: 18px;
    margin-right: 10px;
}

@media screen and (max-width:600px) {
  .footerContent{
    display: block;
    padding:    0;
    background-color: #0d0d0e;
    .mainContent{
    display: block;
    .itemContent{
      max-width: 100%;
      width: 100%;
      border-bottom: 1px solid #ccc;
     padding: 20px;
     margin: 0;
      overflow: hidden;
    }
  }
  }

}
</style>
