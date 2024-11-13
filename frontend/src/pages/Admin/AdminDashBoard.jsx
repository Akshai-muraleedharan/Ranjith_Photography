import React from 'react'
import SideBar from '../../components/admin/dashboard/SideBar'
import { Outlet } from 'react-router-dom'


function AdminDashBoard() {
  return (
    <div className='flex gap-5 pt-5 pb-5 px-10 max-[640px]:px-5'>
     <SideBar/>

     <div><Outlet/></div>
    </div>
  )
}

export default AdminDashBoard