/*
 * @Authon: kermit
 * @Date: 2023-05-30 23:16:52
 * @Description: 
 */
import { useFatch } from "./index";

export const sendEmail = (data:any)=>{
    return useFatch('/sendEmail',{
        methods:'post',
        data
    })
}