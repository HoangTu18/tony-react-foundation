import React, { useState } from 'react';

// components
import Typoraphy from '../components/Typoraphy';
import InputSimple from '../components/InputSimple';

function Boxes() {
    const [name, setName] = useState('');

    function onChangeName(e) {
      const value = e.target.value
      setName(value);
    }

    return (
        <div>
            <InputSimple 
                type ="text"
                placeholder = "type here..."
                onChange={onChangeName}
                // onChange = {(e) =>{
                //     const value = e.target.value
                //     setName(value);
                // }}
            />

            <Typoraphy 
                text={`Hello: ${name}`}
            />
        </div>
    )
}

export default Boxes;