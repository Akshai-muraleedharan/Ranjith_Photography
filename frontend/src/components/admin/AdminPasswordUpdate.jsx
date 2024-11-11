import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { updateAdminPassword } from '../../Config/adminApi';
import toast, { Toaster } from 'react-hot-toast';
import {FaEye,FaEyeSlash} from 'react-icons/fa'

function AdminPasswordUpdate({setUpdatePassword}) {
  const [errors,setErrors] = useState("")
  const [loading,setLoading] = useState(false)
  const[passwordVisible,setPasswordVisible] = useState(false)
  const[confirmPasswordVisible,setconfirmPasswordVisible] = useState(false)
  const[oldPasswordVisible,setoldPasswordVisible] = useState(false)

    const { register, handleSubmit } = useForm();

    const onSubmit =async (data) => {
      try {
        setLoading(true)
       await updateAdminPassword(data)
       toast.success("updated successfully")
       setLoading(false)
      setTimeout(()=>{
        setUpdatePassword(false)
      },3000)
      } catch (error) {
        setLoading(false)
             console.error( error.response?.data || error.message);
             setErrors(error.response.data.message)
      }
    }
    const passwordHandle = () => {
      setPasswordVisible((prev) => !prev)
    }

    const passwordConfirmHandle = () => {
      setconfirmPasswordVisible((prev) => !prev)
    }

    const oldPasswordHandle = () => {
      setoldPasswordVisible((prev) => !prev)
    }

    const pageReverse = () => {
        setUpdatePassword(false)
    }

   

    setTimeout(()=>{
      setErrors("")
    },4000)

  return (
    <div className="py-5 px-10 max-[640px]:px-1 relative my-auto">

         <div className='flex justify-end'>
       <button onClick={pageReverse} className=' md:hidden     font-bold text-[19px]'>X</button>
       <button onClick={pageReverse} className='mb-2 px-1 py-1 max-[640px]:hidden md:px-5  md:py-2.5 rounded hover:bg-slate-200 md:font-semibold border'>close</button>
       </div>

         <h1 className=' text-2xl text-center font-semibold md:font-bold mb-10'>Change Password</h1>
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5 relative">

    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current password</label>
    <input type={oldPasswordVisible ? "text" : "password"} {...register("oldPassword")}   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
   
    <span className='absolute right-5 top-10 cursor-pointer' onClick={oldPasswordHandle}>
      {oldPasswordVisible ? <FaEye/> : <FaEyeSlash/>}
    </span>

  </div>

        <div className="mb-5 relative">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">password</label>
    <input type={passwordVisible ? "text" : "password"} {...register("password")}   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
   
    <span className='absolute right-5 top-10 cursor-pointer' onClick={passwordHandle}>
      {passwordVisible ? <FaEye/> : <FaEyeSlash/>}
    </span>

  </div>
  <div className="mb-5 relative">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">confirm password</label>
    <input type={confirmPasswordVisible ? "text" : "password"} {...register("confirmPassword")}   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    <span className='absolute right-5 top-10 cursor-pointer' onClick={passwordConfirmHandle}>
      {confirmPasswordVisible ? <FaEye/> : <FaEyeSlash/>}
    </span>
  </div>

  
   
 

  <button type="submit" className={loading ? "text-white cursor-not-allowed  bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800" : "text-white  bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"}>{loading ? "Loading..." : "Reset passwod"}</button>
  <Toaster/>
  <div className='h-3 mt-2'>
  <h2 className='text-xs  text-red-500 text-end font-semibold'>{errors && errors}</h2>
  </div>
        </form>

    </div>
  )
}

export default AdminPasswordUpdate