import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { LoginAPI, registerAPI, userLoggedinAPI } from "../../../API/userAPI/userAPI";
import {toast} from "react-toastify"



export const Register = createAsyncThunk("register",async(data)=>{
    try {
        
        const response = await registerAPI(data);
        console.log(response);
        if(response.status == 200){
            toast.success("Register successful");
            return response.data;
        }else{
            toast.error(response.response.data.error);
            
        }
    } catch (error) {
        console.log(error);
        
    }
})

export const Login = createAsyncThunk("login",async(data)=>{
    try {
        const response  = await LoginAPI(data);
        if(response.status==200){
            toast.success("login successfull");
            localStorage.setItem("user",response.data.token)
            return response.data;
        }else{
            toast.error(response.response.data.error)
        }
    } catch (error) {
        console.log(error);
        
    }
})

export const userVerify = createAsyncThunk("userloggedin",async()=>{
    try {
        const response = await userLoggedinAPI();
        // console.log(response);
        
        if(response.status==200){
            return response.data;
        }else{
           return response.data
        }
    } catch (error) {
        console.log(error);
        
    }
})

export const Logout = createAsyncThunk("logout",async(data)=>{
    try {
            toast.success("logout successfull");
            return response.data;

    } catch (error) {
        console.log(error);
        
    }
})







  const userSlice  = createSlice({
    name:"userSlice",
    initialState:{
        register:[],
        login:[],
        logouts:[],
        userverify:[],
        loader:false,
        error:null,
    },
    extraReducers:(builder)=>{
        builder.addCase(Register.pending,(state,action)=>{
            state.loader = true
        })
        .addCase(Register.fulfilled,(state,action)=>{
            state.loader = false,
            state.register = [action.payload]
        })
        .addCase(Register.rejected,(state,action)=>{
            state.error = [action.payload]
        })

        builder.addCase(Login.pending,(state,action)=>{
            state.loader = true
        })
        .addCase(Login.fulfilled,(state,action)=>{
            state.loader = false,
            state.login = [action.payload]
        })
        .addCase(Login.rejected,(state,action)=>{
            state.error = [action.payload]
        })
        builder.addCase(Logout.pending,(state,action)=>{
            state.loader = true
        })
        .addCase(Logout.fulfilled,(state,action)=>{
            state.loader = false,
            state.userverify = ""
        })
        .addCase(Logout.rejected,(state,action)=>{
            state.error = [action.payload]
        })
        builder.addCase(userVerify.pending,(state,action)=>{
            state.loader = true
        })
        .addCase(userVerify.fulfilled,(state,action)=>{
            state.loader = false,
            state.userverify = [action.payload]
        })
        .addCase(userVerify.rejected,(state,action)=>{
            state.error = [action.payload]
        })
    }
})

export default userSlice.reducer;