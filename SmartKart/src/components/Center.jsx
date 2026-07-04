import React from 'react'
import { useState } from 'react'
import Cart from './Cart'
import { useEffect } from 'react'
import axios from 'axios'; 


const Center = () => {

  const [Alldata, setAlldata] = useState()


 const fetch = async () => {
     const {data} = await axios.get('https://fakestoreapi.com/products');
     
    const modified = data.map(products => ({
        ...products,
        colors: ['Black', 'White', 'Blue'], 
        sizes: ['S', 'M', 'L']
    }))

    setAlldata(modified)

    console.log(Alldata)
  }
fetch()

  
  
  

  return (
    <div className='center'>
        <div className="container-fluid p-0">
              <div className="row gy-3 gx-3">
                    
                  
                    
              </div>
        </div>
    </div>
  )
}

export default Center