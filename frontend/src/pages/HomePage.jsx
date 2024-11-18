import React from 'react'
import { lazy,Suspense } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom'




const HeroSection = lazy(() => import('../components/sections/HeroSection'));
const PlanSection = lazy(() => import('../components/sections/PlanSection'));
const ContactSection = lazy(() => import('../components/sections/ContactSection'));
const About = lazy(() => import('../components/sections/About'));

function HomePage() {
  return (
    <div className='bg-slate-100'>
      <Link to={"https://wa.me/+919207160407"} className='whatsapp_float'>
      <FaWhatsapp  className='whatsapp-icon'/>
      </Link>

      <Suspense >
    <HeroSection/>
    </Suspense>
 
    <Suspense >
    <About/>
    </Suspense>

    <Suspense >
    <PlanSection/>
        </Suspense>

        <Suspense >
    <ContactSection/> 
    </Suspense>
     
    </div>
  )
}

export default HomePage