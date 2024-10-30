import React from 'react'
import { Link } from 'react-router-dom'

function UserHeader() {
  return (
    <header className='py-5 px-10 max-[640px]:px-5 flex justify-between items:center bg-[#3D4142]'>
        <h2 className='text-white sm:hidden'>RB_Photography </h2>
        <h2 className='text-white logo  max-[640px]:hidden'>Ranjith Babu_Photography</h2>
        

        <nav className='items:center flex'>
        <ul className='flex gap-4 '>
            <Link to={'/'} className='text-white nav-item text-[14px]'>Home</Link>
            <Link to={'gallery'} className='text-white nav-item text-[14px]'>Gallery</Link>
        </ul>
        </nav>
    </header>
  )
}

export default UserHeader
