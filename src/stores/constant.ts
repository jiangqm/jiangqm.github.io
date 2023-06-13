/*
 * @Authon: kermit
 * @Date: 2023-05-19 15:28:04
 * @Description:常量
 */
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {FacebookImage,InstagramImage,YoutubeImage,WhatappImage} from '@/assets/image/media'

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
      url: '/',
      children: [
        {
          name: 'POD VAPE',
          url: '/product/podvape'
        },
        {
          name: 'POD VAPE2',
          url: '/product/podvape'
        },
        {
          name: 'POD VAPE3',
          url: '/product/podvape'
        }
      ]
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
        { name: 'CBD Vape Pen', url: '/' },
        { name: 'Disposable Vape', url: '/test' }
      ]
    },
    contact: {
      name: 'CONTACT',
      data: {
        phone: '86-0755-29271296',
        email: 'support@aldgroup.com',
        address:
          'Factory B, No. 2, Industrial Third Road, Shixin Community, Shiyan Street, Shenzhen, Guangdong, China'
      }
    },
    warning: {
      name: 'WARNING',
      data: 'This product can expose you to chemicals including nicotine, which is known to the State of California to cause cancer and reproductive harm or more information, go to p65warnings.ca.gov. This product is not intended for sale or use to those under 21 years of age. This Product contains nicotine. Nicotine is an addictive chemical.'
    }
  }

  const logoSrc = 'https://file.fomille.site/1462689759759904769/1465973286769258497.webp'
  const whatappLinkUrl = 'https://wa.me/177460758'
  const linkList = [
    { name: 'facebook',image:FacebookImage, url: 'https://www.facebook.com/aldvaporofficial/' },
    { name: 'instagram',image:InstagramImage, url: 'https://www.instagram.com/ald_group_limited/' },
    { name: 'youtobe',image:YoutubeImage, url: 'https://www.youtube.com/channel/UCwhyCvKE4TkreD_A5ey3Gfw' },
    { name: 'whatapp',image:WhatappImage, url: whatappLinkUrl },
  ]
  return { menuData, footerData, logoSrc,linkList,whatappLinkUrl }
})
