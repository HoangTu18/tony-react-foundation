import React from 'react';
import ButtonLike from '../components/ButtonLike';
import Typoraphy from '../components/Typoraphy';

function Props({ count }) {
  const [number, setNumber] = React.useState(1);
  const [age, setAge] = React.useState(19)
  const brand = (
    <div>
      <h4>Use Google's location service?</h4>
      <h6>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</h6>
    </div>
  )

  console.log('props:', number)
  console.log('age:', age)

  function handleChangeNumber(event) {
    console.log('handleChangeNumber: ', event)
    setNumber(prevState => prevState + 1)
  }


  return (
    <div>
      <br />
      <ButtonLike 
        text="number"
        type="button"
        onClick={handleChangeNumber}
      />

      <Typoraphy text={number}/>

      <Typoraphy text={brand}/>
    </div>
  )
}

export default Props