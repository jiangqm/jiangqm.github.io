<!--
 * @Authon: kermit
 * @Date: 2023-05-22 20:35:29
 * @Description: 
-->
<template>
  <section class="container">
    <img class="img" :src="props.imgSrc" v-if="props.imgSrc" alt="" />
    <section class="center">
      <section class="mainContent">
        <div>
          <div class="content">
            <h3 class="title">{{ props.title }}</h3>
            <div>
              <RouterLink class="link" to="/">Home</RouterLink>
              <span class="line">/</span>
              <span>{{ props.linkLabel }}</span>
            </div>
          </div>
        </div>
      </section>
    </section>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  imgSrc: String,
  linkLabel: String
})
</script>

<style lang="scss" scoped>
.container {
  background-color: rgb(248, 248, 248);
  overflow: hidden;
}
.center {
  display: flex;
  justify-content: center;
}

.img {
  object-fit: cover;
  width: 100%;
  height: auto;
}
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 104px;

  .title {
    font-size: 24px;
  }
  .line {
    margin: 0 10px;
  }
}

@media screen and (max-width: 768px) {
    
    .content{
        padding: 0 15px;
        font-size: 14px;
        height: 60px;
        .title{
        font-size: 18px;
    }
    }
}
</style>
