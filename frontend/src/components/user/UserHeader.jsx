import React from 'react'
import { NavLink } from 'react-router-dom'

function UserHeader() {
  return (
    <header className='py-5 px-10 max-[640px]:px-5 flex justify-between items:center bg-[#3D4142]'>
        <h2 className='text-white sm:hidden'>RB_Photography </h2>
        <h2 className='text-white logo  max-[640px]:hidden'>Ranjith Babu_Photography</h2>
        

        <nav className='items:center flex'>
        <ul className='flex gap-4 '>
            <NavLink
            style={({isActive}) => {return {color : isActive ?  "skyblue" : ""}}}
             to={'/'} className='text-white nav-item text-[14px]'>Home</NavLink>
            <NavLink 
              style={({isActive}) => {return {color : isActive ? "skyblue" : ""}}}
             to={'gallery'} className='text-white nav-item text-[14px]'>Gallery</NavLink>
            
        </ul>
        </nav>
    </header>
  )
}

export default UserHeader
