// Event Bubling And Event Cpturing Event Propagation, preventdfault,

const button = document.querySelector('.btn');
const div = document.querySelector('div');
button.addEventListener('click', () => {
  console.log('Button Clicked');
});

div.addEventListener('click', () => {
  console.log('div Clicked');
});
