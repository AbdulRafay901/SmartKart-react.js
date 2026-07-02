import React from 'react'
import CategoriesBtn from '../components/CategoriesBtn'

const Categories = () => {
  return (
    <div className='categories'>
          <div className="links">
                 <CategoriesBtn text="New Arrival"/>
                 <CategoriesBtn text="Men"/>
                 <CategoriesBtn text="Women"/>
                 <CategoriesBtn text="Electronics"/>
                 <CategoriesBtn text="Home & Living"/>
                 <CategoriesBtn text="Offers"/>
          </div>
    </div>
  )
}

export default Categories