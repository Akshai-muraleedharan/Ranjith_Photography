import React, { useState } from 'react'
import {TbUsers} from "react-icons/tb"
import { LuBox } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { BiCameraMovie } from "react-icons/bi";
import { GiTheater } from "react-icons/gi";


function SideBar() {

  const [activeLink,setActiveLink] =useState(0)

  const handleClick = (index) => {
        setActiveLink(index)
  }

  const sideBar_link =[
    {id:1, path:'data',name:"Dashboard", icon:LuBox},
    {id:2, path:'users',name:"Users", icon:TbUsers},
    {id:4, path:'movies',name:"Movies", icon:BiCameraMovie},
    {id:5, path:'theaters',name:"theaters", icon:GiTheater},
    // {id:6, path:'/work',name:"Work plan", icon:SlCalender}
  ]
  return (
    <div className='w-16 md:w-56 h-[77vh] rounded p-3 border border-slate-100 shadow-xl'>
      <ul className=' space-y-6'>
        {sideBar_link.map((link,index)=> (
          <li key={link.id} className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-indigo-500 ${activeLink === index ? "bg-indigo-100 text-indigo-500" :""}`}>
            <Link to={link.path} className='flex justify-center md:justify-start items-center  md:space-x-5' onClick={()=> handleClick(index)}>
            <span>{link.icon()}</span>
            <span className='text-sm text-gray-500 hidden md:flex'>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideBar