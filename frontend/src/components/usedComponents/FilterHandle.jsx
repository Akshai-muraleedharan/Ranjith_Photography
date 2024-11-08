import React, {   useState } from 'react'
import { galleryImage, searchImage } from '../../Config/Api'
import LoadingComponent from './LoadingComponent'



function FilterHandle({setGallery}) {
   const [filter,setFilter] = useState('')
   const [active,setActive] =useState('allcategories')
   const [loading,setLoading] = useState(false)
   
 
   
    const handleFilter = async (search) => {
        try {
            setLoading(true)
            setActive(search)
            
          const  searchResponse = await searchImage(search)
         
           setGallery(searchResponse.data)
           setFilter(searchResponse.dataLength)
           setLoading(false)
        } catch (error) {
            console.error("Registration error:", error.response?.data || error.message);
            throw error
        }
        
    }


    const allCategories = async (search)=> {
        try {
            setActive(search)
            setLoading(true)
              const fetchResponse = await galleryImage() 
      
              setGallery(fetchResponse.data)
              setFilter(fetchResponse.dataLength)
              setLoading(false)
          } catch (error) {
              console.error( error.response?.data || error.message);
          }
    }
  
   
  return (
    <div>

<div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
    <button type="button" onClick={()=>allCategories("allcategories")} className={active === "allcategories" ? "text-white border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-black  rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800" :"text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"}>All categories</button>
    <button type="button" onClick={()=>handleFilter("marriage")} className={active === "marriage" ? "text-white border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-black  rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800" : "text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"}>Marriage</button>
    <button type="button" onClick={()=>handleFilter("model")} className={active === "model" ? "text-white border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-black  rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"  : "text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"}>model</button>
    <button type="button" onClick={()=>handleFilter("savethedate")}className={ active === "savethedate" ? "text-white border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-black  rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"  :"text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"}>Save the date</button>
    
</div>
{loading ? <LoadingComponent/>  :
<div className='text-center font-bold text-md md:text-2xl'>{filter === 0 ? 'No data found' : ''}</div>
}
    </div>
  )
}

export default FilterHandle