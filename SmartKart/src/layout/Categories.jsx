import React, { useContext } from 'react';
import CategoriesBtn from '../components/CategoriesBtn';
import { Product } from '../components/Context/ProductContext';

const Categories = () => {
  
  const { filterProducts } = useContext(Product);

  return (
    <div className='categories'>
      <div className="links ">
         <CategoriesBtn text="New Arrival" clickAction={() => filterProducts('all') } />
         <CategoriesBtn text="Men" clickAction={() => filterProducts("men's clothing")} />
         <CategoriesBtn text="Women" clickAction={() => filterProducts("women's clothing")} />
         <CategoriesBtn text="Electronics" clickAction={() => filterProducts("electronics")} />
         <CategoriesBtn text="Jewelry" clickAction={() => filterProducts("jewelery")} />
      </div>
    </div>
  );
};

export default Categories;