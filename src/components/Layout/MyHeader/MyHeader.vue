<template>
  <section class="container headerContent">
    <div class="mainContent">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <div v-for="menuItem in menuData" :key="menuItem.url">
          <template v-if="!menuItem.children">
            <el-menu-item :index="menuItem.url">{{ menuItem.name }}</el-menu-item>
          </template>
          <template v-else>
            <el-sub-menu :index="menuItem.url">
              <template #title>{{ menuItem.name }}</template>
              <el-menu-item
                v-for="menuSubItem in menuItem.children"
                :index="menuSubItem.url"
                :key="menuSubItem.name"
                >{{ menuSubItem.name }}</el-menu-item
              >
            </el-sub-menu>
          </template>
        </div>
      </el-menu>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useConstantStore } from '@/stores/constant'
import { ref } from 'vue'
const store = useConstantStore()
const menuData = store.menuData
const activeIndex = ref('')
</script>

<style lang="scss" scoped>
.headerContent {
  width: 100%;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.9);
  ::v-deep {
    .el-menu {
      background-color: transparent;
      color: #fff;
      .el-sub-menu__title,
      .el-menu-item {
        color: #fff;
      }
    }
    .el-sub-menu__title:hover {
      background-color: transparent;
    }
    .el-menu--horizontal {
      border-bottom: none;
    }
    .el-menu--horizontal > .el-sub-menu .el-sub-menu__title:hover {
      background-color: transparent;
    }
    .el-menu--horizontal > .el-menu-item.is-active {
      border: none;
      color: #fff !important;
    }
    .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
    .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
      border: none;
      color: #fff;
    }

    .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
    .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
      background-color: transparent;
    }
  }
}
</style>
