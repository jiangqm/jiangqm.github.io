<!--
 * @Author: jiangqm
 * @Date: 2023-05-29 18:55:49
 * @Description: 
-->
<template>
  <section class="mobileHeader">
    <img class="logo" :src="store.logoSrc" alt="logo" >
    <el-icon class="moreIcon"><Operation /></el-icon>
 
  </section>
  <el-drawer v-model="drawer" title="I am the title" :with-header="false">
      <span>Hi there!</span>
    </el-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {useConstantStore} from '@/stores/constant'

const store = useConstantStore()

const props = defineProps({
    menuData:[]
})

const drawer = ref(false)

const openDrawer = () => {
  drawer.value = true;
  console.log(props);
  
}

defineExpose({
  openDrawer
})
</script>

<style lang="scss" scoped>
.mobileHeader{
  width: 100%;
  padding: 0 10px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo{
    height: 30px;
  }
  .moreIcon{
    color: #fff;
    font-size: 26px;
  }
}
</style>