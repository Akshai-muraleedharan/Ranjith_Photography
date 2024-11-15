import React, { useEffect, useState } from 'react'
import { adminBackgroundUpdate, adminGallery, adminGalleryImageDelete } from '../../../Config/adminApi';
import { Link } from 'react-router-dom';


function AdminImageList() {
  const [gallery,setGallery] = useState([])
  const [imageData,setImageData] = useState('')
  const [imageName,setImageName] = useState('')
  const [loading,setLoading] = useState(false)
  const [deleteloading,setDeleteLoading] = useState(false)
  const [deleteId,setDeleteId] = useState('')
  const [updateId,setUpdateId] = useState('')
 

    const galleryFetch = async () => {
        try {
           
         const response =   await adminGallery()
         setGallery(response.data)
      
        } catch (error) {
            setLoading(false)
            console.error("Registration error:", error.response?.data || error.message);
            throw error
        }
    }

    const imageShown =(url,name) => {
        setImageData(url)
        setImageName(name)
    }

    const CloseModel = () => {
        setImageData("")
        setImageName("")
    }

    const updateBackground =async (id,value) => {
       try {
        setLoading(true)
        setUpdateId(id)
        await adminBackgroundUpdate(id,value)
        galleryFetch()
        setLoading(false)
        setUpdateId("")
       } catch (error) {
        setLoading(false)
        console.error("Registration error:", error.response?.data || error.message);
            throw error
            
       }
    }

    const deleteImage = async (id) => {
       try {
        setDeleteLoading(true)
        setDeleteId(id)
        await adminGalleryImageDelete(id)
        galleryFetch()
        setDeleteLoading(false)
        setDeleteId("")
       } catch (error) {
        setDeleteLoading(false)
        console.error("Registration error:", error.response?.data || error.message);
            throw error
       }
    }

    useEffect(()=>{
    galleryFetch()
    },[])

  return (
    

    


<div className='py-5 px-10 max-[640px]:px-5 relative'>
{  <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-1">
    <div class="pb-4 bg-white dark:bg-gray-900 flex gap-3 flex-col md:flex-row md:justify-between items-center">
        <div className='w-auto'>
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative mt-1">
            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="text" id="table-search" class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-64 md:w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-/blue-500 dark:focus:border-blue-500" placeholder="Search for items"/>
        </div>
        </div>

        <div className='p-1 border border-slate-500 rounded'><Link to={"/admin/dashboard"}>Go Back</Link></div>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                   Image Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Image Type
                </th>
                <th scope="col" class="px-6 py-3">
                    image
                </th>
                <th scope="col" class="px-6 py-3">
                   Screen Type
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
           {
            gallery.map((item)=>(
                <tr key={item._id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.imageName}
                </th>
                <td class="px-6 py-4">
                    {item.imageType}
                </td>
                <td class="px-6 py-4">
                    <button onClick={()=>imageShown(item.ImageUrl,item.imageName)} className='py-1 px-4 border rounded border-slate-300'>View</button>
                </td>
                <td class="px-6 py-4">
                
{loading ? updateId === item._id ? <h3 className="font-semibold">Loading...</h3> : "" :  <form >
  <label for="underline_select" class="sr-only">Underline select</label>
  <select id="underline_select" onChange={(e)=>updateBackground(item._id,e.target.value)}>
      <option selected disabled>{ item.screenType}</option>
      <option value="tablet">tablet</option>
      <option value="mobile">mobile</option>
      <option value="Nil">Nil</option>
     
  </select>
</form> }


                </td>
               
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={()=> deleteImage(item._id)}>{deleteloading ? deleteId === item._id ? <h3 className="font-semibold">Loading.</h3> : "Remove" : "Remove" }</a>
                </td>
            </tr>
            ))
           }

           
          
        </tbody>
    </table>

    {imageData && (
              <div className='model_overlay'>
                 <button onClick={CloseModel} className='close_button '>X</button>
                 <div className="modal_content" onClick={(e) => e.stopPropagation()}>
                  <h2 className='text-white mb-2'>{imageName}</h2>
                 <img src={imageData} className="modal-image"/>
                 </div>
              </div>
            )}
</div>}
</div>

  )
}

export default AdminImageList