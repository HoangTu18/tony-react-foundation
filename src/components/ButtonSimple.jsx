import React from 'react'

function ButtonSimple({ text = 'Submit', type = "button", ...props }) {
  return (
    <button 
      type={type}
      {...props}
    >
      {text}
    </button>
  )
}

export default ButtonSimple