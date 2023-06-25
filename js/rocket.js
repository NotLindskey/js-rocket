var timer = null;
var countDownNumber = 10;

var changeState = function (state) {
  document.body.className = 'body-state' + state;
  clearInterval(timer);

  if (state == 2) {
    timer = setInterval(function () {
      document.getElementById('countdown').innerHTML = countDownNumber;
      countDownNumber = countDownNumber - 1;

      if (countDownNumber <= 0) {
        changeState(3);
      }
    }, 500);
  } else if (state == 3) {
  }
};

console.log('hello?');
