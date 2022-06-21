//1 What exactly is Scope?

// Define a variable in the global scope:
const fullName = 'Oluwatobi Sofela';

// Define nested functions:
function profile() {
  function sayName() {
    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}

const result = profile();
console.log(result);

// if we have define three fullName

const FullName = 'Shubham kumar';

function details(){
const FullName = 'Amit kumar';

  function name(){
const FullName = 'Sachin shahani';

    function anotherName(){
      return FullName;
    }
    anotherName();
  }
  name();
}
console.log(details());
