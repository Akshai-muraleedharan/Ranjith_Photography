import React, { useEffect, useState } from 'react'
import { galleryImage } from '../../Config/Api'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


// import plugins if you need

function GalleryComponent() {

  const [gallery,setGallery] = useState([])
  const [loading,setLoading] = useState(false)
  const [btnLoading,setBtnLoading] = useState(false)

console.log(loading)
   const fetchUserGallery = async () => {
    try {
      setLoading(true)
        const fetchResponse = await galleryImage() 

        setGallery(fetchResponse)
        setLoading(false)
    } catch (error) {
        console.error( error.response?.data || error.message);
    }
   } 

   useEffect(() => {
    fetchUserGallery()
    setTimeout(()=>{
      setBtnLoading(true)
    },4000)
   },[])

  return (
   loading ?  "Loading " : <div className='p-3'>
     
    
        <ResponsiveMasonry
                columnsCountBreakPoints={{320: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter='20px'  options={{
     columnWidth: 1,
  }}>
                   {gallery.map((image)=>(
                   <div className='relative'>
                     <img className='block w-full' src={image.ImageUrl} alt=""  loading="lazy" />
                    { btnLoading ?  <h1 className='absolute top-2 left-3 py-1 px-2 rounded bg-gradient-to-r from-black font-semibold text-white'>View</h1> : ""}
                   </div>
                   ))}
                </Masonry>
            </ResponsiveMasonry>
    </div>
  )
}

export default GalleryComponent