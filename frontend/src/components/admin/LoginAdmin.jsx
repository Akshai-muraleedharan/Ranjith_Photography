import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import {useNavigate} from 'react-router-dom'
import { adminLogin } from '../../Config/adminApi';
import useAuthStore from '../../store/storeAuth';
import {FaEye,FaEyeSlash} from 'react-icons/fa'


function LoginAdmin() {
 const[loading,setLoading] = useState(false)
 const[passwordVisible,setPasswordVisible] = useState(false)
 const[errors,setErroes] = useState("")


    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const setUser = useAuthStore((state) => state.setUser)


    const passwordHandle =() => {
      setPasswordVisible((prev) => !prev)
    }

    const onSubmit = async (data) => {
     try {
      setLoading(true)
      const response = await adminLogin(data)
      setUser(response)
      navigate("/admin/home") 
      setLoading(false)
     } catch (error) {
      setLoading(false)
      console.error( error.response?.data || error.message);
      setErroes(error.response.data.message)
     }
    }

    setTimeout(()=>{
      setErroes("")
    },4000)
  return (
    <div className='my-auto' >
        
 <h3 className='text-center font-semibold text-2xl'>Login</h3>
<form className="max-w-sm p-5  mx-auto" onSubmit={handleSubmit(onSubmit)}>

  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" {...register("email")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"  />
  </div>

  <div className="mb-5 relative">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type={passwordVisible ? "text" : "password"} {...register("password")}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    <span className='absolute right-5 top-10 cursor-pointer' onClick={passwordHandle}>
      {passwordVisible ? <FaEye/> : <FaEyeSlash/>}
    </span>
  </div>
 

  
<div className='flex justify-end flex-col'>
    
  <button type="submit" className={loading ? "cursor-not-allowed text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800 " : "text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800 "} >{loading ? "Loading..." : "Submit"}</button>
  <div className='h-3 mt-2'>
  <h2 className='text-xs  text-red-500 text-end font-semibold'>{errors && errors}</h2>
  </div>
</div>
</form>

    </div>
  )
}

export default LoginAdmin