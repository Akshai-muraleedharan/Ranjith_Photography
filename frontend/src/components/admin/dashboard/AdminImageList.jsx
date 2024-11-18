import React, { useEffect, useState } from 'react'
import { adminBackgroundUpdate, adminGallery, adminGalleryImageDelete } from '../../../Config/adminApi';

import AdminListSearch from './AdminListSearch';


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
    <AdminListSearch setGallery={setGallery}/>
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
                    Image
                </th>
                <th scope="col" class="px-6 py-3">
                   Post Date
                </th>
             
                <th scope="col" class="px-6 py-3">
                   Update Date
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
           {gallery.length === 0 ? <h1 className='font-bold text-red-500 '>no data found</h1> :
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
                    { item.createdAt.split('T')[0].split('-').reverse().join('/') }
                </td>

                <td class="px-6 py-4">
                    { item.updatedAt.split('T')[0].split('-').reverse().join('/') }
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