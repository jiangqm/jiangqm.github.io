/*
 * @Authon: kermit
 * @Date: 2023-05-29 21:29:21
 * @Description: 存放商品数据
 */

import { defineStore } from 'pinia'
// import greenImg from '@/assets/image/product/green.png'
// import redImg from '@/assets/image/product/red.png'
import {AK1403FImage,
  AK1Image,
  AK2Image,
  AK3Image,
  AK4Image,
  AK5Image,
  AK6Image,
  AK7Image,
  AK8Image,
  AK9Image,
  C3Image,
  FoaioM2Image,
  FoaioT3Image,} from '@/assets/image/product'

export const useProductStore = defineStore('product', () => {
  const productList = [

    {
      id: 2,
      title: '3ml atomizer - press version',
      imageUrl: AK1403FImage,
      volume: '2ml',
      model:"1430-F",
      battery: '',
      resistance: '1.2Ω',
      chargingPort: '',
      weight: '25g'
    },
    {
      id: 3,
      title: 'New button version 2ml',
      model:"Foaio-M2",
      imageUrl: FoaioM2Image,
      volume: '2ml',
      battery: '280mAh',
      resistance: '1.2Ω', 
      chargingPort: 'Type-C',
      weight: '25g'
    },
    {
      id: 4,
      title: 'New button version 2ml',
      model:"Foaio-T3",
      imageUrl: FoaioT3Image,
      volume: '3ml',
      battery: '400mAh',
      resistance: '1.2Ω', 
      chargingPort: 'Type-C',
      weight: '25g'
    },
    {
      id: 5,
      title: 'itemi',
      model:"C3",
      imageUrl: C3Image,
      volume: '3ml',
      battery: '400mAh',
      resistance: '1.2Ω',
      chargingPort: 'Type-C',
      weight: '25g'
    },
    {
      id: 6,
      title: 'AK-1',
      model:"AK-1",
      imageUrl: AK1Image,
      volume: '1ml',
      battery: '280mAh',
      resistance: '1.4Ω',
      chargingPort: 'USB',
      weight: '25g'
    },
    {
      id: 7,
      title: 'AK-2',
      model:"AK-2",
      imageUrl: AK2Image,
      volume: '2ml',
      battery: '350mAh',
      resistance: '1.2Ω',
      chargingPort: 'USB',
      weight: '25g'
    },
    {
      id: 8,
      title: 'AK-3',
      model:"AK-3",
      imageUrl: AK3Image,
      volume: '1ml',
      battery: '280mAh',
      resistance: '1.2Ω',
      chargingPort: 'USB',
      weight: '25g'
    },
    {
      id:9,
      title: 'AK-4',
      model:"AK-4",
      imageUrl: AK4Image,
      volume: '2ml',
      battery: '280mAh',
      resistance: '1.2Ω',
      chargingPort: 'USB',
      weight: '25g'
    },
    {
      id:10,
      title: 'AK-5',
      model:"AK-5",
      imageUrl: AK5Image,
      volume: '1ml',
      battery: '280mAh',
      resistance: '1.2Ω',
      chargingPort: 'Type-C',
      weight: '25g'
    },
    {
      id:11,
      title: 'AK-6',
      model:"AK-6",
      imageUrl: AK6Image,
      volume: '1ml',
      battery: '280mAh',
      resistance: '1.2Ω',
      chargingPort: 'Type-C',
      weight: '25g'
    },
    {
      id:12,
      title: 'AK-7',
      model:"AK-7",
      imageUrl: AK7Image,
      volume: '3ml',
      battery: '280mAh',
      resistance: '1.2Ω',
      chargingPort: 'Type-C',
      weight: '25g'
    },
    {
      id:13,
      title: 'AK-8',
      model:"AK-8",
      imageUrl: AK8Image,
      volume: '1ml',
      battery: '280mAh',
      resistance: '1.2Ω',
      chargingPort: 'USB',
      weight: '25g'
    },
    {
      id:14,
      title: 'AK-9',
      model:"AK-9",
      imageUrl: AK9Image,
      volume: '1ml',
      battery: '280mAh',
      resistance: '1.2Ω',
      chargingPort: 'USB',
      weight: '25g'
    },
    // {
    //   id:9,
    //   title: 'AK-4',
    //   model:"AK-4",
    //   imageUrl: greenImg,
    //   volume: '2ml',
    //   battery: '280mAh',
    //   resistance: '1.2Ω',
    //   chargingPort: 'USB',
    //   weight: '25g'
    // },
  ]

  const parameters = [
    { label: 'E-liquid Capacity', field: 'volume' },
    { label: 'Battery Capacity', field: 'battery' },
    { label: 'Resistance', field: 'resistance' },
    { label: 'Charging Port', field: 'chargingPort' },
    { label: 'weight', field: 'weight' }
  ]

  return { productList,parameters }
})
