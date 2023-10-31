var timer = null;
var countDownNumber = 5;

var changeState = function (state) {
  document.body.className = 'body-state' + state;
  clearInterval(timer);
  countDownNumber = 5;
  document.getElementById('countdown').innerHTML = countDownNumber;

  // countdown
  if (state == 2) {
    timer = setInterval(function () {
      countDownNumber = countDownNumber - 1;
      document.getElementById('countdown').innerHTML = countDownNumber;

      if (countDownNumber > 3 && countDownNumber <= 5) {
        // be nervous
        document.getElementById('nervous').className = 'nervous show';
      } else {
        document.getElementById('nervous').className = 'nervous ';
      }
      if (countDownNumber > 1 && countDownNumber <= 3) {
        // can't wait
        document.getElementById('cant-wait').className = 'cant-wait show';
      } else {
        document.getElementById('cant-wait').className = 'cant-wait';
      }

      if (countDownNumber <= 0) {
        changeState(3);
      }
    }, 1000);
  } else if (state == 3) {
    var success = setTimeout(function () {
      var randomNumber = Math.round(Math.random() * 10);

      console.log('randomNumber: ', randomNumber);

      // success
      if (randomNumber < 3) {
        changeState(4);
        console.log('Success, Try again!');
      } else {
        // oh no
        console.log('Oh no! You have exploded, Try again!');
        console.log('This is not the code you are looking for.');

        changeState(5); // oh no!
      }
    }, 2000);
  }
};

console.log('Launch your rocket!');
