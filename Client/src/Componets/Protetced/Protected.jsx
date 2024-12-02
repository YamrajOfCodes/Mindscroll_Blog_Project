import React, { useEffect } from 'react'
import  {Outlet, useNavigate} from "react-router-dom"

const Protected = ({Component}) => {

    const navigate = useNavigate();

const loginApi = ()=>{
    const login = localStorage.getItem("user");
    if(!login){
        navigate("/login");
    }
}

useEffect(()=>{
 loginApi
},[])

  return (
    <div>
      <Component/>      
    </div>
  )
}

export default Protected
