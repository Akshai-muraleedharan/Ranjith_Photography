import React, { useEffect, useState } from 'react'
import { galleryImage } from '../../Config/Api'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


// import plugins if you need

function GalleryComponent() {

  const [gallery,setGallery] = useState([])
  const [loading,setLoading] = useState(false)
  const [btnLoading,setBtnLoading] = useState(false)
  const [imageData,setImageData] = useState('')

  

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

    const imagePopUp = (image) => {
   setImageData(image)
   document.body.style.overflow = 'hidden';
    }

    const CloseModel = () => {
      setImageData('')
      document.body.style.overflow = '';
    }

   useEffect(() => {
    fetchUserGallery()
    setTimeout(()=>{
      setBtnLoading(true)
    },2000)
   },[])

  //  useEffect(() => {
  //   const disableRightClick = (event) => {
  //     event.preventDefault();
  //   };
  
  //   window.addEventListener("contextmenu", disableRightClick);
  
  //   return () => {
  //     window.removeEventListener("contextmenu", disableRightClick);
  //   };
  // }, []);

  return (
   loading ?  <div className='overflow-hidden'>
    <h1 className='text-center font-semibold flex justify-center gap-1 items-center'><span className="loading loading-spinner loading-sm"></span>Loading... </h1>
   </div> : <div className='p-3'>
       
  
    
        <ResponsiveMasonry
                columnsCountBreakPoints={{320: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter='20px'  options={{
     columnWidth: 1,
  }}>
                   {gallery.map((image)=>(
                    <div className='relative overflow-hidden'>
                      <div className='gallery_image_overlay'></div>
                      
                     <img className='block w-full' src={image.ImageUrl} alt=""  loading="lazy" />
                    { btnLoading ?  <button onClick={()=> imagePopUp(image.ImageUrl)} className='animate_button absolute top-2 left-3 py-1 px-2 rounded bg-gradient-to-r from-black font-semibold text-white'>View</button> : ""}
                   </div>
                   ))}
                </Masonry>
            </ResponsiveMasonry>

            {imageData && (
              <div className='model_overlay'>
                 <button onClick={CloseModel} className='absolute text-white top-3 right-8 border-none text-[19px] font-semibold '>X</button>
                 <div className="modal_content" onClick={(e) => e.stopPropagation()}>
                
                 <img src={imageData} className="modal-image"/>
                 </div>
              </div>
            )}
    </div>

  )
}

export default GalleryComponent