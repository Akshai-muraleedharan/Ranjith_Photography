import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { checkAdmin } from "../Config/adminApi";



const PrivateRoute = ({ children }) => {
  const [admins,setAdmins] = useState()
  const location =useLocation()
  const navigate =useNavigate()
  
 
  
 
     const adminAuth =async () => {
       try {
           await checkAdmin()

           setAdmins(true) 
            
      } catch (error) {
        navigate("/admin/login")
        setAdmins(false) 
        console.error( error.response?.data || error.message);
       }
    }

    

    useEffect(()=>{
      adminAuth()
    },[location.pathname,admins])

    return admins ? children : null;
  };
  
  export default PrivateRoute;