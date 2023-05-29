<!--
 * @Authon: kermit
 * @Date: 2023-05-29 21:50:25
 * @Description: 
-->
<template>
  <section class="mySwipeContainer">
    <swiper
      :spaceBetween="30"
      :pagination="{
        clickable: true
      }"
      :slides-per-view="isMobile?2:4"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="itemData in productList" :key="itemData.id">
        <div class="itemContent">
          <img class="itemImg" :src="itemData.imageUrl" :alt="itemData.title" />

        </div>
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
import { useProductStore } from '@/stores/product'
import useWinSize from '@/hooks/useWinSize'

const store = useProductStore()

const productList = store.productList;
const {isMobile}=useWinSize()
const modules = ref([Navigation, Pagination, Scrollbar, A11y])

onMounted(() => {})
</script>

<style lang="scss" scoped>
.mySwipeContainer {
  width: 100%;
  height: 500px;
  .itemContent {
    background-color: $bgc;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .itemImg{
        width: 90%;
        height: auto;
        
    }
  }
}

@media screen and (max-width:768px) {
    .mySwipeContainer{
        height: 350px;
    }
}
</style>
