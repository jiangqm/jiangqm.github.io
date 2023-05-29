/*
 * @Author: jiangqm
 * @Date: 2023-05-29 13:40:49
 * @Description: 全局的宽高设置
 */
import { defineStore } from 'pinia'

export const useWinsizeStore = defineStore('winsize', {
  state: () => ({
    globalWidth: 0,
    globalHeight: 0
  }),
  getters: {
    isMobile: (state) => state.globalWidth < 768
  },
  actions: {
    setWinSize(winSize: { width: number; height: number }) {
      this.globalWidth = winSize.width
      this.globalHeight = winSize.height
    }
  }
})
