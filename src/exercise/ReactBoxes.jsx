import React, { useState } from 'react';

// components
import Typoraphy from '../components/Typoraphy';
import InputSimple from '../components/InputSimple';

// ui -> user click -> action -> update new state -> update new UI

function Boxes() {
    // state
    const [typographyKey, setTypographyKey] = useState(false); 
    const [name, setName] = useState('');


    // actions
    function onChangeName(e) {
      const value = e.target.value
      setName(value);
    }

    // UI
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

            <button type='button' onClick={() => setTypographyKey(prevState => !prevState)}>Submit</button> 

            <Typoraphy 
              key={typographyKey}
              text={`Hello`}
            />

           
        </div>
    )
}

export default Boxes;