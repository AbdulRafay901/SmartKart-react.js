import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


  export const Product = createContext()

const ProductContext = (props) => {

  const [MainData, setMainData] = useState([])
  const [DisplayData, setDisplayData] = useState([])

  useEffect(() => {
     const fetch = async () => {
          const {data} = await axios.get('https://fakestoreapi.com/products');

          setMainData(data)
          setDisplayData(data)
      }

      fetch()
  })


  return (
    <div> 
         <Product.Provider value={{DisplayData, MainData}}>
           {props.children}
         </Product.Provider>
    </div>
  )
}

export default ProductContext