import React from 'react'

const Button = ({text,size, clickAction}) => {
  return (
    <button className='Button' style={{fontSize:`${size}`}} onClick={clickAction}>{text}</button>
  )
}

export default Button