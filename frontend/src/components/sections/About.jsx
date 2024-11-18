import React from 'react'
import {motion} from 'framer-motion'
function About() {
  return (
    <div className="py-10 px-10 max-[640px]:px-5 relative about_page flex justify-center items-center gap-5 flex-col md:h-[90vh] lg:h-[90vh] ">
 
    <motion.h1 
    initial={{x:-100,opacity:0}}
    whileInView={{x:0,opacity:1}}
    viewport={{once:true}}
      transition={{
        delay:0.2,
        x:{type:"spring",stiffness:"60"},
        opacity:{duration:0.2},
        ease:"easeIn",
        duration:1
      }}

     className='mt-10  font-bold text-2xl md:text-4xl relative'>About </motion.h1>

    <div className='text-center lg:max-w-3xl '>
      <motion.p 
      initial={{x:-100,opacity:0}}
      whileInView={{x:0,opacity:1}}
      viewport={{once:true}}
      transition={{
        delay:0.9,
        x:{type:"spring",stiffness:"60"},
        opacity:{duration:0.2},
        ease:"easeIn",
        duration:1
      }}
       className="tracking-wide leading-7 font-semibold">I am a passionate wedding photographer dedicated to capturing timeless moments. With a blend of posed and candid styles, I focus on genuine emotions and unique stories. My goal is to create vibrant, true-to-color images that reflect the joy and love of your special day. Let's make memories!</motion.p>
    </div>
 
    </div> 
  
  )
}

export default About