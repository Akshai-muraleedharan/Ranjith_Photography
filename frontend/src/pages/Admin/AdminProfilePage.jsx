// import React, { useEffect, useState } from 'react'
// import { adminProfile } from '../../Config/adminApi'
// import AdminUpdateProfile from '../../components/admin/AdminUpdateProfile'
// import AdminPasswordUpdate from '../../components/admin/AdminPasswordUpdate'
// import LoadingComponent from '../../components/usedComponents/LoadingComponent'

// function AdminProfilePage() {
//  const[profile,setProfile] = useState([])
// const [update,setUpdate] = useState(false)
// const [updatePassword,setUpdatePassword] = useState(false)
// const [loading,setLoading] = useState(false)

//   const fetchProfile =async () => {
//     try {
//       setLoading(true)
//       const response = await adminProfile()
//       setProfile(response)
//       setLoading(false)
//     } catch (error) {
//       setLoading(false)
//       console.error( error.response?.data || error.message);
//     }
//   }

//   const updatePage = ()=> {
//     setUpdate(true)
//   }

//   const passwordUpdate = () => {
//     setUpdatePassword(true)
//   }

//   useEffect(()=>{
//     fetchProfile()
//   },[])
//   return (
//     <div className="py-5 px-10 max-[640px]:px-5 relative my-auto">
//      { update ? <AdminUpdateProfile setUpdate={setUpdate} profile={profile} fetchProfile={fetchProfile}/> : updatePassword ? <AdminPasswordUpdate setUpdatePassword={setUpdatePassword} /> :
//        <div>     
//      <h1 className=' text-2xl text-center font-semibold md:font-bold mb-10'>Profile</h1>

        
// {
//  loading ? <LoadingComponent/> : <div className="max-w-sm mx-auto my-auto ">
//   <div className="mb-5">
//     <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
//     <h4 className='font-semibold py-1 px-2 border rounded'>{profile.username}</h4>
//   </div>
//   <div className="mb-5">
//     <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
//     <h4 className='font-semibold py-1 px-2 border rounded'>{profile.email}</h4>
//   </div>
//  <div className='flex md:justify-end flex-col gap-5'>
//  <button onClick={updatePage} className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Profile</button>
//  <button onClick={passwordUpdate} className="text-white  bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800">Reset passwod</button>
//  </div>
  
// </div>

// }
// </div> 
// }
//     </div>
//   )
// }

// export default AdminProfilePage