import React from 'react';
import clsx from 'clsx';

function Styleling() {
  const [colorText, setColorText] = React.useState('#000');
  const fontSize = 30;
  const myStyle = {
    fontSize: 30,
    color: colorText,
    backgroundColor: 'white'
  }
  
  return (
    <div>
      <div 
      style={myStyle} 
      // className={`container pt-3 mb-3 ${colorText === '#f00' ? 'red' : 'yellow'} ${fontSize === 30 && 'bold'}`}
      className={clsx(
        "container pt-3 mb-3",
        colorText === '#f00' ? 'red' : 'yellow',
        fontSize === 30 && 'bold'
      )}
      >
        Styleling
      </div>
      Color Button:
      <button type='button' onClick={() => setColorText('#f00')}>Red</button>
      <button type='button' onClick={() => setColorText('#ff0')}>Yellow</button>
    </div>
  )
}

export default Styleling