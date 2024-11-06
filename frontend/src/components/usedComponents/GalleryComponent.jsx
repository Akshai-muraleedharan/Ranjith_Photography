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
       
   <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
    <button type="button" className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All categories</button>
    <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Marriage</button>
    <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Bags</button>
    <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Electronics</button>
    <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Gaming</button>
</div>
    
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