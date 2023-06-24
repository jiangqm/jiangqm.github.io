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
import { RouterView, useRouter,useRoute, onBeforeRouteUpdate } from 'vue-router'
import MyHeader from './components/Layout/MyHeader/MyHeader.vue'
import MyFooter from './components/Layout/MyFooter/MyFooter.vue'
import InitDialog from './components/InitDialog/InitDialog.vue'
import useGlobalEvent from '@/hooks/useGlobalEvent'
import { onMounted } from 'vue'
import { useConstantStore } from '@/stores/constant'
import { watch } from 'vue'

const store = useConstantStore()
const whatappLinkUrl = store.whatappLinkUrl
useGlobalEvent()
onMounted(() => {
  console.log('app onmounted')
})
const router = useRouter();
const route = useRoute()
const toContact =()=>{
  window.open(whatappLinkUrl)
  // router.push('/contactUs')
}

watch(route,()=>{
  window.scrollTo({top:0,behavior:'smooth'})
},{immediate:true})

</script>

<template>
  <section>
    <MyHeader />
    <InitDialog />
    <RouterView />
    <MyFooter />
    <div  class="edit shake" title="Contact me" @click="toContact">
      <el-icon class="fz18"><Comment /></el-icon>
    </div>
    <el-backtop class="backtop" :right="20" :bottom="20" />
  </section>
</template>

<style scoped>
.fz18{
  font-size: 18px;
}
.backtop {
  width: 45px;
  height: 45px;
  font-size: 16px;
  box-shadow: 0 2px 16px #00000019;
}
.edit {
  position: fixed;
  right: 20px;
  bottom: 80px;
  width: 45px;
  height: 45px;
  background-color: #fabd07;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(239, 243, 8, 0.098);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  z-index: 999;
  font-size: 14px;
  cursor: pointer;
}

@keyframes move-up-and-down {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}
.shake {
    animation: move-up-and-down 2s linear   infinite;
}

</style>
