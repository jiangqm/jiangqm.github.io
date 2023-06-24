<!--
 * @Authon: kermit
 * @Date: 2023-06-01 21:21:12
 * @Description: 
-->
<template>
  <section class="itemContainer">
    <img class="itemImg" :src="data.imageUrl" :alt="data.title" srcset="" />
    <div class="itemInfo">
      <div class="itemTitle">
        {{ data.title }}
      </div>
      <div class="textInfo">
        <div class="textItem" v-for="fieldItem in parameters" :key="fieldItem.field">
          <div class="textLabel">{{ fieldItem.label }}:</div>
          <div class="textValue">{{ data[fieldItem.field] }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import redImg from '@/assets/image/product/red.png'

import { useProductStore } from '@/stores/product'
import { computed } from 'vue';
const store = useProductStore()
const parameters = store.parameters


const props = defineProps({
    data:Object
})
const data =computed(()=>props.data) 
</script>

<style lang="scss" scoped>
.itemContainer {
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  background-color: #f0f0f0;
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  transition: box-shadow 0.3s cubic-bezier(0.02, 0.01, 0.47, 1), transform 0.3s;
  display: flex;
  .itemImg {
    width: 180px;
    height: 180px;
  }
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 4px 20px 1px rgba(5, 4, 4, 0.14);
  }
}
.itemInfo {
  flex: 1;
  display: flex;
  flex-direction: column;
  .itemTitle {
    font-size: 16px;
    line-height: 20px;
    text-align: left;
  }
  .textInfo {
    width: 100%;
    margin-top: 16px;
  }
  .textItem {
    display: flex;
    width: 100%;
    padding: 5px 10px;

    flex: 1;
    font-size: 14px;
    line-height: 20px;
    .textLabel {
        width: 140px;
        font-weight: 600;
    }
    .textValue{
        margin-left: 20px;
    }
    &:nth-child(odd) {
      background-color: #e6e6e6;
    }
  }
}

@media screen and (max-width:768px) {
    .itemContainer{
        text-align: center;
        display: block;
    }
    .itemImg{
        margin: 0 auto;
    }
}
</style>
