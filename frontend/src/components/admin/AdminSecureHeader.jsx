import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import useAuthStore from '../../store/authStore';

function AdminSecureHeader() {

  const {  logout } = useAuthStore();
  const navigate = useNavigate()
  const logoutBtn = () => {
    logout()
    navigate("/admin/login")
  }

  return (
    <header className='py-5 px-10 max-[640px]:px-5 flex justify-between items-baseline bg-[#3D4142]'>
        <h2 className='text-white sm:hidden'>RB_Photography </h2>
        <h2 className='text-white logo  max-[640px]:hidden'>Ranjith Babu_Photography</h2>
        

        <nav className='items-center flex'>
        <ul className='flex gap-2 md:gap-4 '>
            <NavLink
            style={({isActive}) => {return {color : isActive ?  "skyblue" : ""}}}
             to={'/admin/home'} className='text-white nav-item text-[14px]'>Home</NavLink>
            <NavLink 
              style={({isActive}) => {return {color : isActive ? "skyblue" : ""}}}
             to={'/admin/gallery'} className='text-white nav-item text-[14px]'>Gallery</NavLink>
                  <div className="dropdown dropdown-bottom dropdown-end">
  <div tabIndex={0} role="button" className='text-white nav-item text-[14px]'>Admin</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><p>profile</p></li>
    <li><p>Dashboard</p></li>
    <li><span onClick={logoutBtn}>log-out</span></li>
  </ul>
</div>
        </ul>
        </nav>
  
    </header>
  )
}

export default AdminSecureHeader
