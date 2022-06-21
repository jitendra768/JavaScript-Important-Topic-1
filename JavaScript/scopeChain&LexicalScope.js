// What exactly is Scope?

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
