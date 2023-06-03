<template>
  <section class="mediaContainer">
    <div class="mediaList">
      <a
        class="mediaItem"
        v-for="mediaItem in LinkList"
        :key="mediaItem.name"
        :href="mediaItem.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img :src="mediaItem.image" :alt="mediaItem.name" :width="30" :height="30" />
      </a>
    </div>
    <div class="footerText">
        Copyright © ALD Group Limited All rights reserved.
    </div>
  </section>
</template>

<script setup lang="ts">
import { useConstantStore } from '@/stores/constant'

const store = useConstantStore()
const LinkList = store.linkList
</script>

<style lang="scss" scoped>
.mediaContainer {
   padding: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000;

  .mediaList {
    display: flex;

    .mediaItem {
      margin-left: 10px;
    }
  }
  .footerText{
    margin-top: 20px;
    color: #bababa;
    font-size: 18px;
  }
}
</style>
