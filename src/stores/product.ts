/*
 * @Authon: kermit
 * @Date: 2023-05-29 21:29:21
 * @Description: 
 */
/*
 * @Authon: kermit
 * @Date: 2023-05-29 21:29:21
 * @Description: 存放商品数据
 */

import { defineStore } from 'pinia'
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
  FoaioT3Image,
Atomizer,
Disposable,
AK17Image,
AK18Image
} from '@/assets/image/product'

export const useProductStore = defineStore('product', () => {
  // 商品列表
  const productList = [
    {
      id: 2, // id
      /**商品名称 */
      title: 'AK-D1',
      /**图片地址 */
      imageUrl: AK1403FImage,
      /**容量 */
      volume: '2ml',
      /**型号 */
      model:"1430-F",
      /**电池容量 */
      battery: '',
      /**电压 */
      resistance: '1.2Ω',
      /**充电口类型 */
      chargingPort: '',
      /**重量 */
      weight: '25g'
    },
    {
      id: 3,
      title: 'AK-M2',
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
      title: 'AK-T3',
      model:"Foaio-T3",
      imageUrl: FoaioT3Image,
      volume: '2ml',
      battery: '280mAh',
      resistance: '1.2Ω', 
      chargingPort: 'Type-C',
      weight: '25g'
    },
    {
      id: 5,
      title: 'AK-C3',
      model:"C3",
      imageUrl: C3Image,
      volume: '3ml',
      battery: '280mAh',
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

    {
      id:15,
      title: 'AK-D2',
      model:"Disposable",
      imageUrl: Disposable,
      volume: '3ml*1=3ml',
      battery: '280mAh',
      resistance: '1.2Ω',
      chargingPort: 'Type-C',
      weight: '25g'
    },
    {
      id:16,
      title: 'AK-11',
      model:"Atomizer",
      imageUrl: Atomizer,
      volume: '1ml',
      battery: '',
      resistance: '',
      atomizer: '501 thread',
      weight: '25g'
    },
    {
      id:16,
      title: 'AK-17',
      model:"al-17",
      imageUrl: AK17Image,
      volume: '2ml*1=2ml',
      battery: '280mAh',
      chargingPort: 'Type-C',
      weight: '25g'
    },
    {
      id:17,
      title: 'AK-17B',
      model:"al-17B",
      imageUrl: AK17Image,
      volume: '2ml*2=4ml',
      battery: '280mAh',
      chargingPort: 'Type-C',
      weight: '25g'
    },
      {
      id:18,
      title: 'AK-18',
      model:"al-18",
      imageUrl: AK18Image,
      volume: '1ml-2ml',
      battery: '300mAh',
      chargingPort: 'Type-C',
      weight: '25g'
    },
  ]

  const parameters = [
    { label: 'E-liquid Capacity', field: 'volume' },
    { label: 'Battery Capacity', field: 'battery' },
    { label: 'Resistance', field: 'resistance' },
    { label: 'Charging Port', field: 'chargingPort' },
    { label: 'weight', field: 'weight' },
    { label: 'atomizer', field: 'atomizer' },
  ]

  return { productList,parameters }
})
