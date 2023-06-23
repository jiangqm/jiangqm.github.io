<!--
 * @Authon: kermit
 * @Date: 2023-05-29 21:29:21
 * @Description: 
-->
<template>
  <div class="about">
    <div class="aboutHeader">
      <img
        class="headerImage"
        :src="Bgc"
        alt=""
        srcset=""
      />
    </div>

    <div class="main">
      <div class="box">
        With the increasing demand for healthy alternatives to smoking, electronic cigarettes have
        become a popular choice for smokers worldwide. As one of the leading manufacturers of
        electronic cigarette products, the Xpuff brand is committed to providing high-quality,
        innovative, and safe vaping solutions to smokers.
      </div>
      <div class="subBox mt60">
        <h2 class="boxTitle">Company Overview</h2>
        <div class="subBoxContent">
          <div class="text">
            Founded in 2012, Xpuff is a global company headquartered in Shenzhen, China, with
            operations in over 50 countries worldwide. The company has a team of over 500 employees,
            including engineers, designers, and sales professionals, working together to develop
            cutting-edge electronic cigarette products.
        <div class="mt20">
          Xpuff has a dedicated research and development team that works tirelessly to introduce new and innovative electronic cigarette products to the market. The team is constantly exploring new technologies, materials, and design concepts to improve the user experience and provide better vaping solutions to smokers
      
        </div>
          </div>
          <img :src="Image4" alt="" srcset="" />
        </div>
      </div>
 
      <div class="subBox mt60">
        <h2 class="boxTitle">Factory</h2>
        <div class="mt20">
      
          Xpuff's factory is located in Dongguan, China, covering an area of over 20,000 square meters. The facility is equipped with state-of-the-art production equipment and advanced technologies that enable the production of high-quality electronic cigarette products. The factory employs strict quality control measures to ensure that all products meet or exceed industry standards.

        </div>
       <div class="rowImageContent ">
        <img class="rowImage" :src="Image2" alt="image">
        <img class="rowImage" :src="Image1" alt="image">
        <img class="rowImage" :src="Image3" alt="image">
       </div>
      </div>

       <div class="box mt30">

        <div>
          Xpuff is dedicated to providing exceptional customer support to its customers. The company has a team of highly trained professionals who are available 24/7 to answer any questions or concerns that customers may have. Additionally, Xpuff offers a comprehensive warranty program on all products, ensuring that customers can enjoy peace of mind when using their electronic cigarette products.
        </div>
       <div class="mt30">
        With the increasing demand for healthy alternatives to smoking, electronic cigarettes have
        become a popular choice for smokers worldwide. As one of the leading manufacturers of
        electronic cigarette products, the Xpuff brand is committed to providing high-quality,
        innovative, and safe vaping solutions to smokers.
       </div>
      </div>


    </div>
  </div>
</template>

<script lang="ts" setup>
import Image1 from '@/assets/image/about/1.jpg'
import Image2 from '@/assets/image/about/2.jpg'
import Image3 from '@/assets/image/about/3.jpg'
import Image4 from '@/assets/image/about/4.jpg'
import Bgc from '@/assets/image/about/bgc.jpeg'
// import MBgc from '@/assets/image/about/mBgc.jpeg'
// import useWinSize from '@/hooks/useWinSize'

// const {isMobile}=useWinSize()
</script>

<style lang="scss" scoped>
.about {
  font-size: 18px;
  line-height: 24px;
  background-color: rgb(250, 250, 250);
  text-align: center;
}
.headerImage {
  width: 100%;
  height: auto;
  object-fit: cover;
  max-height: 30vh;
}

.main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  .box {
    background-color: #fff;
    box-shadow: 0 6px 26px #71696836;
    padding: 20px;
    border-radius: 6px;
  }

  .subBoxContent {
    display: flex;
    margin-top: 20px;
    text-align: left;
    .text {
      float: left;
      margin-right: 20px;
      max-width: 400px;
      margin: 0 auto;
    }
    img {
      width: 50%;
  
    }
  }
  .boxTitle {
    font-weight: 600;
    font-size: 26px;
  }
}
.rowImageContent{
  display: flex;
  .rowImage{
  flex: 1;
  height: auto;
  width: 33%;
  height: 300px;
  object-fit: contain;
}
}


.margin{
  margin-top: 60px;
}
@media (max-width: 1024px) {
  .about {
    min-height: 100vh;
    /* display: flex; */
    /* align-items: center; */
    .main{
      .subBoxContent{
      display: block;
      text-align: center;
      img{
        width: 100%;
      }
    }
    }

  }
  .rowImageContent{
    display: block;
    .rowImage{
    width:100%;
    &:nth-child(2){
      display: none;
    }
  }
  }

}
</style>
