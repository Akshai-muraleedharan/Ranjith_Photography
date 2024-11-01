import React from 'react'
import images from '../../assets/image/IMG-20241014-WA0038.jpg'
function HeroSection() {
  return (
    <div className='relative'>
        {/* for mobile view */}
      <div className='hero_image ' style={{background:`url(${images})`}}>
      <div className="hero-overlay bg-opacity-60 image_overlay"></div>
        <div className='flex justify-center'>
        <div className='absolute bottom-20 text-center w-full max-w-md '>
            
        <h2 className='text-[30px] font-semibold text-white'>Capturing Moments</h2>
     <h3 className='mt-1 text-end mr-4 text-2xl font-semibold text-white'>Creating Memories</h3>

     <h4 className='text-[14px] mt-2 font-semibold text-end mr-5 text-white'>Ranjith Babu_Photography</h4>
        </div>
        </div>
       
      </div>
    
    <div className='px-10 py-8 tablet_Container flex justify-between lg:justify-evenly'>
        {/* text container */}
        <div className='flex flex-col justify-center'>
        <h2 className='text-4xl font-bold lg:text-6xl'>Capturing Moments</h2>
     <h3 className='mt-1 text-end mr-4 text-2xl font-bold lg:text-4xl lg:mt-2'>Creating Memories</h3>

     <h4 className='text-[16px] mt-4 font-semibold text-end'>Ranjith Babu_Photography</h4>
        </div>

       
        <div className='tablet_view rounded my-3' style={{background:`url(${images})`}}></div>
    </div>
    </div>


  
  )
}
 
export default HeroSection