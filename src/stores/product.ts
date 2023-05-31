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
      id: 1,
      title: 'Click B5000, A revolutionary new product by ALD, 5000 puffs disposable vape consists of a reusable device and a replaceable pod.',
      imageUrl: greenImg,
      volume: '2ml',
      battery: '350mAh',
      resistance: '1.2Ω',
      chargingPort: 'Type-C',
      weight: '25g'
    },
    {
      id: 2,
      title: 'item2',
      imageUrl: redImg,
      volume: '2ml',
      battery: '350mAh',
      resistance: '1.2Ω',
      chargingPort: 'Type-C',
      weight: '25g'
    },
    {
      id: 3,
      title: 'itemi',
      imageUrl: greenImg,
      volume: '2ml',
      battery: '350mAh',
      resistance: '1.2Ω',
      chargingPort: 'Type-C',
      weight: '25g'
    },
    {
      id: 4,
      title: 'item2',
      imageUrl: redImg,
      volume: '2ml',
      battery: '350mAh',
      resistance: '1.2Ω',
      chargingPort: 'Type-C',
      weight: '25g'
    },
    {
      id: 5,
      title: 'itemi',
      imageUrl: greenImg,
      volume: '2ml',
      battery: '350mAh',
      resistance: '1.2Ω',
      chargingPort: 'Type-C',
      weight: '25g'
    },
    {
      id: 6,
      title: 'item2',
      imageUrl: redImg,
      volume: '2ml',
      battery: '350mAh',
      resistance: '1.2Ω',
      chargingPort: 'Type-C',
      weight: '25g'
    },
    {
      id: 7,
      title: 'itemi',
      imageUrl: greenImg,
      volume: '2ml',
      battery: '350mAh',
      resistance: '1.2Ω',
      chargingPort: 'Type-C',
      weight: '25g'
    },
    {
      id: 8,
      title: 'item2',
      imageUrl: redImg,
      volume: '2ml',
      battery: '350mAh',
      resistance: '1.2Ω',
      chargingPort: 'Type-C',
      weight: '25g'
    }
  ]

  return { productList }
})
