<template>
  <div>
    <div class="cantactItem">
      <el-icon class="iconItem"><Iphone /></el-icon>{{ footerData.contact.data.phone }}
    </div>
    <div class="cantactItem">
      <el-icon class="iconItem"><Message /></el-icon>
      <a class="link" :href="`mailto:${footerData.contact.data.email}`">{{
        footerData.contact.data.email
      }}</a>
    </div>
    <div class="cantactItem">
      <el-icon class="iconItem"><Location /></el-icon>{{ footerData.contact.data.address }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useConstantStore } from '@/stores/constant'

const store = useConstantStore()
const footerData = store.footerData
</script>

<style lang="scss" scoped>
.cantactItem {
  margin-top: 10px;
  vertical-align: middle;
  display: flex;
  align-items: center;
  &:first-child {
    margin-top: 0;
  }
}
.link {
  color: #333;
  text-decoration: none;
  &:hover {
    color: rgba(250, 194, 7, 1);
  }
}
.iconItem {
  width: 20px;
  font-size: 18px;
  margin-right: 10px;
}
</style>
