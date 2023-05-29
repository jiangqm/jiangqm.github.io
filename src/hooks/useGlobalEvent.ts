/*
 * @Author: jiangqm
 * @Date: 2023-05-29 13:39:29
 * @Description: 
 */
import {onMounted,onUnmounted} from 'vue'
import { useWinsizeStore } from '@/stores/winSize'


export default function (){
    const store = useWinsizeStore()
    const watchResize = ()=>{
        const width=   document.documentElement.clientWidth;
        const height=   document.documentElement.clientHeight;
        console.log(`width:${width}`);
        console.log(`height:${height}`);
        store.setWinSize({
           width,
           height
        })
    }
    onMounted(()=>{
        window.addEventListener('resize',watchResize)   
    })
    onUnmounted(()=>{
        window.removeEventListener('resize',watchResize)
    })
}