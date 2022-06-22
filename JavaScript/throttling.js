const mythrotle = (fn, d) => {
  return function () {
    setTimeout(() => {
      fn();
    }, d);
  };
};

const newfun = mythrotle(() => {
  console.log('User Clicked');
}, 5000);
