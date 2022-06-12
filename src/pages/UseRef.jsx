import React from 'react';

function UseRef() {
  // states
  const [firstName, setFirstName] = React.useState('Project_04282022_220312');
  const [isFlag, setIsFlag] = React.useState(false);
  // refs
  const firstNameRef = React.useRef(null);
  const firstRenderRef = React.useRef(true);

  // variable javascript
  let lastNameJS = 'truong';

  // side effect
  // React.useEffect(() => {
  //   if(!firstNameRef.current) return;
  //   firstNameRef.current.focus();
  //   firstNameRef.current.setSelectionRange(0, firstNameRef.current.value.length);
  // }, [])

  // function scrollToTargetAdjusted(ref, value) {
  //   var element = ref.current;
  //   var yOffset = 20;
  //   var offsetPosition =
  //     element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  //   window.scrollTo({
  //     top: offsetPosition,
  //     behavior: "smooth",
  //   });

  //   // window.history.replaceState(null, "", `/?section=${value}`);
  // }

  // skip first render
  console.log('first reneder lastNameJS: ', lastNameJS)
  React.useEffect(() => {
    if(firstRenderRef.current)  {
      firstRenderRef.current = false;
      lastNameJS = 'tu';
      console.log('after run effect lastNameJS: ', lastNameJS)
      console.log('after run effect firstRenderRef: ', firstRenderRef.current)
      return;
    }

    console.log('re-render ref: ', firstRenderRef.current)
    console.log('re-render lastNameJS: ', lastNameJS)

  }, [isFlag])

  // actions
  function onSubmit() {
    console.log('ref :', firstNameRef.current);
    firstNameRef.current.focus();
    setIsFlag(prevState => !prevState)
  }

  function onEdit() {
    firstNameRef.current.focus();
    firstNameRef.current.setSelectionRange(0, firstNameRef.current.value.length);
    console.log('edit: ', firstName);
  }

  function onChangeFirstName(e) {
    setFirstName(e.target.value)
  }

  // view
  return (
    <div>
      <input ref={firstNameRef} type="text" placeholder='firstName' value={firstName} onChange={onChangeFirstName} />
      <input type="text" placeholder='lastName'  />
      <button type='button' onClick={onSubmit}>Add</button>
      <button type='button' onClick={onEdit}>Edit</button>
    </div>
  )
}

export default UseRef


// traditional: render first -> useeffect -> do something..
// special case: render first -> action -> re-render -> useEffect


