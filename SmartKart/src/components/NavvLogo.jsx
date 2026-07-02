import React from 'react'
import { FaCartShopping } from "react-icons/fa6";

const NavvLogo = () => {
  return (
    <div className='nav-logo'>
        <FaCartShopping  className='cart-icon'/>
        <h1>Smart<span>Kart</span></h1>
    </div>
  )
}

export default NavvLogo