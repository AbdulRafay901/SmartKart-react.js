import React from 'react'
import SizeRadio from './SizeRadio'
import H6 from './H6'
import { useContext, useState } from 'react'
import { Product } from './Context/ProductContext'

const Size = () => {

  const {filterProducts} = useContext(Product)
    
  return (
    <div className='Size'>
         <H6 title="Size"/>
         <div className="radios">
         <SizeRadio label="S" value="S" 
          action={(e) => {
            filterProducts(e.target.value)
          }}/>
         <SizeRadio label="M"/>
         <SizeRadio label="L"/>
         <SizeRadio label="XL"/>
         </div>
    </div>
  )
}

export default Size