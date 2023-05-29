/*
 * @Authon: kermit
 * @Date: 2023-05-29 21:29:21
 * @Description: 存放商品数据
 */

import { defineStore } from 'pinia'
import greenImg from '@/assets/image/product/green.png'
import redImg from '@/assets/image/product/red.png'

export const useProductStore = defineStore('product', () => {
  const productList = [
    {
      id:1,
        title:"itemi",
        imageUrl:greenImg,
      
    },
    {
      id:2,
      title:"item2",
      imageUrl:redImg,
    },
    {
      id:3,
        title:"itemi",
        imageUrl:greenImg,
      
    },
    {
      id:4,
      title:"item2",
      imageUrl:redImg,
    },
    {
      id:5,
        title:"itemi",
        imageUrl:greenImg,
      
    },
    {
      id:6,
      title:"item2",
      imageUrl:redImg,
    },
    {
      id:7,
        title:"itemi",
        imageUrl:greenImg,
      
    },
    {
      id:8,
      title:"item2",
      imageUrl:redImg,
    }
  ] 


  return { productList}
})
