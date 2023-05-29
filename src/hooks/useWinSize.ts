/*
 * @Author: jiangqm
 * @Date: 2023-05-29 13:39:29
 * @Description: 获取全局的宽高
 */

import { useWinsizeStore } from '@/stores/winSize'
import {toRefs,computed } from 'vue';


export default  ()=>{
    const store = useWinsizeStore();
    const isMobile =computed(()=>store.isMobile) 
    const winSize =computed(()=>({
        width:store.globalWidth,
        height:store.globalHeight
    })) 
    return toRefs({
        winSize,
        isMobile
    })
}