import React from 'react'

function ButtonLike({ text = 'Submit', name, ...props }) {
  console.log('button like')
  return (
    <div>
      <button 
        {...props}
      >
        {text}
      </button>
      Name: {name}
    </div>
  )
}

export default ButtonLike