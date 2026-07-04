import React from 'react'

const CategoriesBtn = ({text, clickAction}) => {
  return (
    <div>
          <button onClick={clickAction}>{text}</button>
    </div>
  )
}

export default CategoriesBtn