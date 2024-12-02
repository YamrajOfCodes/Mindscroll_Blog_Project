import { commonrequest } from "../commonrequest"
import {BASE_URL} from "../helper"

export const registerAPI = async(data,header)=>{
    return await commonrequest("POST",`${BASE_URL}/user/api/register`,data,header,"user");
}

export const LoginAPI = async(data,header)=>{
    return await commonrequest("POST",`${BASE_URL}/user/api/login`,data,header,"user");
}

export const userLoggedinAPI = async(header)=>{
    return await commonrequest("GET",`${BASE_URL}/user/api/userverify`,"",header,"user")
}