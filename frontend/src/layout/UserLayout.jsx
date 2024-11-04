import React from 'react'
import UserHeader from '../components/user/UserHeader'
import UserFooter from '../components/user/UserFooter'
import { Outlet } from 'react-router-dom'

function UserLayout() {
  return (
  <div className='min-h-[100vh] flex flex-col relative'>
  
   <UserHeader/>

 <Outlet/>

   <UserFooter />
  </div>
  )
}

export default UserLayout