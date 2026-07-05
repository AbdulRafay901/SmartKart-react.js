import React, {useContext, useEffect} from 'react'
import CategoryCheck from './CategoryCheck'
import H6 from './H6'
import ProductContext from './Context/ProductContext'
import { Product } from './Context/ProductContext'
import { useState } from 'react'

const CheckCategories = () => {
  const { filterProducts } = useContext(Product);

  const [selectedCategories, setSelectedCategories] = useState([]);

  function Checkbox(e) {
    const { checked, value } = e.target;

    if (checked) {
      setSelectedCategories((prev) => [...prev, value]);
    } else {
      setSelectedCategories((prev) =>
        prev.filter((item) => item !== value)
      );
    }
  }

  useEffect(() => {
    if (selectedCategories.length === 0) {
      filterProducts("all");
    } else {
      filterProducts(selectedCategories);
    }
  }, [selectedCategories]);

  return (
    <div className="check-categories">
      <H6 title="Categories" />

      <CategoryCheck
        label="Mens' Shirt"
        value="men's clothing"
        action={Checkbox}
        checked={selectedCategories.includes("men's clothing")}
      />

      <CategoryCheck
        label="Womens' Shirt"
        value="women's clothing"
        action={Checkbox}
        checked={selectedCategories.includes("women's clothing")}
      />

      <CategoryCheck
        label="Electronics"
        value="electronics"
        action={Checkbox}
        checked={selectedCategories.includes("electronics")}
      />

      <CategoryCheck
        label="Jewelery"
        value="jewelery"
        action={Checkbox}
        checked={selectedCategories.includes("jewelery")}
      />
    </div>
  );
};

export default CheckCategories;