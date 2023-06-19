<!--
 * @Authon: kermit
 * @Date: 2023-05-29 21:29:21
 * @Description: 
-->
<template>
  <section class="mySwipeContainer">
    <swiper
      :spaceBetween="30"
      :pagination="{
        clickable: true
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(v,i) in isMobile?MOBILE_BANNER:PC_BANNER " :key="i">
        <img :src="v" alt="banner" />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref, onMounted, computed } from 'vue'
import useWinSize from '@/hooks/useWinSize'
import {PC_BANNER,MOBILE_BANNER} from '@/assets/image/banner/index'

const modules = ref([Navigation, Pagination, Scrollbar, A11y])
const pcSrc = 'https://file.fomille.site/1462689759759904769/1641372490676748290.webp'
const mobileSrc = 'https://file.fomille.site/1462689759759904769/1641372560826482689.webp'
const { isMobile } = useWinSize()

const bannerSrcList = computed(()=>{
 return isMobile? MOBILE_BANNER:PC_BANNER
})
onMounted(() => {})
</script>

<style lang="scss" scoped>
.mySwipeContainer {
  width: 100%;
  height: auto;
}
@media screen and (max-width: 768px) {
  .mySwipeContainer {
    height: auto;
  }
}
</style>
