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
  }, [])

 const filterProducts = (categoryName) => {
    
    if (categoryName === 'all') {
      setDisplayData(MainData);
    }
    else {
      
      const filtered = MainData.filter((item) => categoryName.includes(item.category));
      setDisplayData(filtered); 
    }
  };
  


  return (
    <div> 
         <Product.Provider value={{DisplayData, MainData, filterProducts, }}>
           {props.children}
         </Product.Provider>
    </div>
  )
}

export default ProductContext


