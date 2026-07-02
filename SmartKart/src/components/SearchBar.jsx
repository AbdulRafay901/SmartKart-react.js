import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMdArrowForward } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className='search-bar'>
         <CiSearch className='search-icon'/>
         <input type="search" placeholder='Search'></input>
         <div className="arrow-div">
               <IoMdArrowForward className='arrow-icon'/>
         </div>
    </div>
  )
}

export default SearchBar