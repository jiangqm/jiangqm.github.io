/*
 * @Authon: kermit
 * @Date: 2023-05-29 21:29:21
 * @Description: 
 */
/*
 * @Authon: kermit
 * @Date: 2023-05-19 15:28:04
 * @Description:常量
 */
import { ref,  } from 'vue'
import { defineStore } from 'pinia'
import {FacebookImage,InstagramImage,TelegramImage,WhatappImage} from '@/assets/image/media'
import LogoImageWrite from '@/assets/image/logoWrite.png'
type MenuItemType = {
  name: string
  url: string
  children?: MenuItemType[]
}

export const useConstantStore = defineStore('constant', () => {
  const menuData = ref<MenuItemType[]>([
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'PRODUCTS',
      url: '/product/podvape',
      // children: [
        // {
        //   name: 'POD VAPE',
        //   url: '/product/podvape'
        // },
        // {
        //   name: 'POD VAPE2',
        //   url: '/product/podvape'
        // },
        // {
        //   name: 'POD VAPE3',
        //   url: '/product/podvape'
        // }
      // ]
    },
    {
      name: 'ABOUT US',
      url: '/about'
    },
    {
      name: 'CONTACT US',
      url: '/contactUs'
    }
  ])

  const footerData = {
    menu: {
      name: 'MENU',
      data: [
        { name: 'Home', url: '/' },
        { name: 'Product', url: '/' },
        { name: 'About us', url: '/about' },
        { name: 'Contact us', url: '/contactUs' }
      ]
    },
    product: {
      name: 'PRODUCT',
      data: [
        { name: 'Pod Vape', url: '/' },
        { name: 'Disposable Vape', url: '/test' }
      ]
    },
    contact: {
      name: 'CONTACT',
      data: {
        phone: '13005436140',
        email: '3283275593@qq.com',
        address:
          `No. 3037, Jintian Road, Fu'an Community, Futian Street, Futian District, Shenzhen, Shiyan Street, Shenzhen, Guangdong, China`
      }
    },
    warning: {
      name: 'WARNING',
      data: 'This product can expose you to chemicals including nicotine, which is known to the State of California to cause cancer and reproductive harm or more information, go to p65warnings.ca.gov. This product is not intended for sale or use to those under 21 years of age. This Product contains nicotine. Nicotine is an addictive chemical.'
    }
  }

  const logoSrc = LogoImageWrite
  const whatappLinkUrl = 'https://wa.me/13005436140'
  const linkList = [
    { name: 'facebook',image:FacebookImage, url: 'https://www.facebook.com/profile.php?id=100092434208629' },
    { name: 'instagram',image:InstagramImage, url: 'https://www.instagram.com/ak_vape_hhc' },
    // { name: 'youtobe',image:YoutubeImage, url: 'https://www.youtube.com/channel/UCwhyCvKE4TkreD_A5ey3Gfw' },
    
    { name: 'whatapp',image:WhatappImage, url: whatappLinkUrl },
    { name: 'telegram',image:TelegramImage, url: 'https://t.me/+8613005436140' },
  ]
  return { menuData, footerData, logoSrc,linkList,whatappLinkUrl }
})
