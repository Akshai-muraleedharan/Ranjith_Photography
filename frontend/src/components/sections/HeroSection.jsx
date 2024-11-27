import React, { useEffect, useState } from 'react'
import images from '../../assets/image/IMG-20241014-WA0038.jpg'
import TabletImage from '../../assets/image/IMG-20241103-WA0021.jpg'
import { backgroundImage } from '../../Config/userApi'
import styled from 'styled-components';


function HeroSection() {

  const [fetchBg,setFetchBg] = useState([])
  const [loading,setLoading] = useState(true)
  
console.log(fetchBg)
 
    const bgImage = async () => {
      try {
       
        const response = await backgroundImage()
        setFetchBg(response.data)
        
    setLoading(false)
      } catch (error) {
        
        console.error("Registration error:", error.response?.data || error.message);
        throw error
      }
    } 

    const StyledDiv = styled.div`
     width: 100%;
     height: 90vh;
     background-image: url(${fetchBg.find((img) => img.screenSize === "1024")?.ImageUrl});
  background-position: center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center center;



  @media (min-width: 320px) and (max-width: 449px) {
      background-image: url(${fetchBg.find((img) => img.screenSize === "320")?.ImageUrl}); /* Default 1x version */
    }

    @media (min-width: 450px) and (max-width: 767px) {
      background-image: url(${fetchBg.find((img) => img.screenSize === "400")?.ImageUrl}); /* Default 1x version */
    }

    @media (min-width: 768px) and (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 2), (min-width: 768px) and (max-width: 1024px) and (min-resolution: 192dpi) {
      background-image: url(${fetchBg.find((img) => img.screenSize === "800")?.ImageUrl}); /* 2x version for Retina */
    }

    `
  
   
   useEffect(()=>{
    if(fetchBg.length === 0){
    bgImage() 

  }
   },[])
  
       
    

   return (
     <div className='relative'>
        {/* for mobile view */}
  { loading ? <div className="hero_image_loading skeleton rounded-none  h-[90vh] w-full flex justify-center items-center"> <h2>loading...</h2></div>:  
   <StyledDiv  >
      <div className="  image_overlay "></div>
        <div className='flex justify-center'>
         <div className='absolute bottom-20 text-center w-full max-w-md '>
            
        <h2  className='caption'>Capturing Moments</h2>
     <h3 className='mt-1 text-end mr-4 text-2xl font-semibold text-white'>Creating Memories</h3>

     <h4 className='text-[14px] mt-2 font-semibold text-end mr-5 text-white'>Ranjith Babu_Photography</h4>
        </div> 
        </div>
       
      </StyledDiv>}
    
     {/* <div className='tablet_Container relative'>
         
      {loading ? <div className="skeleton rounded-none tablet_view_loading  h-[90vh] w-full flex justify-center items-center"> <h2>loading...</h2></div> :   <div className='tablet_view  ' style={{background:`url(${fetchBg.find((img) => img.screenType === "tablet" && img.ImageUrl)?.ImageUrl || TabletImage})`}}>
        <div className="  image_overlay"></div> 
       <div className='absolute bottom-[10%] flex justify-center flex-col items-center w-full text-white'>
            <h2 className='text-4xl font-bold md:text-4xl lg:text-6xl'>Capturing Moments</h2>
          <h3 className='mt-1  mr-4 text-2xl md:text-2xl font-bold lg:text-4xl lg:mt-2'>Creating Memories</h3>

          <h4 className='text-[16px] mt-4 font-semibold '>Ranjith Babu_Photography</h4>
      </div> 
        </div>}
    </div> */}
    </div>


  
  )
}
 
export default HeroSection