<template>
  <section class="mySwipeContainer">
    <swiper
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >

    <swiper-slide v-for="i in 7" :key="i">
        <img src="https://file.fomille.site/1462689759759904769/1641372490676748290.webp" alt="">
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
import { ref, onMounted } from 'vue'
const modules = ref([Navigation, Pagination, Scrollbar, A11y])
const onSwiper = (swiper: any) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}
onMounted(() => {})
</script>

<style scoped>
.mySwipeContainer {
  width: 100%;
  height: 500px;
}
</style>
