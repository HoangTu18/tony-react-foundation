import React from 'react'

function TitleSimple({ name, age, todoItem, like, ...props }) {
  console.log('TitleSimple: ', name, age)
  console.log('TitleSimple props:  ', props)
  
  return (
    <div>
      <h3>TitleSimple component</h3>
      Confirm? <br />
      Do you want to delete it?
      <br />
      Name: {name}

      {todoItem && (
        <>
          <h5>Todo item</h5>
          Todo title: {todoItem?.title}
          Todo price: {todoItem?.price}
        </>
      )}

      

      Like: {like}

      <br />
      <br />
      <br />
    </div>
  )
}

export default TitleSimple