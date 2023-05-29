/*
 * @Authon: kermit
 * @Date: 2023-05-19 15:28:04
 * @Description:
 */
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

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
      url: '/contact'
    }
  ])

  const footerData = {
    menu: {
      name: 'MENU',
      data: [
        { name: 'Home', url: '/' },
        { name: 'Product', url: '/' },
        { name: 'About us', url: '/' },
        { name: 'Contact us', url: '/' }
      ]
    },
    product: {
      name: 'PRODUCT',
      data: [
        { name: 'Pod Vape', url: '/' },
        { name: 'CBD Vape Pen', url: '/' },
        { name: 'Disposable Vape', url: '/' }
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
    warning:{
        name:'WARNING',
        data:'This product can expose you to chemicals including nicotine, which is known to the State of California to cause cancer and reproductive harm or more information, go to p65warnings.ca.gov. This product is not intended for sale or use to those under 21 years of age. This Product contains nicotine. Nicotine is an addictive chemical.'
    }
  }

  return { menuData, footerData }
})
