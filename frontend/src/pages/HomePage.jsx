import React from 'react'
import { lazy,Suspense } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom'
import LoadingComponent from '../components/usedComponents/LoadingComponent';



const HeroSection = lazy(() => import('../components/sections/HeroSection'));
const PlanSection = lazy(() => import('../components/sections/PlanSection'));
const ContactSection = lazy(() => import('../components/sections/ContactSection'));
const About = lazy(() => import('../components/sections/About'));

function HomePage() {
  return (
    <div className='bg-slate-100'>
      <Link to={"https://wa.me/9207160407"} className='whatsapp_float'>
      <FaWhatsapp  className='whatsapp-icon'/>
      </Link>
      <Suspense fallback={<LoadingComponent/>}>
    <HeroSection/>

    <About/>
    
    <PlanSection/>
    
    <ContactSection/> 
    </Suspense>
    
    </div>
  )
}

export default HomePage