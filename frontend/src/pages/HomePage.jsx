import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import PlanSection from '../components/sections/PlanSection'
import ContactSection from '../components/sections/ContactSection'

function HomePage() {
  return (
    <div className='bg-slate-100'>
    <HeroSection/>
    <PlanSection/>
    <ContactSection/>
    </div>
  )
}

export default HomePage