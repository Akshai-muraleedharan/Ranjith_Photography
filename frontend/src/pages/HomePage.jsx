import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import PlanSection from '../components/sections/PlanSection'
import ContactSection from '../components/sections/ContactSection'
import About from '../components/sections/About'
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom'
function HomePage() {
  return (
    <div className='bg-slate-100'>
      <Link to={"https://wa.me/+919297160407"} className='whatsapp_float'>
      <FaWhatsapp  className='whatsapp-icon'/>
      </Link>
    <HeroSection/>
    <About/>
    <PlanSection/>
    <ContactSection/>
  
    </div>
  )
}

export default HomePage