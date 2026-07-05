import React from 'react'

const CategoryCheck = ({label,action, value, checked}) => {
  return (
    <div>
          <label>
          <input type="checkbox" onChange={action} value={value} checked={checked}></input>
           {label}
          </label>
    </div>
  )
}

export default CategoryCheck