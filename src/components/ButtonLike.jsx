import React from 'react';

import styles from './buttonLink.module.css';

function ButtonLike({ text = 'Submit', name, ...props }) {
  console.log('button like')
  return (
    <div>
      <button 
        className={styles.buttonSimple}
        {...props}
      >
        {text}
      </button>
      Name: {name}
    </div>
  )
}

export default ButtonLike