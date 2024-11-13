import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { adminLogOut } from '../../Config/adminApi'



function AdminSecureHeader() {

 
  const navigate = useNavigate()
  const logoutBtn = () => {
    try {
      adminLogOut()
      navigate("/admin/login")
     
    } catch (error) {
     
      console.error( error.response?.data || error.message);
    }
   
  }

  

  return (
    <header className='py-5 px-10 max-[640px]:px-5 flex justify-between items-baseline bg-[#3D4142]'>
        <h2 className='text-white sm:hidden'>RB_Photography </h2>
        <h2 className='text-white logo  max-[640px]:hidden'>Ranjith Babu_Photography</h2>
        

        <nav className='items-center flex'>
        <ul className='flex gap-2 md:gap-4 items-baseline'>
            <li>
              <NavLink
            style={({isActive}) => {return {color : isActive ?  "skyblue" : ""}}}
             to={'/admin/home'} className='text-white nav-item text-[14px]'>Home</NavLink>
             </li>

             <li>
            <NavLink 
              style={({isActive}) => {return {color : isActive ? "skyblue" : ""}}}
             to={'/admin/gallery'} className='text-white nav-item text-[14px]'>Gallery</NavLink>
             </li>

                  <div className="dropdown dropdown-bottom dropdown-end">
  <div tabIndex={0} role="button" className='text-white nav-item text-[14px]'>Admin</div>
  <ul tabIndex={0} className="dropdown-content text-md menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><Link to={"/admin/profile"}>profile</Link></li>
    <li><Link to={"/admin/dashboard"}>Dashboard</Link></li>
    <li><span onClick={logoutBtn}>log-out</span></li>
  </ul>
</div>
        </ul>
        </nav>
  
    </header>
  )
}

export default AdminSecureHeader
