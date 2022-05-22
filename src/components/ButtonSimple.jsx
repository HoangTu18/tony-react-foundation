import React from 'react'

function ButtonSimple({ text = 'Submit', ...props }) {
  return (
    <button 
      {...props}
    >
      {text}
    </button>
  )
}

export default ButtonSimple