import React,{ lazy,Suspense } from 'react'
const UserHeader = lazy(() => import('../components/user/UserHeader'));
const UserFooter = lazy(() => import('../components/user/UserFooter'));
import { Outlet } from 'react-router-dom'



function UserLayout() {
  return (
  <div className='min-h-[100vh] flex flex-col relative'>
  <Suspense>
   <UserHeader/>
   </Suspense>
 <Outlet/>
 <Suspense>
   <UserFooter />
   </Suspense>
  </div>
  )
}

export default UserLayout