import React from 'react'
import images from '../../assets/image/test.jpg'
function HeroSection() {
  return (
    <div>
      <div className='hero_image relative' style={{background:`url(${images})`}}>
        <div className='absolute bottom-20 text-center w-full'>
            
        <h2 className='text-4xl font-semibold text-white'>Capturing Moments</h2>
     <h3 className='mt-2 text-end mr-4 text-2xl font-semibold text-white'>Creating Memories</h3>

     <h4 className='text-[18px] mt-4 font-semibold text-white'>Ranjith Babu_Photography</h4>
        </div>
      </div>
    
    </div>
  )
}
 
export default HeroSection