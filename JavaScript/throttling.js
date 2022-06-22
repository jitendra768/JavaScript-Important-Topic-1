const mythrotle = (fn, d) => {
  return function () {
    document.getElementById('btn').disabled = true;
    setTimeout(() => {
      fn();
    }, d);
  };
};

const newfun = mythrotle(() => {
  document.getElementById('btn').disabled = false;
  console.log('User Clicked');
}, 5000);
