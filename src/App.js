import './App.css';
import React, { useState } from 'react';

import TitleSimple from './components/TitleSimple';
import ButtonLike from './components/ButtonLike';

import StateFullComponent from './components/StateFullComponent';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // variable render html
  const element1 = (
    <div>
      <h1>h1variable render html</h1>
      <h2>variable render html</h2>
    </div>
  );
  // function render html
  function renderListProduct() {
    return (
      <div>
        function render html
      </div>
    )
  }

  // arrow function render html
  const renderListUser = () => {
    return (
      <div>
        arrow function render html
      </div>
    )
  }

  // syntax short arrow function
  const renderListShort = () => (
    <div>
      arrow function  syntax short render html
    </div>
  )

  return (  
    <div className="App">
      {/* expression in jsx */}
      {isLoading ? (
        <TitleSimple 
          name="truong"  // string
          age={true} // boolean
          todos={['truong', 'abc']} // array 
          todoItem={{ title: 'react', price: 10 }} // object
          like={<ButtonLike />} 
        />
      ) : (
        '123'
      )}

      <div>
        item 1
      </div>
      <div>
        item 2
      </div>
      <input type="text" />
      <br />
      <div />

      {element1}
      {renderListProduct()}
      {renderListUser()}
      {renderListShort()}

      <TitleSimple 
        name="tu"  // string
      />

      <br />
      <h4>ButtonLike in Page A</h4>
      <ButtonLike 
        type="button"
        text="Cancel"
        className="buttonA"
        onClick={() => {
          console.log('buttonA')
        }}
        name="truomg"
      />

      <h4>ButtonLike in Page B</h4>
      <ButtonLike 
        type="submit"
        className="buttonB"
        onClick={() => {
          console.log('buttonB')
        }}
        name="tu"
      />
      

      <h2>State full component</h2>
      <StateFullComponent />


      <br />
      <br />
      <br /><br /><br /><br /><br /><br /><br />
    </div>
  );
  
}

export default App;
