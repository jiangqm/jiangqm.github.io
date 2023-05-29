/*
 * @Author: jiangqm
 * @Date: 2023-05-29 13:39:29
 * @Description: 获取全局的宽高
 */

import { useWinsizeStore } from '@/stores/winSize'
import { reactive } from 'vue';


export default  ()=>{
    const store = useWinsizeStore();
    const isMobile = store.isMobile
    return reactive({
        winSize:{
            width:store.globalWidth,
            height:store.globalHeight
        },
        isMobile
    })
}