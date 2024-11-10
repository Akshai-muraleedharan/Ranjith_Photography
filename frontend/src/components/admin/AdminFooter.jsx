import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";

function AdminFooter() {
  return (
    <footer className='py-3 px-10 max-[640px]:px-5 w-full bg-[#3D4142] mt-auto'>
        {/* <div className='flex justify-between'>
        <h2 className='text-white sm:hidden'>RB_Photography </h2>
        <h2 className='text-white logo  max-[640px]:hidden'>Ranjith Babu_Photography</h2>

        <div className='flex gap-3 mt-5 max-[640px]:flex-col text-xs mb-5'>
           <p className='flex items-center text-white gap-2'><FaPhoneAlt/> : 9207160403</p>
           <p className='flex items-center text-white gap-2'><IoMdMail /> : aks@gmail.com</p> 
           </div>
           
        </div> */}
        {/* <div className='flex justify-end mt-3 items-center gap-3 mb-5 mr-4'>
  
        <FaFacebook className='text-blue-500 text-2xl'/>
        <FaWhatsapp className='text-green-500 text-2xl'/>
        <FiInstagram className='rounded-md bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white text-2xl'/>
        </div> */}
       <p className='text-center text-xs text-white'>All Rights Reserved by Ranjith  Babu_Photography</p>
    </footer>
  )
}

export default AdminFooter