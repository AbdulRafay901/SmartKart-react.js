import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const NavIcons = () => {
  return (
    <div className='nav-icon'>
        <IoPersonOutline className='icon'/>
        <FaRegHeart className='icon'/>
        <IoCartOutline className='icon'/>
    </div>
  )
}

export default NavIcons