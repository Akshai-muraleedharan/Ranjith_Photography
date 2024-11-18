import React from 'react'
import { useForm } from "react-hook-form";



function AdminBackgroundImage({setPageForward}) {


    const { register, handleSubmit } = useForm();

    const onSubmit = () => {

    }

    const galleryImagePost = () => {
        setPageForward(false)
      }
  return (
    <div className='my-auto' >
        
    <h3 className='text-center font-semibold text-2xl mb-2'>Post image</h3>
 
   <form className="max-w-sm p-5  mx-auto" onSubmit={handleSubmit(onSubmit)}>
   
   

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
    
     
   {/* <div className='flex justify-end flex-col'>
       
   <button type="submit" className={loading ? "cursor-not-allowed text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800 " : "text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800 "} >{loading ? "Uploading..." : "Submit"}</button>
     <div className='h-3 mt-2'>
     <h2 className='text-xs  text-red-500 text-end font-semibold'>{errors && errors}</h2> 
     </div>
   </div> */}
   </form>
<div className='max-w-sm p-5 mx-auto'>
<button onClick={galleryImagePost} className="text-white  bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800 " >Gallery image post</button>
</div>
   
   
       </div>
  )
}

export default AdminBackgroundImage