<!--
 * @Author: jiangqm
 * @Date: 2023-05-29 18:55:49
 * @Description: 
-->
<template>
  <section class="mobileHeader">
    <RouterLink to="/"> <img @click="closeDrawer" class="logo" :src="store.logoSrc" alt="logo" /></RouterLink>

    <el-icon class="moreIcon" @click="openDrawer"><Operation /></el-icon>
  </section>
  <el-drawer size="100%" v-model="drawer" title="I am the title" :with-header="false">
    <section class="mobileDrawer">
      <section class="mobileHeader">
        <RouterLink to="/"> <img class="logo" :src="store.logoSrc" alt="logo" /></RouterLink>

        <el-icon class="moreIcon" @click="closeDrawer"><CloseBold /></el-icon>
      </section>

      <div class="menuList">
        <div v-for="menuItem in menuData" :key="menuItem.name" @click="onMenuItemClick(menuItem)">
          <div class="menuItem">
            <div>{{ menuItem.name }}</div>
            <div>
              <el-icon
                :class="`arrowIcon ${extendArray[menuItem.name] ? 'rotateIcon' : ''}`"
                v-if="menuItem.children?.length"
                ><ArrowDownBold
              /></el-icon>
            </div>
          </div>
          <div
            v-show="extendArray[menuItem.name]"
            v-for="menuSubItem in menuItem.children"
            :key="menuSubItem.name"
          >
            <div class="menuItem menuSubItem" @click.stop="onMenuItemClick(menuSubItem)">
              <div>{{ menuSubItem.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </el-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useConstantStore } from '@/stores/constant'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useConstantStore()
const menuData = store.menuData

const extendArray = ref<any>({})

const drawer = ref(false)

const openDrawer = () => {
  drawer.value = true
}

const closeDrawer = () => {
  drawer.value = false
}
const onMenuItemClick = (menuItem: { name: string; url: string; children?: any[] }) => {
  if (menuItem.children?.length) {
    const oldFlag = extendArray.value[menuItem.name]
    console.log(oldFlag)

    extendArray.value = { ...extendArray.value, [menuItem.name]: !oldFlag }
  } else {
    closeDrawer()
    router.push(menuItem.url)
  }
}

defineExpose({
  openDrawer
})
</script>

<style lang="scss" scoped>
.mobileHeader {
  width: 100%;
  padding: 0 10px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $bgc;
  height: 50px;

  .logo {
    height: 30px;
  }
  .moreIcon {
    color: #fff;
    font-size: 26px;
  }
}

.mobileDrawer {

  .drawerHeader {
    display: flex;
    justify-content: space-between;
  }
  .menuList {
    font-size: 14px;
    padding:0 20px 20px;
    .menuItem {
      display: flex;
      justify-content: space-between;
      line-height: 50px;
      border-bottom: 1px solid #ddd;
      .arrowIcon {
        transition: all 0.3s;
      }
      .rotateIcon {
        transform: rotate(180deg);
      }
    }
    .menuSubItem {
      margin-left: 20px;
    }
  }
}

</style>
