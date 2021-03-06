import './App.css';
import React, { useState } from 'react';
import { Route, Routes, Link, NavLink } from 'react-router-dom';

import TitleSimple from './components/TitleSimple';
import ButtonLike from './components/ButtonLike';

import StateFullComponent from './components/StateFullComponent';
import Props from './pages/Props';
import StateObject from './pages/StateObject';
import ConditionalRender from './pages/ConditionalRender';
import Styleling from './pages/Styleling';
import Form from './pages/Form';
import UserReducer from './pages/UserReducer';
import UseRef from './pages/UseRef';
import ReactPortal from './pages/ReactPortal';
import ResizeComponent from './pages/ResizeComponent';
import Authenticate from './pages/Authenticate';

import ContactUs from './pages/ContactUs';
import About from './pages/About';

// exercise
import ComposeComponent from './exercise/ComposeComponent';
import ReactBoxes from './exercise/ReactBoxes';
import LiftingStateUp from './exercise/LiftingStateUp';
import Hooks from './pages/Hooks';
import ColorBox from './exercise/ColorBox';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = React.useState(1);



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

    <h1>React router dom</h1>
    <nav>
      <Link to="/contact/1">Contact</Link> |{" "}
      <Link to="about">About</Link>
    </nav>

    <Routes>
        <Route 
          path="/about" element={<About />}
        />
        <Route 
          path="/contact/:id/:slug" element={<ContactUs />}
        />
    </Routes>
      
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

      <h2> Props </h2>
      <Props count={count} />


      <h2>State Object</h2>
      <StateObject />


      <h3>Styleling</h3>
      <Styleling />

      <h2>Exercise</h2>
      <h3>Compose Component</h3>
      <ComposeComponent />

      <h3>ReactBoxes</h3>
      <ReactBoxes />

      <h3>Conditional Render</h3>
      <ConditionalRender />

      <h3>Lifting State Up</h3>
      <LiftingStateUp />

      <Form />

      <h3>React hooks & memo</h3>
      <Hooks />

      <h3>ColorBox exercise</h3>
      <ColorBox />

      <h3> useReducer hooks</h3>
      <UserReducer />

      <h3>useRef</h3>
      <UseRef />

      <h3>React Portal</h3>
      <ReactPortal />


      <h3>Custom Hook</h3>
      <ResizeComponent />

      <h3>Authenticate</h3>
      <Authenticate />
      <br />
      <br />
      <br /><br /><br /><br /><br /><br /><br />
    </div>
  );
  
}

export default App;
