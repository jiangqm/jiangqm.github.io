<!--
 * @Author: jiangqm
 * @Date: 2023-05-29 13:32:06
 * @Description: 
-->
<!--
 * @Authon: kermit
 * @Date: 2023-05-13 14:41:59
 * @Description: 
-->

<script setup lang="ts">
import { RouterView } from 'vue-router'
import MyHeader from './components/Layout/MyHeader/MyHeader.vue'
import MyFooter from './components/Layout/MyFooter/MyFooter.vue'
import InitDialog from './components/InitDialog/InitDialog.vue'
import useGlobalEvent from '@/hooks/useGlobalEvent'
import { onMounted } from 'vue'
useGlobalEvent()
onMounted(() => {
  console.log('app onmounted')
})
</script>

<template>
  <section>
    <MyHeader />
    <InitDialog />
    <RouterView />
    <MyFooter />
  </section>
</template>

<style scoped>
</style>
