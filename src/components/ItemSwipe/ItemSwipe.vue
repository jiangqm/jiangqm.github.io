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
      :slides-per-view="isMobile ? 1 : 4"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="itemData in productList" :key="itemData.id">
        <div class="itemContent">
          <img class="itemImg" :src="itemData.imageUrl" :alt="itemData.title" />
       
          <div class="parametersList">
            <div class="itemTitle">{{ itemData.title }}</div>
            <section v-if="!isMobile">
              <div class="itemSubTitle mt20">Product Details</div>
            <div class="parametersItem" v-for="parametersItem in parameters" :key="parametersItem.field">
             <span> {{ parametersItem.label }}:</span> <span>{{ itemData[parametersItem.field] }}</span>
            </div>
            </section>
          
          </div>
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
import { is } from '@babel/types'

const store = useProductStore()

const productList = store.productList
const { isMobile } = useWinSize()
const modules = ref([Navigation, Pagination, Scrollbar, A11y])
const parameters = [
  { label: 'E-liquid Capacity', field: 'volume' },
  { label: 'Battery Capacity', field: 'battery' },
  { label: 'Resistance', field: 'resistance' },
  { label: 'Charging Port', field: 'chargingPort:' },
  { label: 'weight', field: 'weight' }
]
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
    color: #fff;
    text-align: left;
.itemTitle{
  font-weight: 600;
  font-size: 16px;
}
    .itemImg {
      width: auto;
      height: 250px;
      height: width;
    }
  }
  .itemSubTitle{
  font-weight: 600;
  font-size: 14px;
}
  .parametersList{
    width: 100%;
    padding: 5px 20px;
    
    .parametersItem{
      text-align: left;
      font-size: 14px;
      line-height: 20px;
      color: #f0f0f0;
    }
  }
}

@media screen and (max-width: 768px) {
  .mySwipeContainer {
    height: 350px;
  }
}
</style>
