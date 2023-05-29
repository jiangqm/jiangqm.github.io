/*
 * @Author: jiangqm
 * @Date: 2023-05-29 14:51:56
 * @Description: 
 */
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const productList = [
    {
        title:"",
        sku:[

        ]
    }
  ] 


  return { productList}
})
