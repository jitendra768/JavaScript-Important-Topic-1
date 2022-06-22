let counter = 0;
function getData() {
  console.log('Hello User' + counter++);
}

function myDebounce(call, d) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      call();
    }, d);
  };
}

const bestFun = myDebounce(getData, 1000);
