//global scope / function scope / Block scope

const value = 'hello';

function myFunction(){
  console.log(value);
}

function otherFunction(){
  const value = 'fkfk'
  console.value(value);
}

//////////////

const value = 'Hello'
function myFunction(){
  const value = 'by';
  function functionInside(){
    console.log(value);
  }
}
