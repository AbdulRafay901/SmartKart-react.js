import React from 'react'

const SizeRadio = ({label, action, value}) => {
  return (
    <div>
         <label htmlFor="radio">
            <input type="radio" id='radio' onClick={action} value={value} hidden></input>
            {label}
         </label>
    </div>
  )
}

export default SizeRadio