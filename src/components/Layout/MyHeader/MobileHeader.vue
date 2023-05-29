<!--
 * @Author: jiangqm
 * @Date: 2023-05-29 18:55:49
 * @Description: 
-->
<template>
  <section>
    <el-drawer v-model="drawer" title="I am the title" :with-header="false">
      <span>Hi there!</span>
    </el-drawer>
  </section>
</template>

<script setup lang="ts">
import { log } from 'console';
import { ref } from 'vue'

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

<style scoped></style>