import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { adminImagePost } from '../../../Config/adminApi';
import { Link } from 'react-router-dom';
import AdminBackgroundImage from './AdminBackgroundImage';


function AdminGalleryImagePost() {
  const [loading,setLoading] =useState(false)
  const [errors,setErrors] =useState("")
  const [pageForward,setPageForward] =useState(false)
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try{
            setLoading(true)
            const formData = new FormData();
              formData.append("image", data.image[0]);
              formData.append("imageType", data.imageType);
             
             
           await adminImagePost(formData)

          setLoading(false)
        }catch(error){
            setLoading(false)
            setErrors(error.response.data.message)
            console.error("Registration error:", error.response?.data || error.message);
            throw error
          
        }
    }

    const backGroundImage = () => {
      setPageForward(true)
    }

    setTimeout(()=>{
      setErrors('')
    },6000)

  return (
    
    pageForward  ? <AdminBackgroundImage setPageForward={setPageForward}/>  :  <div className='my-auto' >
        
        <h3 className='text-center font-semibold text-2xl mb-2'>Post image</h3>
     
       <form className="max-w-sm p-5  mx-auto" onSubmit={handleSubmit(onSubmit)}>
       
       <div className='flex mb-5 justify-end'>
      
       <div className='p-1 border  text-center border-slate-500 rounded'><Link to={"/admin/dashboard"}>Go Back</Link></div>
       </div>

         <div className="mb-5">
           <label  htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900  dark:text-white">image Type</label>
           <select {...register("imageType")}className="select select-bordered w-full ">
            <option disabled selected value={"selectimagetype"}>select Image Type</option>
            <option value={"marriage"}>Marriage</option>
            <option value={"savethedate"}>Save The Date</option>
            <option value={"model"}>Model</option>
</select>
         </div>
       
         <div className="mb-5 relative">
         <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="user_avatar">Upload file</label>
         <input   {...register("image")}  type="file" className="file-input file-input-bordered  w-full " />
          
         </div>
        
         
       <div className='flex justify-end flex-col'>
           
       <button type="submit" className={loading ? "cursor-not-allowed text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800 " : "text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800 "} >{loading ? "Uploading..." : "Submit"}</button>
         <div className='h-3 mt-2'>
         <h2 className='text-xs  text-red-500 text-end font-semibold'>{errors && errors}</h2> 
         </div>
       </div>
       </form>
<div className='max-w-sm p-5 mx-auto'>
<button onClick={backGroundImage} className="text-white  bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800 " >BackgroundImage</button>
</div>
       
       
           </div>
   
  )
}

export default AdminGalleryImagePost