// 1. what is callback function in javascript

// setTimeout(() => {
//   console.log('timer');
// }, 5000);

// function x(y) {
//   console.log('call x');
//   y();
// }
// x(function y() {
//   console.log('call y');
// });

// Deep About Event Listener

// const button = document.getElementById('btn');
// button.addEventListener('click', function xyz() {
//   console.log('buuton clicked');
// });

// Closer Demo with Event Listener

function attachAddEventListener() {
  let count = 0;
  const button = document.getElementById('btn');
  button.addEventListener('click', function xyz() {
    console.log('buuton clicked', count++);
  });
}

attachAddEventListener();
