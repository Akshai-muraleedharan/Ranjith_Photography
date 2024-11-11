import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { updateAdminProfile } from '../../Config/adminApi';
import toast, { Toaster } from 'react-hot-toast';

function AdminUpdateProfile({setUpdate,profile,fetchProfile}) {

  const [loading,setLoading] = useState(false)
  const { register, handleSubmit } = useForm();


    const pageReverse = () => {
      setUpdate(false)
    }

    const onSubmit = async (data) => {
      try {
        setLoading(true)
        await updateAdminProfile(data)
        fetchProfile()
        setLoading(false)
        toast.success("updated successfully")
      } catch (error) {
        setLoading(false)
        console.error( error.response?.data || error.message);
      }
    }
  return (
  
    
    <div className="py-5 px-10 max-[640px]:px-1 relative my-auto">
       <div className='flex justify-end'>
       <button onClick={pageReverse} className=' md:hidden     font-bold text-[19px]'>X</button>
       <button onClick={pageReverse} className='mb-2 px-1 py-1 max-[640px]:hidden md:px-5  md:py-2.5 rounded hover:bg-slate-200 md:font-semibold border'>close</button>
       </div>
         <h1 className=' text-2xl text-center font-semibold md:font-bold mb-10'>Profile update</h1>
<form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
    <input type="text" id="email" {...register("username")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={profile.username} />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">email</label>
    <input type="text" {...register("email")}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={profile.email}/>
  </div>

 
  
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{loading ? "loading..." : "Submit"}</button>
  <Toaster/>
</form>

   </div>
  
  )
}

export default AdminUpdateProfile