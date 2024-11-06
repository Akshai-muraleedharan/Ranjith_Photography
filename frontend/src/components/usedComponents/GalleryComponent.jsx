import React, { useEffect, useState } from 'react'
import { galleryImage } from '../../Config/Api'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


// import plugins if you need

function GalleryComponent() {

  const [gallery,setGallery] = useState([])

console.log(gallery)

   const fetchUserGallery = async () => {
    try {
        const fetchResponse = await galleryImage() 

        setGallery(fetchResponse)
    } catch (error) {
        console.error( error.response?.data || error.message);
    }
   } 

   useEffect(() => {
    fetchUserGallery()
   },[])

  return (
    <div className='p-3'>
        <ResponsiveMasonry
                columnsCountBreakPoints={{320: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter='20px'  options={{
     columnWidth: 1,
  }}>
                   {gallery.map((image)=>(
                    <img className='block w-full' src={image.ImageUrl} alt=""  />
                   ))}
                </Masonry>
            </ResponsiveMasonry>
    </div>
  )
}

export default GalleryComponent