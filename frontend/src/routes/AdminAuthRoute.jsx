import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import { useEffect, useState } from "react";
import { checkAdmin } from "../Config/adminApi";


const PrivateRoute = ({ children }) => {
  
  const location =useLocation()
  const navigate =useNavigate()
    const { admin } = useAuthStore();
    
  
 
     const adminAuth =async () => {
       try {
            await checkAdmin()
      
      } catch (error) {
        navigate("/admin/login")
        console.error( error.response?.data || error.message);
       }
    }

    useEffect(()=>{
      adminAuth()
    },[location.pathname])

    return admin ? children : <Navigate to="/admin/login" />;
  };
  
  export default PrivateRoute;