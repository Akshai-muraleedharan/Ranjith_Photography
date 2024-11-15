import React, { useEffect, useState } from 'react'
import images from '../../assets/image/IMG-20241014-WA0038.jpg'
import TabletImage from '../../assets/image/IMG-20241103-WA0021.jpg'
import { galleryImage } from '../../Config/userApi'



function HeroSection() {

  const [fetchBg,setFetchBg] = useState([])
 
  
    const bgImage = async () => {
      try {
       
        const response = await galleryImage()
        setFetchBg(response.data)
       
      } catch (error) {
        console.error("Registration error:", error.response?.data || error.message);
        throw error
      }
    } 

    useEffect(()=>{
      bgImage()
    },[])

   return (
     <div className='relative'>
        {/* for mobile view */}
      <div className='hero_image   ' style={{background:`url(${fetchBg.find((img) => img.screenType === "mobile" && img.ImageUrl)?.ImageUrl || images})`}}>
      <div className="  image_overlay"></div>
        <div className='flex justify-center'>
        <div className='absolute bottom-20 text-center w-full max-w-md '>
            
        <h2  className='text-[30px] font-semibold text-white'>Capturing Moments</h2>
     <h3 className='mt-1 text-end mr-4 text-2xl font-semibold text-white'>Creating Memories</h3>

     <h4 className='text-[14px] mt-2 font-semibold text-end mr-5 text-white'>Ranjith Babu_Photography</h4>
        </div>
        </div>
       
      </div>
    
    <div className='tablet_Container relative'>
       

       
        <div className='tablet_view  ' style={{background:`url(${fetchBg.find((img) => img.screenType === "tablet" && img.ImageUrl)?.ImageUrl || TabletImage})`}}>
        <div className="  image_overlay"></div>
      <div className='absolute bottom-[10%] flex justify-center flex-col items-center w-full text-white'>
            <h2 className='text-4xl font-bold md:text-4xl lg:text-6xl'>Capturing Moments</h2>
          <h3 className='mt-1  mr-4 text-2xl md:text-2xl font-bold lg:text-4xl lg:mt-2'>Creating Memories</h3>

          <h4 className='text-[16px] mt-4 font-semibold '>Ranjith Babu_Photography</h4>
      </div>
        </div>
    </div>
    </div>


  
  )
}
 
export default HeroSection