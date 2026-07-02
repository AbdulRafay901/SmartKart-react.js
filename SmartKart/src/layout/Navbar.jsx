import React from 'react'
import NavvLogo from '../components/NavvLogo'
import SearchBar from '../components/SearchBar'
import NavIcons from '../components/NavIcons'


const Navbar = () => {
  return (
    <div className='navbar'>
         <NavvLogo />
         <SearchBar />
         <NavIcons />
    </div>
  )
}

export default Navbar