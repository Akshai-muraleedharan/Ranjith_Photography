import React from 'react'
import { NavLink } from 'react-router-dom'

function UserHeader() {
  return (
    <header className='py-5 px-10 max-[640px]:px-5 flex justify-between items:center bg-[#3D4142]'>
        <h1 className='logo_mobile '>RB_Photography </h1>
        <h1 className='text-white logo  max-[767px]:hidden'>Ranjith Babu_Photography</h1>
        

        <nav className='items:center flex'>
        <ul className='flex gap-4 '>
           <li>
           <NavLink
            style={({isActive}) => {return {color : isActive ?  "skyblue" : ""}}}
             to={'/'} className='text-white nav-item text-[14px]'>Home</NavLink>
           </li>
           
          <li>
          <NavLink 
              style={({isActive}) => {return {color : isActive ? "skyblue" : ""}}}
             to={'gallery'} className='text-white nav-item text-[14px]'>Gallery</NavLink>
          </li>
            
        </ul>
        </nav>
    </header>
  )
}

export default UserHeader
