import React from 'react'
import AdminSecureHeader from '../components/admin/AdminSecureHeader'
import AdminFooter from '../components/admin/AdminFooter'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <div className='min-h-[100vh] flex flex-col relative'>
    <AdminSecureHeader/>
    <Outlet/>
    <AdminFooter/>
    </div>
  )
}

export default AdminLayout