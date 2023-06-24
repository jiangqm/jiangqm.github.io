<!--
 * @Authon: kermit
 * @Date: 2023-05-19 14:32:34
 * @Description: 
-->
<template>
  <el-dialog
    :show-close="false"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :title="null"
    :width="isMobile?'90%':'450px'"
    :top="'100px'"

    class="dialogContent"
    v-model="dialogVisible"
    draggable
  >
    <section class="content">
      <div class="title">AGE VERIFICATION</div>
 
      <div class="tips">
        To use the Evatar.AKvape website you must be aged 21 years or over. Please verify your age
        before entering the site.
      </div>

      <section class="btnGroup">
        <div class="btnItem">Under 21</div>
        <div class="btnItem actvieBtn" @click="onAge21">21+(Enter)</div>
      </section>
    </section>
  </el-dialog>
</template>

<script setup lang="ts">
import { onMounted ,} from 'vue'
import { ref } from 'vue'
import useWinSize from '@/hooks/useWinSize'

const {isMobile}=useWinSize()

const dialogVisible = ref(false)

const onAge21 = () => {
  dialogVisible.value = false
  localStorage.setItem('initDialogFlag', '1')
}



onMounted(() => {
  const is21 = localStorage.getItem('initDialogFlag')
  if (!is21) {
    dialogVisible.value = true
  }
})
</script>

<style lang="scss" scoped>
$btnBgc: rgba(250, 194, 7, 1);
.dialogContent {
  max-width: 90% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  user-select: none;
  ::v-deep {
    .el-dialog__header {
      height: 0;
      padding: 0;
      display: none;
    }
  }
  .content {
    padding: 30px;
  }

  .title {
    font-size: 36px;
    color: #333;
    text-align: center;
  }
  .tips {
    font-size: 12px;
    margin-top: 30px;
    color: rgba(96, 98, 102, 1);
  }

  .btnGroup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    .btnItem {
      user-select: none;
      max-width: 200px;
      padding: 10px 40px;
      width: 100%;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-top: 20px;
      text-align: center;
      cursor: pointer;
      position: relative;
      transition: all 0.3s;
      &:hover {
        background-color: $btnBgc;
        color: #fff;
        border-color: $btnBgc;
      }
      &:hover::after {
        width: 100%;
      }
      &::after {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -2;
        width: 0;
        height: 100%;
        background: #007bff;
        content: '';
        transition: all 0.25s;
      }
    }

    .actvieBtn {
      color: #333;
      background-color: $btnBgc;
    }
  }
}

@media screen and (max-width:768px) {
  .dialogContent{
    .content{
      padding: 15px;
    }
    .title{
      font-size: 24px;
    }
    
  }
}
</style>
