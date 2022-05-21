import React from 'react'

function ComposeComponent() {
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };
  
  return (
    <div>ComposeComponent</div>
  )
}

export default ComposeComponent