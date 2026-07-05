import React from 'react'
import H6 from './H6'
import { Product } from './Context/ProductContext'
import { useContext, useState } from 'react'




const PriceRange = () => {

  const {PriceFilter}  = useContext(Product)


  return (
    <div className='price-range'>
         <H6 title={'Price Ranges'}/>
         <input type='range' min="0" max="300" onChange={((e) => {
             PriceFilter(e.target.value)
         })}></input>
         <div className="low-to-high">
               <p>$0</p>
               <p>$300</p>
         </div>
    </div>
  )
}

export default PriceRange