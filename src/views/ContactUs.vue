<!--
 * @Authon: kermit
 * @Date: 2023-05-22 20:27:13
 * @Description: 
-->
<template>
  <section class="contactContainer">
    <MySubHeader
      title="Contact Us"
      img-src="https://file.fomille.site/1462689759759904769/1475760242629681153.webp"
      link-label="Contact Us"
    />
    <section class="container content">
      <div class="mainContent">
        <el-row gutter="30">
          <el-col :xs="24" :sm="12">
            <el-form :model="formData" ref="formRef">
              <el-row gutter="20">
                <el-col :xs="24" :sm="12"
                  ><el-form-item
                    label=""
                    prop="name"
                    :rules="[
                      {
                        required: true,
                        message: 'Please input Name',
                        trigger: 'blur'
                      }
                    ]"
                  >
                    <el-input
                      size="large"
                      v-model="formData.name"
                      placeholder="Name *"
                    ></el-input> </el-form-item
                ></el-col>
                <el-col :xs="24" :sm="12">
                  <el-form-item label="" prop="phone">
                    <el-input
                      v-model="formData.phone"
                      size="large"
                      placeholder="Phone "
                    ></el-input> </el-form-item
                ></el-col>

                <el-col :xs="24" :sm="12">
                  <el-form-item
                    label=""
                    prop="email"
                    :rules="[
                      {
                        required: true,
                        message: 'Please input email address',
                        trigger: 'blur'
                      },
                      {
                        type: 'email'
                      }
                    ]"
                  >
                    <el-input
                      size="large"
                      v-model="formData.email"
                      placeholder="Email *"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12">
                  <el-form-item prop="country" label="">
                    <el-input
                      size="large"
                      v-model="formData.country"
                      placeholder="Country "
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-form-item prop="message" label="">
                <el-input
                  size="large"
                  type="textarea"
                  v-model="formData.message"
                  placeholder="Message"
                ></el-input>
              </el-form-item>
            </el-form>
            <el-button type="primary" size="large" :loading="loading" @click="onSubmit()" style="width: 100%"
              >Submit</el-button
            >
          </el-col>
          <el-col :xs="24" :sm="12">
            <ContactBox />
          </el-col>
        </el-row>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import MySubHeader from '@/components/Layout/MySubHeader/MySubHeader.vue'
import ContactBox from '@/components/Layout/MyFooter/ContactBox.vue'
import { ref } from 'vue';
import {sendEmail} from '@/service/contact'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'


type FormDataType = {
  name: string
  email: string
  phone?: number
  message?: string
  country?: string
}

const formRef = ref<FormInstance>()
const formData = ref<FormDataType>({
  name: '',
  email: ''
})

const loading = ref(false)
const onSubmit = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      loading.value=true
      sendEmail(formData.value).then(res=>{
       return res.json()
      }).then(result=>{
        console.log(result);
        ElMessage.success('Submit Success')
      }).finally(()=>{
        loading.value=false
      })
    }
  })
}
</script>

<style lang="scss" scoped>
.contactContainer {
  background-color: #fff;
}

.content {
  display: flex;
  justify-content: center;
  padding: 40px 10px;
}
</style>
