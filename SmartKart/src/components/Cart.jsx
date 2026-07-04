import React from 'react'

import Star from './Star'
import SimpleStar from './SimpleStar'
import Button from './Button'

const Cart = ({name,img,price}) => {
  return (
    <div className='col-lg-4'>
         <div className="cart">
                <div className="img">
                     <img src={img}></img>
                </div>
                <div className="content">
                      <p className='name'>{name}</p>
                      <div className="rating">
                         <SimpleStar />
                         <SimpleStar />
                         <SimpleStar />
                         <SimpleStar />
                         <Star/>  
                      </div>
                      <p className='price'>${price}</p>
                      <Button text='Add to Cart'/>
                </div>
          </div>
    </div>
  )
}

export default Cart