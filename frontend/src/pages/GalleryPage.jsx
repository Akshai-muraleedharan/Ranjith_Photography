import React, { useEffect, useState } from 'react'
import GalleryComponent from '../components/usedComponents/GalleryComponent'
import { galleryImage, searchImage } from '../Config/userApi'

function GalleryPage() {

  const [gallery,setGallery] = useState([])
  const [loading,setLoading] = useState(false)
  const [filterLoading,setFilterLoading] = useState(false)
  const [btnLoading,setBtnLoading] = useState(false)
  const [imageData,setImageData] = useState('')
  const [filter,setFilter] = useState('')
   const [active,setActive] =useState('allcategories')
   
  
  const fetchUserGallery = async () => {
    try {
      setLoading(true)
        const fetchResponse = await galleryImage() 

        setGallery(fetchResponse.data)
         setLoading(false)
    } catch (error) {
        console.error( error.response?.data || error.message);
    }
   } 

   
   const imagePopUp = (image) => {
    setImageData(image)
    document.body.style.overflow = 'hidden';
     }
 
     const CloseModel = () => {
        setImageData('')
       document.body.style.overflow = '';
     }
      
    const handleFilter = async (search) => {
      try {
        setFilterLoading(true)
          setActive(search)
          
        const  searchResponse = await searchImage(search)
       
         setGallery(searchResponse.data)
         setFilter(searchResponse.dataLength)
         setFilterLoading(false)
      } catch (error) {
          console.error("Registration error:", error.response?.data || error.message);
          throw error
      }
      
  }


  const allCategories = async (search)=> {
      try {
          setActive(search)
          setFilterLoading(true)
            const fetchResponse = await galleryImage() 
    
            setGallery(fetchResponse.data)
            setFilter(fetchResponse.dataLength)
            setFilterLoading(false)
        } catch (error) {
            console.error( error.response?.data || error.message);
        }
  }
 
    useEffect(() => {
     fetchUserGallery()
     setTimeout(()=>{
       setBtnLoading(true)
     },2000)
    },[])
  return (
    <div>
      
    <GalleryComponent gallery={ gallery} filterLoading={filterLoading} loading={loading} handleFilter={handleFilter} allCategories={allCategories} active={active} filter={filter} setGallery={setGallery} btnLoading={btnLoading} imageData={imageData} imagePopUp={imagePopUp} CloseModel={CloseModel}  />
    </div>
  )
}

export default GalleryPage