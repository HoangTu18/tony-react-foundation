import React, { memo } from 'react';

import styles from './buttonLink.module.css';

function ButtonLike({ text = 'Submit', name, ...props }) {
  console.log('button like: ', text , name)
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

function areEqual(prevProps, nextProps) {
  return prevProps.name === nextProps.name
}

export default memo(ButtonLike, areEqual)