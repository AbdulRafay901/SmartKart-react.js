import React from 'react'
import Star from './Star'
import SimpleStar from './SimpleStar'
import Button from './Button'

const Cart = ({ name, img, price, id, rating }) => {
 
  const starCount = Math.round(rating?.rate || rating || 0);

  return (
    <div className='col-lg-4' key={id}>
         <div className="cart">
                <div className="img">
                     
                     <img src={img} alt={name} className="img-fluid" />
                </div>
                <div className="content">
                      <p className='name' style={{fontSize:'15px'}}>{name}</p>
                      <div className="rating">
                           
                          
                           {Array.from({ length: 5 }).map((_, index) => (
                               index < starCount ? <SimpleStar key={index} /> : <Star key={index} />
                           ))}

                      </div>
                      <p className='price' style={{fontSize:'15px'}}>${price}</p>
                      <Button text='Add to Cart' size='15px'/>
                </div>
         </div>
    </div>
  )
}

export default Cart