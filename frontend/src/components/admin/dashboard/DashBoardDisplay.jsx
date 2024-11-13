import React, { useEffect, useState } from 'react'
import { adminGallery } from '../../../Config/adminApi'

function DashBoardDisplay() {
const [galleryLength,setGalleryLength] = useState("")
const [checkImage,setCheckImage] = useState([])



const findBg = checkImage.filter((item) => item.bgType === true )


  const fetchGallery = async () => {
    try {
      const response = await adminGallery()
      setGalleryLength(response.dataLength)
      setCheckImage(response.data)
    } catch (error) {
      console.error( error.response?.data || error.message);
    }
  }

  useEffect(()=>{
    fetchGallery()
  },[])
  return (
    <div className='mx-auto grid grid-cols-1 md:grid-cols-2 gap-3'>
        <div className='w-52 h-52 rounded font-semibold bg-slate-100 flex justify-center items-center'>
          Total Image : {galleryLength}
        </div>
<div className='w-52 h-52 rounded font-semibold bg-slate-100 flex justify-center items-center'>BackGround Images : {findBg.length}</div>
    </div>
  )
}

export default DashBoardDisplay